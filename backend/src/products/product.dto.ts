import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProductDTO {
  @Field()
  name: string;

  @Field(() => Int)
  stock: number;

  @Field(() => Float)
  price: number;
}
