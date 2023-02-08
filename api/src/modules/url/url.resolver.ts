import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UrlInputDto } from './dtos/url.input.dto';
import { UrlOutput } from './dtos/url.output';
import { Url } from './url.model';
import { UrlService } from './url.service';

@Resolver(Url)
export class UrlResolver {
  constructor(private readonly service: UrlService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [UrlOutput])
  getShorUrls() {
    return this.service.getShorUrls();
  }

  @Mutation(() => UrlOutput)
  shortenUrl(@Args('input') input: UrlInputDto) {
    return this.service.shortenUrl(input);
  }
}
