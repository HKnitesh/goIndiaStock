'use client'
import { BsFillCaretRightFill } from "react-icons/bs";
import { useState } from "react";
import SideNavBar from "../menu/SideNavBar";
import DisscussionFourm from "./DisscussionFourm";
import MarketData from "./MarketData";
import MarketStory from "./MarketStory";


export default function Main() {
    const [toggle, setToggle] = useState(false);
    const [show01, setShow01] = useState(true);
    const [show02, setShow02] = useState(true);

    const showForum = () => {
        setShow01(true);
        setShow02(false);
    }
    const showMarket = () => {
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
    const marketStoryWidth = {
        // '@media(min - width: 768px)': { width: '25%' },
        width: '25%',
    };
    const marketStoryDefaultWidth = {
        width: '50%',
    };

    return (
        <div className="flex flex-row bg-[#d3d3d394] h-fit w-full relative ">

            <div className={`flex flex-row  h-fit min-h-screen w-fit z-10 absolute`}>
                {toggle ? <SideNavBar className='' /> : null}

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
                    {/* MarketStories */}
                    {show02 ? <div className={`flex flex-col ms-11 mt-2 md:w-1/2 w-full`}
                    // style={toggle ? marketStoryWidth : marketStoryDefaultWidth}
                    >
                        <h1 className="text-red-500  text-lg pt-1 font-semibold mb-8 hidden md:block">Market Stories</h1>
                        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 mt-4  overflow-y-scroll md:h-[560px] h-screen"
                        >

                            {MarketData?.map((data) =>
                                <MarketStory
                                    key={data.key}
                                    details={data.details}
                                    urls={data.urls}
                                />
                            )}

                        </div>
                    </div>
                        : null}
                </div>
            </div>
        </div>
    );
}