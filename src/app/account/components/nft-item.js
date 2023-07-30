import Link from "next/link";
import PropTypes from "prop-types";

export default function NFTItem({ link, imgSrc, head, title }) {
  return (
    <Link
      href={"account/" + link}
      className="rounded-t-[10px] overflow-hidden bg-white shadow-[4px_0px_15px_rgba(0,0,0,0.15)]"
    >
      <div className="relative">
        <img src={imgSrc} alt="" />
        <div className="absolute w-full p-3 h-10 md:h-[53px] bottom-0 left-0 bg-black/70 flex items-center justify-center">
        <img className="max-md:w-[14px]" src="/ic-image.png" alt="" />
          <span className="text-sm md:text-xl text-white ml-2.5">IMAGE</span>
        </div>
      </div>
      <div className="flex items-center md:pl-6 pl-4 md:pr-5 pr-3">
        <div className="py-2 md:py-3.5 flex-1">
          <p className="mb-1 text-[14px] font-bold md:text-[16px]">{head}</p>
          <p className="mb-2 text-[16px] font-bold tracking-widest md:text-[18px]">
            {title}
          </p>
        </div>
        <div className="ml-2">
          <img className="max-md:w-1" src="/ic-dots.png" alt="" />
        </div>
      </div>
    </Link>
  );
}

NFTItem.propTypes = {
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};
