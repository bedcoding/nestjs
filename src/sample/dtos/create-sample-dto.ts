import { ArgsType, Field, InputType, OmitType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from 'class-validator';
import { Sample } from "../entities/sample.entity";

@InputType()
// OmitType: create할 때 id는 필요없으므로 id를 제외한 모든 것을 받기 위한 옵션
export class CreateSampleDto extends OmitType(Sample, ['id'], InputType) {

}