import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

// Import modules
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module';

// Configure dot env
dotenv.config()

// Variables
const databaseName = process.env.DB_NAME
const databasePassword = process.env.DB_PASS
const databaseUser = process.env.DB_USER

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${databaseUser}:${databasePassword}@${databaseUser}.mk0uu.mongodb.net/${databaseName}?retryWrites=true&w=majority`),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
