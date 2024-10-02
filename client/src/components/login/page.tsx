import React from "react"
import Image from "next/image"
import { IconEmail} from "../../icone/icone"
export default function LoginData () {
    return (
        <div className="flex flex-col border border-2 w-full h-[100%] items-center justify-around  relative  border-BorderColor rounded ">
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
                <span className="w-[60%] h-[60px]">
                    <p className="text-[16px] text-TextColor ">Email</p>
                    <input className="itmes-center w-full h-[50%]"/>
                </span>
                <span  className="w-[60%] h-[110px] relative">
                    <p className="text-[16px] text-TextColor">Password</p>
                    <input className="itmes-center w-full h-[30%]"/>
                    <p className="flex text-[11px] text-TextColor absolute right-1">forgot your password</p>
                </span>
                <button className="flex w-[80px] h-[40px] text-TextColor bg-ButtonColor items-center justify-center rounded ">Submit</button>
            </form >

            <span className="flex items-center space-x-4">
                <p className="text-[16px] text-TextColor">Continue With :  </p>
                <IconEmail />
            </span>
        </div>
    );
}