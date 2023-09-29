import Link from "next/link";
import PropTypes from "prop-types";

export default function Category({
  link,
  imgSrc,
  title,
  content,
  answer,
  sm = false,
}) {
  return (
    <div className="px-2 md:px-3">
    <Link
      href={link}
      className={`block border border-black w-full bg-white ${
        sm ? "max-w-[290px] px-2 md:px-3 pt-2 md:pt-3" : "max-w-[606px] p-3 md:p-4"
      }`}
    >
      <div className="">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="">
        <p
          className={`border-b border-black font-semibold ${
            sm ? "py-1 md:py-1.5 text-[16] md:text-[19px]" : "py-3 md:py-4 text-[24px] md:text-[30px] "
          }`}
        >
          {title}
        </p>
        <div className={`${sm ? "py-1" : "py-3 md:py-5"}`}>
          <p
            className={`line-clamp-3 font-light ${
              sm ? "text-[15px] md:text-[17px] leading-[1.1]" : "text-[18px] md:text-[21px]"
            }`}
          >
            {content}
          </p>
        </div>
        <p
          className={`text-right font-semibold ${
            sm ? "text-[13px] md:text-[15px]" : "text-[20px] md:text-[25px]"
          }`}
        >
          {answer} Answers
        </p>
      </div>
    </Link>
    </div>
  );
}

Category.propTypes = {
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  answer: PropTypes.string.isRequired,
  sm: PropTypes.bool,
};
