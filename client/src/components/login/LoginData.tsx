import React from "react";
import Image from "next/image";
import { IconEmail } from "../../icone/icone";
import Link from "next/link"
interface LoginDataProps {
    register: boolean;
}

const LoginData: React.FC<LoginDataProps> = ({ register }) => {
    if (register) {
        return (
            <div className="flex flex-col border border-2 w-full h-[100%] items-center justify-around relative border-BorderColor rounded ">
                <div className="flex w-full h-[2%]">
                    <Image 
                        src="/images/logo.png"
                        alt="logo"
                        width={900}
                        height={900}
                        className="flex w-[100px] h-[90px] absolute right-5"
                    />
                </div>
                <form className="flex flex-col w-[86%] h-[80%] items-center justify-center border space-y-3">
                    <span className="w-[300px] h-[60px]">
                        <p className="text-[16px] text-TextColor ">First Name</p>
                        <input
                            type="text"
                            className="items-center w-full h-[50%] border rounded p-2"
                            placeholder="Enter your first name"
                        />
                    </span>
                    <span className="w-[300px] h-[60px]">
                        <p className="text-[16px] text-TextColor">Last Name</p>
                        <input
                            type="text"
                            className="items-center w-full h-[50%] border rounded p-2"
                            placeholder="Enter your last name"
                        />
                    </span>
                    <span className="w-[300px] h-[60px]">
                        <p className="text-[16px] text-TextColor">Email</p>
                        <input
                            type="email"
                            className="items-center w-full h-[50%] border rounded p-2"
                            placeholder="Enter your email"
                        />
                    </span>
                    <span className="w-[300px] h-[60px]">
                        <p className="text-[16px] text-TextColor">Password</p>
                        <input
                            type="password"
                            className="items-center w-full h-[50%] border rounded p-2"
                            placeholder="Enter your password"
                        />
                    </span>

                    <button className="flex w-[80px] h-[40px] text-TextColor bg-ButtonColor items-center justify-center rounded">Submit</button>
                </form>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col border border-2 w-full h-[100%] items-center justify-around relative border-BorderColor rounded ">
                <div className="flex w-full h-[5%]">
                    <Image 
                        src="/images/logo.png"
                        alt="logo"
                        width={900}
                        height={900}
                        className="flex w-[100px] h-[90px] absolute right-5"
                    />
                </div>
                <form className="flex flex-col w-[86%] h-[40%] items-center justify-center border space-y-3">
                    <span className="w-[300px] h-[60px]">
                        <p className="text-[16px] text-TextColor ">Email</p>
                        <input
                            type="email"
                            className="items-center w-full h-[50%] border rounded p-2"
                            placeholder="Enter your email"
                        />
                    </span>
                    <span className="w-[300px] h-[110px] relative">
                        <p className="text-[16px] text-TextColor">Password</p>
                        <input
                            type="password"
                            className="items-center w-full h-[30%] border rounded p-2"
                            placeholder="Enter your password"
                        />
                        <p className="flex text-[11px] text-TextColor absolute right-1">Forgot your password?</p>
                    </span>
                    <button className="flex w-[80px] h-[40px] text-TextColor bg-ButtonColor items-center justify-center rounded">
                        Submit
                    </button>
                </form>
                <span className="flex items-center space-x-4">
                    <p className="text-[16px] text-TextColor">Continue With: </p>
                    <Link href="/Profile"><IconEmail /></Link>
                </span>
            </div>
        );
    }
}

export default LoginData;
