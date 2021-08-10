import { Subscription, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { UserInfo } from './user.dto';

export const pubSub = new PubSub();

@Resolver()
export class ProductsResolver {
  constructor(
    @InjectRepository(Product) private productsRepo: Repository<Product>,
  ) {}

  @Query(() => [Product])
  public async products(): Promise<Product[]> {
    return await this.productsRepo.find();
  }

  @Subscription(() => UserInfo)
  postReceived() {
    return pubSub.asyncIterator('postReceived');
  }
}
