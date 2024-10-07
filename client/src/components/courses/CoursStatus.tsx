"use client";
import React, { useState, useEffect } from "react";
import { IconFilt } from "../../icone/icone";
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

    filterCourses();
  }, [searchTerm, courses]);

  return (
    <section className="flex w-full h-full flex-col border border-TextColor rounded-lg">
      <div className="flex w-full h-[12%] bg-Main items-center border-b p-3">
        <div className="flex space-x-3 items-center w-[40%]">
          <IconFilt />
          <input
            type="text"
            className="p-2 w-[300px] h-[40px] border rounded"
            placeholder="Search courses..."
            aria-label="Search courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-full overflow-y-auto">
        {filteredCourses.map((course, index) => (
          <CoursDetail
            key={course.id}
            name={course.name}
            description={course.description}
            status={course.status}
            date={course.date}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
