"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IconDocu } from "@/icone/icone";
import CoursesList from "../../../components/courses/CoursList";


const sampleCourses = [
  {
    id: 1,
    title: "Course 1",
    description: "Description of Course 1",
    instructor:"Beth ",
    date: "2024-09-01",
  },
  {
    id: 2,
    title: "Course 2",
    description: "Description of Course 2",
    instructor:"Beth Williamson",
    date: "2024-09-10",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Hannah Ward ",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Hannah Ward",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Charles Lynn",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Charles Lynn",
    date: "2024-09-15",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Description of Course 3",
    instructor:"Beth Williamson",
    date: "2024-09-15",
  },
];

interface Course {
  id: number;
  title: string;
  description: string;
  instructor:string;
  date: string;
}

interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  courses: Course[];
}

export default function Profile() {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = (newCourse:Course) => {
    setCourses([...courses, newCourse]); 
  };


  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch('http://localhost:8000/profile/me', {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data: UserProfile = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex flex-col w-full h-full space-y-3">
      <section className="flex w-[98%] h-[10%] items-center justify-around">
        <span className="flex w-[50%] h-full items-center space-x-3 p-4 ">
          <Image src="/images/avatar.png" alt="avatar" width={100} height={100} />
          <div className="flex flex-col">
            <p>{userData?.fullName}</p>
            <p>{userData?.email}</p>
          </div>
        </span>
        <span className="flex w-[50%] h-full items-center justify-end p-6 space-x-3">
          <p>{sampleCourses.length}</p>
          <IconDocu />
        </span>
      </section>


      <section className="flex w-[98%] h-[85%] items-center justify-center p-3">
        <CoursesList courses={sampleCourses} onAddCourse={addCourse}/>
      </section>
    </div>
  );
}
