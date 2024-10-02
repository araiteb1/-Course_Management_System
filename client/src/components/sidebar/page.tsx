import React from "react"
import Image from "next/image"

export default function SideBar () {
    return(
        <div className="flex border border-TextColor w-full h-[85%] items-center justify-between bg-white p-3">
            <span className="flex w-[10%] h-full">
                <Image 
                    src="/images/logo.png"
                    alt="logo"
                    width={900}
                    height={900}
                />
            </span>
        <span className="flex items-center w-[20%] h-full justify-around">
            <button className="flex text-[20px] text-TextColor">Profile</button>
            <button className="flex text-[20px] text-TextColor">Courses</button>
        </span>
        </div>
    )
}