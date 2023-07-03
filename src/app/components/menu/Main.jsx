'use client'
import { BsFillCaretRightFill } from "react-icons/bs";
import { useState } from "react";
import SideNavBar from "../menu/SideNavBar";
import DisscussionFourm from "./DisscussionFourm";
import MarketStories from "./MarketStories";


export default function Main() {
    const [toggle, setToggle] = useState(false);
    const [show01, setShow01] = useState(true);
    const [show02, setShow02] = useState(true);

    const showForum = () => {
        setShow01(true);
        setShow02(false);
    }
    const showMarket =() => {
        setShow01(false)
        setShow02(true);
    }

    const sideMenu = {
        '@media(min - width: 768px)': { left: '256px', },
        overflow: 'hidden',
    };
    const setMenu = {
        left: '0',
    };
    return (
        <div className="flex flex-row bg-[#d3d3d394] h-fit w-full ">

            <div className={`grid  flex-row relative h-fit min-h-[80vh] w-fit z-10 `}>
                {toggle ? <SideNavBar className=''/>: null}

                <button
                    onClick={() => { setToggle(!toggle) }}
                    className="flex absolute z-10 h-20 left-full  md:left-64 rounded-r-lg bg-slate-800 top-1/2 items-center justify-center text-white"
                    style={toggle ? sideMenu : setMenu}
                >
                    <BsFillCaretRightFill className=" p-0 m-0" />
                </button>
            </div>

            <div className={`flex flex-col md:ms-4 w-full  text-white z-0 `} >
                <div className="flex flex-row md:hidden w-screen ">
                    <button onClick={showForum} className="field_btn">Disscussion Fourm</button>
                    <button onClick={showMarket} className="field_btn">MarketStories</button>
                </div>

                <div className="flex flex-row w-screen ">
                    {show01 ? <DisscussionFourm className='md:w-1/2 w-full' /> : null}
                    {show02 ? <MarketStories className='md:w-1/2 w-full' /> : null}
                </div>
            </div>
        </div>
    );
}