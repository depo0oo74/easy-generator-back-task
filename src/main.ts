import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston'
import * as winston from 'winston';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function server() {
  const logger = WinstonModule.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  });
  const app = await NestFactory.create(AppModule, {logger});
  
  app.use((req, _, next) => {
    logger.log(
      `${req.method} ${req.originalUrl} ${JSON.stringify(
        req.query,
      )} ${JSON.stringify(req.params)} ${req.statusCode ?? ''}`,
    );
    return next();
  });
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Easy Generator API Documentation')
    .setDescription('This is a Swagger documentation which descripes the endpoints of APIs and thers and responses')
    .setVersion('1.0')
    .addTag('backend-task')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 5000);
}
server();
