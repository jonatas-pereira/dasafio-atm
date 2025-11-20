import { HttpStatus, HttpException } from "@nestjs/common";

export class MyAppError extends HttpException {
  constructor(messages: string[] | string, status: number = HttpStatus.BAD_REQUEST) {
    super(
      {
        message: Array.isArray(messages) ? messages : [messages],
        error: HttpStatus[status] ?? 'Error',
        statusCode: status,
      },
      status,
    );
  }
}