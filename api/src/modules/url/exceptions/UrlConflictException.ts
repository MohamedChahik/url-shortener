import { HandleErrorException } from 'src/exception/HandleException';
import { HttpStatus } from '@nestjs/common';

export class UrlConflictException extends HandleErrorException {
  constructor(message?: string) {
    super(message ?? 'Erreur création shorturl', HttpStatus.CONFLICT);
  }
}
