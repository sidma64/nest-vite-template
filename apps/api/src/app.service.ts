import { Injectable } from '@nestjs/common';

const helloWorld = {
  message: 'Hello World!',
};

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify(helloWorld);
  }
}
