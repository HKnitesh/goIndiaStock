'use client'
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import Profile from './user/Profile';
import TapWidget from './TapWidget';
import { useState } from 'react';

export default function Header() {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col">
            <nav className="flex items-center  w-screen bg-white py-4 px-5">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className='flex '>
                        <Link href="/" >
                            <Image
                                src="https://res.cloudinary.com/drw8eqw3i/image/upload/v1688049344/logewithname_m9vrw0.png"
                                alt='company logo'
                                height={80}
                                width={75}
                            />
                        </Link>
                    </div>

                    <span className="flex items-center border-[0.5px] border-solid relative border-gray-600 h-10 md:w-3/6 w-1/2 rounded-lg bg-gray-300">
                        <input
                            className=" placeholder:text-gray500  placeholder:text-base focus:outline-none  h-9 w-full px-3 bg-gray-300"
                            type="text"
                            placeholder="Search"

                        />
                        <label className="absolute right-3" htmlFor="search"><CiSearch className="text-blackF text-2xl" /></label>
                    </span>
                    <div className="md:flex flex-row justify-between items-center h-10 hidden gap-3">
                        <Link href="/Contact">
                            <div className=' text-base font-medium'>Contact Us</div>
                        </Link>
                        <button className=' button '>
                            SIGN UP
                        </button>
                        <button className=' button'>
                            SIGN IN
                        </button>
                    </div>

                    <button className=" md:hidden items-center cursor-pointer" onClick={() => { setShow(true) }}>
                        <Profile />
                    </button>
                    {/* {show ? <div className="md:flex flex-col justify-between items-center h-10 hidden gap-3">
                    <Link href="/Contact">
                        <div className=' text-base font-medium'>Contact Us</div>
                    </Link>
                    <button className=' button '>
                        SIGN UP
                    </button>
                    <button className=' button'>
                        SIGN IN
                    </button>
                </div> : null} */}
                </div>
            </nav>
            <TapWidget />
        </div>
    )
}