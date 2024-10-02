import React from "next"
import LoginData from "../../../components/login/page"
import Image from "next/image"
import { IconFlesh } from "@/icone/icone"

export default function Login () {
    return (
        <div className="flex w-full h-full p-6 bg-Main">
            <div className="flex w-[45%] ">
                <LoginData />
            </div>
            <div className="flex flex-col w-full h-full items-center ">
                <span className="flex w-full h-[5%]">
                    <Image 
                        src="/images/um6p_logo.png"
                        alt="um6p"
                        width={900}
                        height={900}
                        className="flex w-[140px] h-[65px] self-end absolute right-6"
                    />
                </span>
                <span className="flex w-[80%] h-[80%] items-center self-center">
                    <Image 
                        src="/images/book.png"
                        alt="book"
                        width={1000}
                        height={800}
                        className="w-[1000px]  "
                    />
                </span>
                <p className="flex-col text-[16px] text-TextColor self-end">
                    Register
                    <IconFlesh />
                </p>
            </div>
        </div>
    )
}