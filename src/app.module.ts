// 최상단 모듈
import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { SampleModule } from './sample/sample.module';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),  // 자동 Schema 파일 생성
      autoSchemaFile: true,  // 위에서처럼 별도 파일을 만들지 말고 그냥 메모리에 저장해두는 경우
      driver: ApolloDriver,
    }), 
    
    SampleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
