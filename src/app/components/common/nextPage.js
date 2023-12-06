import Link from "next/link";
import PropTypes from "prop-types";

export default function NextPage({image, name, link}) {
    return (
        <Link href={link} className="relative z-10 flex items-center justify-center">
            <div className="absolute h-full inset-0 flex items-center justify-center px-10">
                <figure className="mr-[-80px]">
                    <img className="max-md:max-w-[120px]" src={image} alt="" />
                </figure>
                <div className="bg-white h-[40px]  md:h-[100px] lg:h-[122px] inline-flex items-center text-[18px] md:text-[32px] font-bold text-black lg:px-20 px-3 gap-4 md:px-8 md:gap-[30px]">{name}
                    <svg className="max-md:max-w-[50px]" xmlns="http://www.w3.org/2000/svg" width="127" height="18" viewBox="0 0 127 18" fill="none">
                        <line y1="17" x2="127" y2="17" stroke="black"/>
                        <line x1="126.646" y1="16.8536" x2="110.646" y2="0.853554" stroke="black"/>
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src="/images/next.png" alt="NEXT" />
            </div>
        </Link>
    );
  }
  NextPage.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};