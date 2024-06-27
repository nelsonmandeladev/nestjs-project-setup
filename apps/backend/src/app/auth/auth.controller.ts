import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '../users/users.service.js';
import { AuthService } from './auth.service.js';
import { LocalAuthGuard } from './local-auth.guard.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Request() req: { user: User }) {
    return this.authService.login(req.user)
  }
}
