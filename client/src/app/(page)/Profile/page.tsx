"use client";
import React from "react";
import NavBar from "../../../components/navbar/NavBar";
import Image from "next/image";
import { IconDocu } from "@/icone/icone";
import CoursesList from "../../../components/courses/CoursList";


const sampleCourses = [
  {
    id: 1,
    name: "Course 1",
    description: "Description of Course 1",
    date: "2024-09-01",
  },
  {
    id: 2,
    name: "Course 2",
    description: "Description of Course 2",
    date: "2024-09-10",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
  {
    id: 3,
    name: "Course 3",
    description: "Description of Course 3",
    date: "2024-09-15",
  },
];

export default function Profile() {
  return (
    <div className="flex flex-col w-full h-full space-y-3">

      <section className="flex w-full h-[10%]">
        <NavBar />
      </section>

      <section className="flex w-full h-[10%] items-center justify-around">
        <span className="flex w-[50%] h-full items-center space-x-3 p-4 ">
          <Image src="/images/avatar.png" alt="avatar" width={100} height={100} />
          <div className="flex flex-col">
            <p>Full Name</p>
            <p>EmailEducative@email.com</p>
          </div>
        </span>
        <span className="flex w-[50%] h-full items-center justify-end p-4 space-x-3">
          <p>21</p>
          <IconDocu />
        </span>
      </section>


      <section className="flex w-[98%] h-[75%] items-center justify-center p-4">
        <CoursesList courses={sampleCourses} />
      </section>
    </div>
  );
}
