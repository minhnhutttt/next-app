import Link from "next/link";
import PropTypes from "prop-types";

export default function NFTItem({ link, imgSrc, head, title, content }) {
  return (
    <Link
      href={"account/" + link}
      className="rounded-[10px] bg-white p-2 shadow-[4px_0px_15px_rgba(0,0,0,0.15)] md:p-3"
    >
      <div className="">
        <img src={imgSrc} alt="" />
      </div>
      <div className="p-2 md:p-3">
        <p className="mb-1 text-[14px] font-bold md:text-[16px]">{head}</p>
        <p className="mb-2 text-[16px] font-bold tracking-widest md:text-[18px]">
          {title}
        </p>
        <p className="line-clamp-2 text-[13px] leading-[2] md:text-[15px]">
          {content}
        </p>
      </div>
    </Link>
  );
}

NFTItem.propTypes = {
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};
