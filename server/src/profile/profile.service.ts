import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
    getProfile(userId: string) {

      return {
        id: userId,
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        courses: [
          { id: 1, name: 'Course 1', description: 'Description of Course 1', date: '2024-09-01' },
          { id: 2, name: 'Course 2', description: 'Description of Course 2', date: '2024-09-10' },
      
        ],
      };
    }
  }