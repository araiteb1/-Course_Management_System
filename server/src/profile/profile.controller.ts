import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ProfileService } from './profile.service';
import { userData } from 'src/auth/Interfaces/interface';
import { Request, Response } from 'express';

@Controller('profile')
@UseGuards(JwtGuard)
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}
  
    @Get('me')
    getProfile(@Req() req: Request) {
      return (req.body.user)
    }
}


