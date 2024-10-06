"use client";
import React, { useState, useEffect } from "react";
import { IconFilt } from "../../icone/icone";
import { Checkbox } from "pretty-checkbox-react";
import CoursDetail from "./CoursDetails";

interface Course {
  id: number;
  name: string;
  description: string;
  status: string;
  date: string;
}

interface CoursesListProps {
  courses: Course[];
}

export default function CoursesStatus({ courses }: CoursesListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);


  useEffect(() => {
    filterCourses();
  }, [searchTerm, courses]);

  const filterCourses = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();

    if (trimmedSearchTerm === "") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course) =>
        course.name.toLowerCase().includes(trimmedSearchTerm)
      );
      setFilteredCourses(filtered);
    }
  };

  return (
    <section className="flex w-full h-full flex-col border border-TextColor rounded-lg">
      <div className="flex w-full h-[12%] bg-Main items-center border-b p-3">
        <div className="flex space-x-3 items-center w-[40%]">
          <IconFilt />
          <input
            type="text"
            className="flex items-center p-2 w-[440px] h-[40px] border rounded"
            placeholder="Search courses..."
            aria-label="Search courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </div>

      <div className="flex w-full bg-Main h-[40px] border-b items-center justify-between p-4">
        <Checkbox className="mr-3" aria-label="Select all" />
        <p className="w-1/4">Name</p>
        <p className="w-1/4">Description</p>
        <p className="w-1/4">STATUS</p>
        <p className="w-1/4">Date</p>
      </div>

      <div className="flex flex-col w-full h-full overflow-y-auto">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CoursDetail
              key={course.id}
              name={course.name}
              status={course.status}
              description={course.description}
              date={course.date}
              isEven={index % 2 === 0}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">No courses found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
