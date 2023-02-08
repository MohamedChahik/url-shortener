import { HttpException } from '@nestjs/common';

export class HandleErrorException extends HttpException {
  name = '';

  constructor(message: string | Record<string, unknown>, status?: number) {
    const description =
      typeof message === 'string'
        ? { message }
        : {
            ...message,
          };
    super(
      HttpException.createBody({ ...description, ok: false, status }),
      status,
    );
  }
}
