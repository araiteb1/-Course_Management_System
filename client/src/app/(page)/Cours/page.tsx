"use client"
import React from "react"
import NavBar from "../../../components/navbar/NavBar"
import CoursStatus from "../../../components/courses/CoursStatus"

const StatusCourses = [
    {
      id: 1,
      name: "Course 1",
      status:"IN PROGRESS",
      description: "Description of Course 1",
      date: "2024-09-01",
    },
    {
      id: 2,
      name: "Course 2",
      status:"IN PROGRESS",
      description: "Description of Course 2",
      date: "2024-09-10",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"IN PROGRESS",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"IN PROGRESS",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"IN PROGRESS",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"IN PROGRESS",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"FINISHED",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
    {
      id: 3,
      name: "Course 3",
      status:"IN PROGRESS",
      description: "Description of Course 3",
      date: "2024-09-15",
    },
  ];
export default function Courses() {
    return (
        <div className="flex flex-col w-full h-full">
  
            <section className="flex w-[98%] h-[85%] items-center justify-center p-4">
                <CoursStatus courses={StatusCourses} />
            </section>
        </div>
    )
}