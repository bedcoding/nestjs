// 최상단 모듈
import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleModule } from './sample/sample.module';
import { Sample } from './sample/entities/sample.entity';
// import { join } from 'path';

@Module({
  imports: [
    SampleModule,

    // 개발기, 운영기 DB 분기 (yarn start:dev 형태로 사용)
    ConfigModule.forRoot({
      isGlobal: true,  // 우리 어플리케이션 어디서나 접근 허용
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test",  // yarn start:dev인 경우 .dev.env 파일을 본다는 뜻
      ignoreEnvFile: process.env.NODE_ENV === 'prod',  // 운영기일 때는 위 ConfigModule 환경변수 파일을 무시하고, 운영기의 환경변수는 다른 방법으로 얻을 것

      // npm i joi를 통한 환경변수 유효성 체크
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod'),  // dev, prod 글자만 허용
        DB_HOST: Joi.string().required(),  // string 타입으로 정의
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      })
    }),

    // DB 계정 정보 (위에서 나눈 분기에 따라 .env.dev 같은 파일에서 가져옴)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,  // port의 타입은 숫자라서 +를 붙여야 됨
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,  // true를 할 경우, 소스코드 컬럼에 변화가 생길 때 데이터베이스도 바꿔버림 => (process.env.NODE_ENV !== 'prod') 형태로도 사용 가능
      logging: process.env.NODE_ENV !== 'prod',  // true인 경우 로그 남기기
      entities: [Sample],  // 자동으로 DB 컬럼 추가하려면 이거 넣은 뒤 synchronize: true를 넣는다
    }),

    // Graphql 연동
    GraphQLModule.forRoot({
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),  // 자동 Schema 파일 생성
      autoSchemaFile: true,  // 위에서처럼 별도 파일을 만들지 말고 그냥 메모리에 저장해두는 경우
      driver: ApolloDriver,
    }), 
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}