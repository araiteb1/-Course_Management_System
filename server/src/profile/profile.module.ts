import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ProfileModule],
  controllers: [ProfileController],
  exports:[ProfileService],
  providers: [ProfileService, JwtService]
})
export class ProfileModule {}
