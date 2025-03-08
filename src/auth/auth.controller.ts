
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto'
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // function to signup a new user
    @Post('signup')
    signup(@Body() payload: SignUpDto): Promise<object> {
        try {
            return this.authService.signup(payload);
        } catch (err) {
            throw new HttpException('An error occurred!', HttpStatus.SERVICE_UNAVAILABLE);
        }
        
    }

    // function to login user
    @Post('login')
    login(@Body() payload: LoginDto): Promise<{ access_token: string }> {
        try {
            return this.authService.login(payload);
        } catch (err) {
            throw new HttpException('An error occurred!', HttpStatus.SERVICE_UNAVAILABLE);
        }
        
    }
}
