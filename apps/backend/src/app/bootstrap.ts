import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from "./app.module.js";

const DEFAULT_PORT = 3000
export const bootstrap = async () => {
    const app: INestApplication = await NestFactory.create(AppModule);
    await app.listen(DEFAULT_PORT);
    return app;
}
