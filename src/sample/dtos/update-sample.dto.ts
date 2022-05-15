import { ArgsType, Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateSampleDto } from "./create-sample-dto";


@InputType()
export class UpdateSampleInputType extends PartialType(CreateSampleDto) {

}

// update 하려면 PK가 있어야 하는데 기존에 쓰던 CreateSampleDto에서는 PK를 안 써서 추가...
@InputType()
export class UpdateSampleDto {
    @Field(type => Number)
    id: number;

    @Field(type => UpdateSampleInputType)
    data: UpdateSampleInputType;

}