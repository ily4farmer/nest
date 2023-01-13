import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5700;

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Урок по продвинотому BACKEND')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('ULBI TV')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT);
}
bootstrap();
