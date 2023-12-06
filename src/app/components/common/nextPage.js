import Link from "next/link";
import PropTypes from "prop-types";

export default function NextPage({ image, name, link }) {
  return (
    <Link
      href={link}
      className="relative z-10 flex items-center justify-center"
    >
      <div className="absolute inset-0 flex h-full items-center justify-center px-10">
        <figure className="mr-[-80px]">
          <img className="max-md:max-w-[120px]" src={image} alt="" />
        </figure>
        <div className="inline-flex h-[40px]  items-center gap-4 bg-white px-3 text-[18px] font-bold text-black md:h-[100px] md:gap-[30px] md:px-8 md:text-[32px] lg:h-[122px] lg:px-20">
          {name}
          <svg
            className="max-md:max-w-[50px]"
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="18"
            viewBox="0 0 127 18"
            fill="none"
          >
            <line y1="17" x2="127" y2="17" stroke="black" />
            <line
              x1="126.646"
              y1="16.8536"
              x2="110.646"
              y2="0.853554"
              stroke="black"
            />
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
