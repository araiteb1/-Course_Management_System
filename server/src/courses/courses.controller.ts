import { Controller, Get, Param, Res, HttpCode, HttpStatus, Query, Post, Body, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CoursesService } from './courses.service';
import { JwtGuard } from 'src/auth/guard';

@Controller('courses')
@UseGuards(JwtGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('test')
  test(){
    return 'Hello World';
  }
  @Get('title/:title')
  async getCourseByTitle(@Param('title') title: string, @Res() res: Response) {
    const course = await this.coursesService.getCourseByTitle(title);

    if (course) {
      return res.status(HttpStatus.OK).json(course);
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ message: 'Course not found' });
    }
  }

  @Get('instructor/:instructor')
  @HttpCode(HttpStatus.OK)
  async getCoursesByInstructor(@Param('instructor') instructor: string, @Res() res: Response) {
    const courses = await this.coursesService.getCourseByInstructor(instructor);

    if (courses.length > 0) {
      return res.status(HttpStatus.OK).json(courses);
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({ message: 'No courses found for this instructor' });
    }
  }

  @Get('courses/')
  async getAllCourses(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    return this.coursesService.getAllCourses(pageNum, limitNum);
  }

  @Post('addcourse')
  async addCourse(@Body() courseData: {
    title: string;
    description: string;
    instructor: string;
    schedule: string;
    creatorEmail: string;
  }) {
    return this.coursesService.addCourse(courseData);
  }

}
