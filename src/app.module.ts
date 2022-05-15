// 최상단 모듈
import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleModule } from './sample/sample.module';
import { join } from 'path';

@Module({
  imports: [
    SampleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 5432,
      username: 'study',
      password: '',
      database: 'study',
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