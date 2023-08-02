import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this will remove any properties that are not in the DTO
      forbidNonWhitelisted: true, // this will throw an error if there are properties that are not in the DTO
    }),
  ); // this enables the validation pipe for all routes
  await app.listen(3000);
}
bootstrap();
