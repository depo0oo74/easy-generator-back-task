
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from '../users/schemas/user.schema';
import * as dotenv from 'dotenv';

// Configure dot env
dotenv.config()

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
    JwtModule.register({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' },
      })
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
