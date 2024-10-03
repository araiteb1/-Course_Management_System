import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
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

}