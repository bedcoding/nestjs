import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)  // dto에 넣은 제약조건 @IsString() @Length(5, 10) 같은거 발동시키기
  await app.listen(3000);
}

bootstrap();