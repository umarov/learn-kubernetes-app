import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const host = process.env.APP_HOST || '0.0.0.0'
const port = process.env.PORT && +process.env.PORT || 8080

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, host);
}
bootstrap();
