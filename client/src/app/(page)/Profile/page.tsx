import React from "react"
import SideBar from "../../../components/sidebar/page"
import Image from "next/image"
import { IconDocu } from "@/icone/icone"
export default function Profile() {
    return (
        <div className="flex flex-col w-full h-full">
            <section className="flex w-full h-[10%]">
                <SideBar />
            </section>

            <section className="flex w-full h-[10%] items-center justify-around">
                <span className="flex w-[50%] h-full items-center space-x-3 p-4 ">
                    <Image 
                        src="/images/avatar.png"
                        alt="avatar"
                        width={100}
                        height={100}
                    />
                    <div className="flex flex-col  ">
                        <p>Full Name</p>
                        <p>EmailEducation@email.com</p>
                    </div>
                </span>
                <span className="flex w-[50%] h-full items-center justify-end p-4 space-x-3">
                    <p>21</p>
                    <IconDocu />
                </span>
            </section>




            
        </div>
    )
}