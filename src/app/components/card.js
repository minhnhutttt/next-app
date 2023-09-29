import Link from "next/link";
import PropTypes from "prop-types";

export default function Card({ link, imgSrc, tags, title, content, answer }) {
  return (
    <Link
      href={link}
      className="w-full max-w-[285px] border border-black bg-white"
    >
      <div className="border-b border-black">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="px-[11px] pt-[11px]">
        <div className="mb-1.5 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <div className="flex h-[20px] min-w-[65px] items-center justify-center bg-[#D9D9D9] px-1 pt-1 text-[11px]">
                {tag}
              </div>
            );
          })}
        </div>
        <p className="text-[23px] font-light">{title}</p>
        <div className="pb-3 pt-1">
          <p className="line-clamp-2 text-[17px] font-light">{content}</p>
        </div>
        <p className="border-t border-black py-3 text-left text-[17px] font-light">
          {answer} Answers
        </p>
      </div>
    </Link>
  );
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  answer: PropTypes.string.isRequired,
};
