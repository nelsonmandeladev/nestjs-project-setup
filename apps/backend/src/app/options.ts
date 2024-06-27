import { Options } from "./options.interface";

export const options = (): Options => ({
    backend: {
        port: Number.parseInt(process.env.PORT ?? "3000", 10),
        basePath: process.env.APP_BASE_PATH ?? "api",
        corsOrigin: process.env.APP_CORS_ORIGIN ?? "http://localhost:3000",
    }
})
