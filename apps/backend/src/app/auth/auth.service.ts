import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from '../users/users.service.js';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }

    validateUser(username: string, pass: string) {
        const user = this.userService.findOne(username);

        if (user && user.password === pass) {
            const { password, ...result } = user;

            return result
        }

        return null
    }

    login(user: User) {
        const payload = {
            username: user.username,
            sub: user.userId

        };

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
