import { Body, Controller, Post } from '@nestjs/common';
import { pubSub } from './products/products.resolver';
import { UserInfo } from './products/user.dto';

@Controller()
export class AppController {
  @Post('/test')
  public receiveData(@Body() data: UserInfo) {
    pubSub.publish('postReceived', { postReceived: data });
    return data;
  }
}
