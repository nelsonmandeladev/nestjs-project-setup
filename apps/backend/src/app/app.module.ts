import { CommonModule } from "#libs/common";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { options } from "./options.js";

@Module({
    imports: [
        CommonModule,
        ConfigModule.forRoot({ load: [options], isGlobal: true })
    ]
})
export class AppModule { }
