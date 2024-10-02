import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [AuthModule, ProfileModule, CoursesModule],
  controllers: [AppController, AuthController, CoursesController],
  providers: [AppService, ProfileService],
})
export class AppModule {}
