'use client'
import Profile from "../user/Profile";
import { MdNotifications, MdMessage, MdOutlineArrowDropDown } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function SideNavBar({ className }) {


    return (
        <div className="flex flex-col w-full bg-slate-800  text-white md:w-64">
            <div className="flex flex-row justify-between items-center gap-2.5 m-3">
                <div className="flex flex-row justify-start items-center">
                    <Profile />
                    <h2 className="mx-2 font-medium text-sm">Hello, User</h2>
                </div>
                <MdNotifications className="w-6  h-6" />
            </div>
            <div className='w-full h-0 border-[#9a9a9a] border-[1.5px] border-solid '></div>
            <div className="flex flex-col">
                <button className="sideBar_btn">
                    <div className="flex flex-row justify-start items-center">
                        <MdMessage className="w-4 h-4 md:w-5  md:h-5" />
                        <h2 className="sideBar_h2">Disscussion Fourm</h2>
                    </div>
                    <MdOutlineArrowDropDown className="w-6  h-6" />
                </button>
                <button className="sideBar_btn">
                    <div className="flex flex-row justify-start items-center">
                        <RiMoneyDollarCircleFill className="w-4 h-4 md:w-5  md:h-5" />
                        <h2 className="sideBar_h2">Market Stories</h2>
                    </div>
                    <MdOutlineArrowDropDown className="w-6  h-6" />
                </button>
                <button className="sideBar_btn">
                    <h2 className="sideBar_h2 pl-5">Sentiment</h2>
                </button>
                <button className="sideBar_btn">
                    <h2 className="sideBar_h2 pl-5">Market</h2>
                </button>
                <button className="sideBar_btn">
                    <h2 className="sideBar_h2 pl-5">Sector</h2>
                </button>
                <button className="sideBar_btn">
                    <h2 className="sideBar_h2 pl-5">Watchlist</h2>
                </button>
                <button className="sideBar_btn">
                    <h2 className="sideBar_h2 pl-5">Event</h2>
                </button>
                <button className="sideBar_btn">
                    <h2 className="sideBar_h2 pl-5">News/Interview</h2>
                </button>

            </div>
        </div>
    );
}
