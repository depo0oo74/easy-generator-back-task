import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { AuthGuard } from '../auth/guards/auth.gards';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // function to get all users
    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }
    
    // function to get user by id
    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    findById(@Param('id') id: string): Promise<User | null> {
        return this.usersService.findById(id)
    }
}
