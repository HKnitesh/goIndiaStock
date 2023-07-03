import MarketData from "./MarketData";
import MarketStory from "./MarketStory";

export default function MarketStories({ className }) {
    return (
        <div className={`flex flex-col ms-11 mt-2 ${className}`}>
            <h1 className="text-red-500  text-lg pt-1 font-semibold mb-8 hidden md:block">Market Stories</h1>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 mt-4  overflow-y-scroll md:h-[500px] h-screen">

                {MarketData?.map((data) =>
                    <MarketStory
                        key={data.key}
                        details={data.details}
                        urls={data.urls}
                    />
                )}

            </div>
        </div>
    );
}