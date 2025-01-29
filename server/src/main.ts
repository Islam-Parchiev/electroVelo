import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5000',
      'http://127.0.0.1:4000',
      'http://127.0.0.1:3000',
      'http://localhost:5173',
      'http://localhost:5000',
      'http://localhost:3000',
      'http://localhost:4000',
      'http://client:5000',
      'http://client:3000',
      'http://client:4000',
      'http://client'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    
  });
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
