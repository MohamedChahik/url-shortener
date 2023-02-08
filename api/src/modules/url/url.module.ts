import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlController } from './url.controller';
import { Url } from './url.model';
import { UrlResolver } from './url.resolver';
import { UrlService } from './url.service';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  providers: [UrlService, UrlResolver, ConfigService],
  controllers: [UrlController],
})
export class UrlModule {}
