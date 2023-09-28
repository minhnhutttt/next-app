import Link from "next/link";
import PropTypes from "prop-types";

export default function Category({link, imgSrc, title, content, answer, sm = false  }) {
  return (
    <Link href={link} className={`bg-white border border-black ${sm ? 'max-w-[290px] pt-3 px-3' : 'max-w-[606px] p-4'}`}>
     <div className="">
        <img src={imgSrc} alt={title} />
     </div>
     <div className="">
        <p className={`font-semibold border-b border-black ${sm ? 'text-[19px] py-1.5' : 'text-[30px] py-4 '}`}>{title}</p>
        <div className={`${sm ? 'py-1' : 'py-5'}`}>
        <p className={`font-light line-clamp-3 ${sm ? 'text-[17px] leading-[1.1]' : 'text-[21px]'}`}>{content}</p>
        </div>
        <p className={`text-right font-semibold ${sm ? 'text-[15px]' : 'text-[25px]'}`}>{answer} Answers</p>
     </div>
    </Link>
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
