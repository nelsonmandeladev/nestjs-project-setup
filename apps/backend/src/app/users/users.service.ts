import { Injectable } from '@nestjs/common';


export type User = {
    userId: number;
    username: string;
    password: string;
};
@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            username: "john",
            password: "changeme"
        },
        {
            userId: 2,
            username: "nelson",
            password: "changeme"
        },
        {
            userId: 3,
            username: "maria",
            password: "changeme"
        },
    ]

    findOne(username: string): User | null {
        return this.users.find(user => user.username === username) ?? null
    }
}
