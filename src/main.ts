import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // transform works to make the request body same as that of the dto for enforcing types as well, it might affect performance
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
