import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateSampleDto {
    @Field(type => String)
    @IsString()
    @Length(5, 10)  // 5~10자 제한
    name: string;

    @Field(type => Boolean)
    @IsBoolean()
    isVegan: boolean;

    @Field(type => String)
    @IsString()
    address: string;

    @Field(type => String)
    ownersName: string;
}

/*
mutation {
  createSample(
  name: "12345"
  isVegan: true
  address: "1"
  ownersName: "1"
  )
}
*/