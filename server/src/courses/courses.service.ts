import { Injectable, NotFoundException } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesService {

  constructor(private readonly prisma: PrismaService) {}

  async loadCoursesFromFile() {
    const coursesData = fs.readFileSync(
        path.join('/home/yume/Course_Management_System/server/src/courses_data.json'),
        'utf-8'
    );

    const courses: Prisma.CourseCreateInput[] = JSON.parse(coursesData);

    let adminUser = await this.prisma.user.findUnique({
        where: { email: 'admin@example.com' },
    });

    if (!adminUser) {
        adminUser = await this.prisma.user.create({
            data: {
              firstName: 'Admin',
              lastName: 'Admin',
              email: 'admin@example.com',
              password: 'hashed_password',
            },
        });
    }

    for (const course of courses) {
        await this.prisma.course.create({
            data: {
                title: course.title,
                description: course.description,
                instructor: course.instructor,
                schedule: course.schedule,
                creator: {
                    connect: { id: adminUser.id },
                },
            },
        });
    }
}


async getCourseByTitle(title: string): Promise<Course[] | null> {
    return this.prisma.course.findMany({
      where: {
        title: title,
      },
    });
  }

  async getCourseByInstructor(instructor: string): Promise<Course[] | null> {
    return this.prisma.course.findMany({
      where: {
        instructor: instructor,
      },
    });
  }

  async getAllCourses(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const courses = await this.prisma.course.findMany({
      skip: skip,
      take: limit,
    });

    const totalCourses = await this.prisma.course.count();

    return {
      totalCourses,
      totalPages: Math.ceil(totalCourses / limit),
      currentPage: page,
      courses,
    };
  }
  

  async addCourse(data: {
    title: string;
    description: string;
    instructor: string;
    schedule: string;
    creatorEmail: string;
}): Promise<Course> {
    const user = await this.prisma.user.findUnique({
        where: { email: data.creatorEmail },
    });

    if (!user) {
        throw new NotFoundException(`User with email ${data.creatorEmail} not found`);
    }

    return this.prisma.course.create({
        data: {
            title: data.title,
            description: data.description,
            instructor: data.instructor,
            schedule: data.schedule,
            creator: {
                connect: { id: user.id },
            },
        },
    });
}

}
