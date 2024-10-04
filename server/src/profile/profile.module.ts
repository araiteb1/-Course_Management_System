import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [ProfileModule],
  controllers: [ProfileController],
  exports:[ProfileService],
  providers: [ProfileService]
})
export class ProfileModule {}
