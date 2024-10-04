import { Controller, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';

@Controller('profile')
@UseGuards(JwtGuard)
export class ProfileController {}
