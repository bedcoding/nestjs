import { Field, ObjectType } from "@nestjs/graphql";

// 데이터베이스 모델
@ObjectType()
export class Sample {
    @Field(type => String)
    name: string;

    // null 허용하는 경우: (!) 안 붙음
    @Field(type => Boolean, {nullable:true})
    isGood?:boolean;
}