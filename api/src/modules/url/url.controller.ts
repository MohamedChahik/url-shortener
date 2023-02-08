import { Controller, Get, Param, Res } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('/')
export class UrlController {
  constructor(private service: UrlService) {}

  @Get('api/:code')
  async redirect(
    @Res() res,
    @Param('code')
    code: string,
  ) {
    try {
      const url = await this.service.redirect(code);
      return res.redirect(url.longUrl);
    } catch (error) {
      return res.send('Resource Not Found: 404');
    }
  }
}
