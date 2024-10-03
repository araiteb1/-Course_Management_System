"use client"
import React, { useState } from "react";
import LoginData from "../../../components/login/LoginData";
import Image from "next/image";
import { IconFlesh } from "@/icone/icone";

const Login: React.FC = () => {

    const [isRegister, setIsRegister] = useState<boolean>(false);


    const toggleRegister = () => {
        setIsRegister(true);
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-full p-1 bg-Main">
            <div className="w-full md:w-[1500px] h-full">
                <LoginData register={isRegister} />
            </div>

            <div className="hidden md:flex flex-col w-full h-full items-center p-2">
                <span className="flex w-full h-[5%] justify-end pr-6">
                    <Image
                        src="/images/um6p_logo.png"
                        alt="um6p"
                        width={140}
                        height={65}
                        className="w-[140px] h-[65px]"
                    />
                </span>

                <span className="flex w-[80%] h-[80%] items-center justify-center">
                    <Image
                        src="/images/book.png"
                        alt="book"
                        width={1000}
                        height={800}
                        className="max-w-[70%] h-auto" 
                    />
                </span>

                <button onClick={toggleRegister} className="flex-col text-[16px] text-TextColor mt-10 self-end p-3">
                    Register
                    <IconFlesh />
                </button>

            </div>
        </div>
    );
}

export default Login;
