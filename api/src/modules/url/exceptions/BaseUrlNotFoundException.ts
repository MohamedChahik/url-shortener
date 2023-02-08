import { HandleErrorException } from 'src/exception/HandleException';
import { HttpStatus } from '@nestjs/common';

export class BaseUrlNotFoundException extends HandleErrorException {
  constructor() {
    super('Base url not found', HttpStatus.NOT_FOUND);
  }
}
