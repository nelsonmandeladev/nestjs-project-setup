import { CommonModule } from '#libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { options } from './options.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [CommonModule, ConfigModule.forRoot({ load: [options], isGlobal: true }), AuthModule, UsersModule],
})
export class AppModule { }
