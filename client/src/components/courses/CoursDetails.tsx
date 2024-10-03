import React from "react";
import { Checkbox } from 'pretty-checkbox-react';

interface CoursInfoProps {
    name: string;
    description: string;
    status: string;
    date: string;
    isEven: boolean;
}

export default function CoursDetail({ name, description, status, date, isEven }: CoursInfoProps) {
  const backgroundColor = isEven ? "bg-[#024F55]" : "bg-white"; 
  
  const statusBorderColor = status === "FINISHED" ? "bg-red-500" : "bg-green-500";  

  return (
    <div className={`flex w-full h-[60px] items-center justify-between border-b p-4 ${backgroundColor}`}>
      <Checkbox className="mr-3" />
      <p className="w-1/4">{name}</p>
      <p className="w-1/4">{description}</p>
      
      <p className={`w-1/4 rounded px-2 py-1 ${statusBorderColor}`}>
        {status}
      </p>
      
      <p className="w-1/4">{date}</p>
    </div>
  );
}
