import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { nanoid } from 'nanoid/async';
import { Repository } from 'typeorm';
import { Url } from './url.model';
import { UrlOutput } from './dtos/url.output';
import { UrlInputDto } from './dtos/url.input.dto';
import { UrlConflictException } from './exceptions/UrlConflictException';
import { ConfigService } from '@nestjs/config';
import { BaseUrlNotFoundException } from './exceptions/BaseUrlNotFoundException';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private repo: Repository<Url>,
    private readonly configService: ConfigService,
  ) {}
  async shortenUrl(input: UrlInputDto): Promise<UrlOutput> {
    try {
      let graphUrl: UrlOutput = {
        shortUrl: '',
        id: '',
      };
      const { longUrl } = input;

      //check if the URL has already been shortened
      let result = await this.repo.findOne({ longUrl });

      //return it if it exists
      if (result) {
        graphUrl.shortUrl = result.shortUrl;
        graphUrl.id = result.id;
      } else {
        const urlCode = await nanoid(10);
        const baseURL = this.configService.get('BASE_URL');

        if (!baseURL) throw new BaseUrlNotFoundException();

        const shortUrl = `${baseURL}/${urlCode}`;

        const newUrl = this.repo.create({
          urlCode,
          longUrl,
          shortUrl,
        });

        await this.repo.save(newUrl);
        graphUrl.shortUrl = newUrl.shortUrl;
        graphUrl.id = newUrl.id;
      }

      return graphUrl;
    } catch (error) {
      if (error instanceof BaseUrlNotFoundException) {
        throw new BaseUrlNotFoundException();
      }
      throw new UrlConflictException(error.message);
    }
  }

  async getShorUrls() {
    return this.repo.find();
  }

  async redirect(urlCode: string) {
    const url = await this.repo.findOne({ urlCode });
    if (!url) throw new NotFoundException('url not');
    return url;
  }

  async updateUrl(id: string, longUrl: string) {
    try {
      const url = await this.repo.update(id, { longUrl });
      if (url) return url;
    } catch (error) {
      console.log(error);
      throw new NotFoundException('Resource Not Found');
    }
  }
}
