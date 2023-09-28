import Link from "next/link";
import PropTypes from "prop-types";

export default function Card({link, imgSrc, tags, title, content, answer  }) {
  return (
    <Link href={link} className="bg-white border border-black max-w-[285px] w-full">
     <div className="border-b border-black">
        <img src={imgSrc} alt={title} />
     </div>
     <div className="pt-[11px] px-[11px]">
        <div className="flex flex-wrap gap-2 mb-1.5">
            {
                tags.map((tag) => {
                    return <div className="h-[20px] min-w-[65px] px-1 bg-[#D9D9D9] text-[11px] flex items-center justify-center pt-1">{tag}</div>
                })
            }
        </div>
        <p className="font-light text-[23px]">{title}</p>
        <div className="pt-1 pb-3">
            <p className="font-light line-clamp-2 text-[17px]">{content}</p>
        </div>
        <p className="text-left font-light text-[17px] py-3 border-t border-black">{answer} Answers</p>
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
