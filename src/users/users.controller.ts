
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // function to get all users
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
    
    // function to get user by id
    @Get(':id')
    findById(@Param('id') id: string): Promise<User | null> {
        return this.usersService.findById(id)
    }
}
