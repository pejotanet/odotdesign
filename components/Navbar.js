'use client'

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
    <nav className="left-0 top-0 w-full z-10 bg-[#d9d9d9]">
        <div className=" max-w-[1240px] m-auto flex justify-between items-center p-8 sm:p-4 text-black">
            <Link href='/'>
                <h1  className="font-bold text-2xl">Odot Design</h1>
            </Link>
            <ul  className="hidden sm:flex">
                <li className="p-4">
                    <Link href='/' className="hover:text-[#FA9F43]">Home</Link>
                </li>
                <li className="p-4">
                    <Link href='/#services' className="hover:text-[#FA9F43]">Services</Link>
                </li>
                <li className="p-4">
                    <Link href='/portfolio' className="hover:text-[#FA9F43]">Portfolio</Link>
                </li>
                <li className="p-4">
                    <Link href='/#contact' className="hover:text-[#FA9F43]">Contact us</Link>
                </li>
            </ul>

            {/* Mobile Button*/}
            <div onClick={handleNav} className="block sm:hidden z-20">
                {nav ? <AiOutlineClose size={20} className=" text-white hover:text-[#FA9F43]"  /> : <AiOutlineMenu size={20}  />}
            </div>

            {/* Mobile Menu */}
            <div className={
                nav 
                    ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-[500px] bg-black/90 border-b border-white text-center ease-in duration-300 z-10'
                    : 'sm:hidden absolute top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }>
                <ul className="text-white">
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-[#FA9F43] border-b border-white hover:border-[#FA9F43]">
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-[#FA9F43] border-b border-white hover:border-[#FA9F43]">
                        <Link href='/#services'>Services</Link>
                    </li>
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-[#FA9F43] border-b border-white hover:border-[#FA9F43]">
                        <Link href='/portfolio'>Portfolio</Link>
                    </li>
                    <li onClick={handleNav} className="p-4 text-4xl hover:text-[#FA9F43] border-b border-white hover:border-[#FA9F43]">
                        <Link href='/#contact'>Contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}