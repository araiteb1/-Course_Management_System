"use client"
import React from "react";
import { IconFilt } from "../../icone/icone";
import { Checkbox } from 'pretty-checkbox-react';
import CoursInfo from "./CoursInfo";

interface Course {
  id: number;
  name: string;
  description: string;
  date: string;
}

interface CoursesListProps {
  courses: Course[];
}

export default function CoursesList({ courses }: CoursesListProps) {
  return (
    <section className="flex w-full h-full flex-col border border-TextColor rounded-lg">
      <div className="flex w-full h-[12%] justify-between bg-Main items-center border-b p-3">
        <div className="flex space-x-3 items-center w-[40%]">
          <IconFilt />
          <input
            type="text"
            className="flex items-center p-2 w-[440px] h-[40px] border rounded"
            placeholder="Search courses..."
            aria-label="Search courses"
          />
        </div>
        <button className="flex items-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <span className="ml-2"> + Add Course</span>
        </button>
      </div>


      <div className="flex w-full bg-Main h-[40px] border-b items-center justify-between p-4">
        <Checkbox className="mr-3" aria-label="Select all" />
        <p className="w-1/4">Name</p>
        <p className="w-1/4">Description</p>
        <p className="w-1/4">Date</p>
      </div>

      <div className="flex flex-col w-full h-full overflow-y-auto">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <CoursInfo
              key={course.id}
              name={course.name}
              description={course.description}
              date={course.date}
              isEven={index % 2 === 0}  
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No courses available.</p>
          </div>
        )}
      </div>
    </section>
  );
}
