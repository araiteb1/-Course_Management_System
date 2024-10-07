"use client";
import React, { useState, useEffect } from "react";
import { IconFilt } from "../../icone/icone";
import CoursInfo from "./CoursInfo";

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  date: string;
}

interface CoursesListProps {
  courses: Course[];
  onAddCourse: (newCourse: Course) => void;
}

export default function CoursesList({ courses, onAddCourse }: CoursesListProps) {
  const [addCourse, setAddCourse] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseInstructor, setCourseInstructor] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDate, setCourseDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState<"title" | "instructor">("title");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    const filterCourses = () => {
      const trimmedSearchTerm = searchTerm.trim().toLowerCase();

      if (trimmedSearchTerm === "") {
        setFilteredCourses([]);
        return;
      }

      const filtered = courses.filter((course) => {
        if (searchType === "title") {
          return course.title.toLowerCase().includes(trimmedSearchTerm);
        } else if (searchType === "instructor") {
          return course.instructor.toLowerCase().includes(trimmedSearchTerm);
        }
        return false;
      });

      setFilteredCourses(filtered);
    };

    filterCourses();
  }, [searchTerm, searchType, courses]);

  const handleAddCourse = () => {
    const newCourse: Course = {
      id: Date.now(),
      title: courseName,
      description: courseDescription,
      instructor: courseInstructor,
      date: courseDate,
    };

    onAddCourse(newCourse);
    setAddCourse(false);
    setCourseName("");
    setCourseDescription("");
    setCourseInstructor("");
    setCourseDate("");
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <section className="flex w-full h-full flex-col border border-TextColor rounded-lg">
      <div className="flex w-full h-[12%] justify-between bg-Main items-center border-b p-3">
        <div className="flex space-x-3 items-center w-[60%]">
          <button onClick={toggleSearchVisibility} className="flex items-center">
            <IconFilt />
          </button>
          {isSearchVisible && (
            <>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as "title" | "instructor")}
                className="border rounded p-2"
              >
                <option value="title">Search by Title</option>
                <option value="instructor">Search by Instructor</option>
              </select>
            </>
          )}
          <input
            type="text"
            className="flex items-center p-2 w-[300px] h-[40px] border rounded"
            placeholder={`Search courses by ${searchType}...`}
            aria-label="Search courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="flex items-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setAddCourse(true)}
        >
          <span className="ml-2"> + Add Course</span>
        </button>
      </div>

      <div className="flex flex-col w-full h-full overflow-y-auto">
        {!searchTerm && (
          <>
            <h3 className="p-2 text-center">All Courses</h3>
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <CoursInfo
                  key={course.id}
                  name={course.title}
                  description={course.description}
                  instructor={course.instructor}
                  date={course.date}
                  isEven={index % 2 === 0}
                />
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No courses available.</p>
              </div>
            )}
          </>
        )}

        {searchTerm && (
          <>
            <h3 className="p-2 text-center">Filtered Courses</h3>
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <CoursInfo
                  key={course.id}
                  name={course.title}
                  description={course.description}
                  instructor={course.instructor}
                  date={course.date}
                  isEven={index % 2 === 0}
                />
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No courses found for &quot;{searchTerm}&quot;.</p>
              </div>
            )}
          </>
        )}
      </div>

      {addCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2>Add New Course</h2>
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-2 my-2 border rounded"
            />
            <input
              type="text"
              placeholder="Course Description"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="w-full p-2 my-2 border rounded"
            />
            <input
              type="text"
              placeholder="Instructor"
              value={courseInstructor}
              onChange={(e) => setCourseInstructor(e.target.value)}
              className="w-full p-2 my-2 border rounded"
            />
            <input
              type="date"
              value={courseDate}
              onChange={(e) => setCourseDate(e.target.value)}
              className="w-full p-2 my-2 border rounded"
            />
            <button
              onClick={handleAddCourse}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Save Course
            </button>
            <button
              onClick={() => setAddCourse(false)}
              className="bg-red-500 text-white p-2 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
