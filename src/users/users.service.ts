import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // function to get all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // function to get user by id
  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec()
  }
}

