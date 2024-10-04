import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy';
import { GoogleStrategy } from './strategy/auth.strategy.google';
import { JwtGuard } from './guard';

@Module({
  imports: [JwtModule.register({secret: process.env.JWT_SECRET}), ],
  providers: [AuthService, JwtStrategy, GoogleStrategy, JwtService, JwtGuard],
  controllers: [AuthController],
  exports: [AuthService, JwtGuard],
})
export class AuthModule {}