import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module.js';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { jwtConstants } from './constants.js';
import { LocalStrategy } from './local.strategy.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secretKey,
      signOptions: {
        expiresIn: jwtConstants.tokenExpires
      }
    })
  ]
})
export class AuthModule { }
