import Link from "next/link";
import PropTypes from "prop-types";

export default function NFTItem({ imgSrc, head, title, content }) {
  return (
    <div className="rounded-[10px] bg-white p-2 md:p-3 shadow-[4px_0px_15px_rgba(0,0,0,0.15)]">
      <div className="">
        <img src={imgSrc} alt="" />
      </div>
      <div className="p-2 md:p-3">
        <p className="mb-1 text-[14px] md:text-[16px] font-bold">{head}</p>
        <p className="mb-2 text-[16px] md:text-[18px] font-bold tracking-widest">{title}</p>
        <p className="line-clamp-2 text-[13px] md:text-[15px] leading-[2]">{content}</p>
      </div>
    </div>
  );
}

NFTItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};
