import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/schemas/user.schema';
import { SignUpDto } from './dto/signup.dto'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { hashPassword, comparePassword } from '../utils/password'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}

  // function to sign up a new user
  async signup(payload: SignUpDto): Promise<object> {
    if (payload.password !== payload.cpassword) {
        throw new HttpException('كلمات المرور غير متطابقة!', HttpStatus.BAD_REQUEST);
    }
    const user: object | null = await this.userModel.findOne({email: payload.email})
    if (user) {
        throw new HttpException('هذا المستخدم موجود بالفعل', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword: string = hashPassword(payload.password)
    const creatUser = new this.userModel({
        ...payload,
        password: hashedPassword
    });
    creatUser.save();
    return {
        statusCode: 201,
        message: 'User created successfully',

    }
  }


  // function to login user
  async login(payload: LoginDto): Promise<{ access_token: string }> {
    const user: object | null = await this.userModel.findOne({email: payload.email})
    if (!user) {
        throw new UnauthorizedException('البريد الالكتروني او كلمة المرور غير صحيحة');
    }
    const isPsswordsMatched: boolean = comparePassword(payload.password, user["password"])
    if (!isPsswordsMatched) {
        throw new UnauthorizedException('البريد الالكتروني او كلمة المرور غير صحيحة');
    }

    const userData = { sub: user["_id"], username: user["username"] };
    return {
        access_token: await this.jwtService.signAsync(userData),
    };
  }
}

