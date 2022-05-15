import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 데이터베이스 모델
// @InputType({ isAbstract: true })  // 이 inputType이 스키마에 포함되지 않길 원해 -> 이걸 어디선가 복사해서 쓴다 (직접 쓰는게 아니라 어떤 것으로 확장시킴)
@Entity()
@ObjectType()
export class Sample {
    @PrimaryGeneratedColumn()  // PK
    @Field(type => Number)
    id: number

    @Column()
    @Field(type => String)
    @IsString()
    @Length(5, 10)
    name: string;

    @Field(type => Boolean, { nullable: true })  // null을 허용하는 경우
    @Column({ default: true })  // 이 컬럼이 없을 경우 무시 (근데 defaultValue 옵션이 있는 경우에는 굳이 이거 안 넣어도 없는 채로 보내도 인식함)
    @IsOptional()
    @IsBoolean()
    isVegan:boolean;

    @Column()
    @IsString()
    @Field(type => String, { defaultValue: "test" })  // 기본값
    address:string;
}

// null 허용하는 경우: (!) 안 붙음
// @Field(type => Boolean, {nullable:true})

// 형태 (isVegan 안 넣어도 되게 설정할 경우 빼도 됨)
// mutation {
//     createSample(input: {
//         name: "12345"
//         isVegan: true
//         address: "1"
//         }
//     )
// }