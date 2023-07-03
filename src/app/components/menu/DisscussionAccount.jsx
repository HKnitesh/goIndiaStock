'use client'
import { FiHeart, FiEye, FiMessageSquare, FiShare2 } from "react-icons/fi";
import Profile from "../user/Profile";
import { useState } from "react";

export default function DisscussionAccount(props) {
    const [colors, setColor] = useState(false);

    const red = {
        color: 'red',
        // backgroundColor: 'red',
    };

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-md shadow-zinc-500  w-[98%] text-zinc-600 p-2 ps-5 pb-3">
            <div className="flex justify-end text-xs  font-medium text-indigo-500">{props.time}</div>
            <div className="flex flex-row gap-2">
                <Profile className=' w-16' />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-6 w-full">
                        <h4 className=" font-semibold">{props.name}</h4>
                        <button className={`flex items-center justify-center text-white text-[10px] px-2 w-auto h-auto rounded-full  ${props.bgColor}`} type="submit">{props.section}</button>
                    </div>
                    <p className=" text-sm w-[90%]">{props.comment}</p>

                    <div className="flex flex-row items-center justify-between text-black w-full">
                        <button className="flex flex-row items-center gap-1 md:gap-2">
                            <FiHeart onClick={() => { setColor(!colors) }} style={colors ? red : null} ></FiHeart>
                            <p className="text-xs md:text-sm font-medium">2k</p>
                        </button>
                        <button className="flex flex-row items-center gap-1 md:gap-2">
                            <FiEye />
                            <p className="text-xs md:text-sm font-medium">2k</p>
                        </button>
                        <button className="flex flex-row items-center gap-1 md:gap-2">
                            <FiMessageSquare />
                            <p className="text-xs md:text-sm font-medium">2k Comments</p>
                        </button>
                        <button className="flex flex-row items-center gap-1 md:gap-2">
                            <FiShare2 />
                            <p className="text-xs md:text-sm font-medium">Share</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}