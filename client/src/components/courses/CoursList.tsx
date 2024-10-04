"use client"
import React, { useState } from "react";
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
  onAddCourse: (newCourse: Course) => void;
}

export default function CoursesList({ courses, onAddCourse  }: CoursesListProps) {

  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDate, setCourseDate] = useState("");

  const handleAddCourse = () => {
    const newCourse: Course = {
      id: Date.now(), 
      name: courseName,
      description: courseDescription,
      date: courseDate,
    };
    
    onAddCourse(newCourse); 
    setShowModal(false);
  };

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
          <button
            className="flex items-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setShowModal(true)}
          >
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
      {showModal && (
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
              onClick={() => setShowModal(false)}
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
