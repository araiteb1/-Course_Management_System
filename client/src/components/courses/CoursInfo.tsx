import React from "react";
import { Checkbox } from 'pretty-checkbox-react';

interface CoursInfoProps {
    name: string;
    description: string;
    instructor:string
    date: string;
    isEven: boolean;
}
  
export default function CoursInfo({ name, description, instructor , date, isEven }: CoursInfoProps) {
  const backgroundColor = isEven ? "bg-[#024F55]" : "bg-white"; 
  
  return (
    <div className={`flex w-full h-[60px] items-center justify-between border-b p-4 ${backgroundColor}`}>
      <Checkbox className="mr-3" />
      <p className="w-1/4">{name}</p>
      <p className="w-1/4">{description}</p>
      <p className="w-1/4">{instructor}</p>
      <p className="w-1/4">{date}</p>
    </div>
  );
}
