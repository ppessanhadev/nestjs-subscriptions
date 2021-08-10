import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class UserInfo {
  @Field(() => Int)
  id?: number;

  @Field()
  name?: string;

  @Field(() => Float)
  age?: number;
}
