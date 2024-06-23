import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from "./app.module.js";
import { BackendModuleOptions } from './options.interface.js';

export const bootstrap = async () => {
    const app: INestApplication = await NestFactory.create(AppModule);

    // Configure Nest app 
    const options = app.get(ConfigService).getOrThrow<BackendModuleOptions>("backend");
    app.setGlobalPrefix(options.basePath);
    app.use(helmet());
    app.enableCors({ origin: options.corsOrigin });
    app.enableShutdownHooks();


    // Swagger setup
    const config = new DocumentBuilder().setTitle("NestJS Base project setup").build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(options.basePath, app, document);


    await app.listen(options.port);
    return app;
}
