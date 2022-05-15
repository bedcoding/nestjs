// 최상단 모듈
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleModule } from './sample/sample.module';
import { join } from 'path';

@Module({
  imports: [
    SampleModule,
    ConfigModule.forRoot({
      isGlobal: true,  // 우리 어플리케이션 어디서나 접근 허용
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test",  // yarn start:dev인 경우 .dev.env 파일을 본다는 뜻
      ignoreEnvFile: process.env.NODE_ENV === 'prod',  // 운영기일 때는 위 ConfigModule 환경변수 파일을 무시하고, 운영기의 환경변수는 다른 방법으로 얻을 것
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,  // port의 타입은 숫자라서 +를 붙여야 됨
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,  // 소스코드 컬럼에 변화가 생길 때 데이터베이스도 바꿔버림
      logging: true,  // 로그
    }),
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