import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

const host = process.env.APP_HOST || '0.0.0.0'
const port = process.env.PORT && +process.env.PORT || 8080

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true, rewriteUrl: (req) => {
        if (req.url.startsWith('/learn-kubernetes-app')) {
          return req.url.replace('/learn-kubernetes-app', '')
        } else {
          return req.url
        }
      }
    })
  );
  await app.listen(port, host);
}

bootstrap();
