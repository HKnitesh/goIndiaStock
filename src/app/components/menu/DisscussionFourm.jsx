
import { CiSearch } from "react-icons/ci";
import DisscussionAccount from "./DisscussionAccount";
import AccountData from "./AccountData";

export default function DisscussionFourm({ className }) {


    return (
        <div className={`flex flex-col gap-4 mt-2 ${className}`}>
            <h1 className="text-red-500  text-lg pt-1  font-semibold hidden md:block">Disscussion Fourm</h1>
            <div id="Filters" className="flex flex-col gap-2.5 text-white ms-7 md:w-[105%] w-full">
                <h3 className="text-black font-semibold text-base">Filters</h3>
                <div className="flex flex-row bg-white rounded-lg shadow-md shadow-zinc-500 items-center justify-center w-[90%] px-2 py-4">
                    <button className="section_btn bg-red-600" type="submit">Section 1</button>
                    <button className="section_btn bg-sky-700" type="submit">Section 2</button>
                    <button className="section_btn bg-yellow-300" type="submit">Section 3</button>
                    <span className="flex items-center border-[1.5px] border-solid border-[#7b7b7b] w-2/5 h-9 rounded-full bg-gray-300">
                        <label className="mx-3 text-black" htmlFor="search"><CiSearch className="text-blackF text-xl" /></label>
                        <input
                            className=" placeholder:text-gray500  placeholder:text-xs focus:outline-none w-[70%] text-black bg-gray-300"
                            type="text"
                            placeholder="Search here"

                        />
                    </span>
                </div>
            </div>

            <div className="flex flex-col ms-7 gap-3 overflow-y-scroll md:h-[500px] h-screen">

                {AccountData?.map((data) =>
                    <DisscussionAccount 
                        key={data.key}
                        name={data.name}
                        comment={data.comment}
                        time={data.time}
                        section={data.section}
                        bgColor={data.bgColor}
                    />
                )}



            </div>
        </div>
    );
}