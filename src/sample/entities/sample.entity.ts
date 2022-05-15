import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 데이터베이스 모델
@Entity()
@ObjectType()
export class Sample {
    @PrimaryGeneratedColumn()  // PK
    @Field(type => Number)
    id: number

    @Column()
    @Field(type => String)
    name: string;

    @Column()
    @Field(type => Boolean)
    isVegan:boolean;

    @Column()
    @Field(type => Boolean)
    address:string;

    @Column()
    @Field(type => Boolean)
    ownerName:string;

    @Column()
    @Field(type => String)
    categoryName:string;
}

// null 허용하는 경우: (!) 안 붙음
// @Field(type => Boolean, {nullable:true})