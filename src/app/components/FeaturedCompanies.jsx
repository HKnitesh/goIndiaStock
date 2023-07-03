
import CompanyImage from './CompanyImage';
import companys from '../companyDetail';
import Marquee from "react-fast-marquee";

export default function FeaturedCompanies() {
    return (
        <div className="flex flex-col items-start justify-center ">
            <h1 className="text-red-500  text-lg py-1 px-4 font-semibold">FEATURED COMPANIES</h1>
            <div className="flex flex-row bg-sky-100 w-full px-4 md:h-[65px] justify-center items-center py-2">
                <Marquee autoFill={true} pauseOnHover={true} direction="right" speed={25}>
                    {companys?.map((company) =>
                        <CompanyImage
                            key={company.key}
                            name={company.name}
                            src={company.src}
                            href={company.href}

                        />
                    )}
                </Marquee>
            </div>
        </div>
    );
}