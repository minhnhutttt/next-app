"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function QAItem({ question, answer, imageSrc }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="group">
      <div className="flex items-center gap-2 px-2 group-[:nth-of-type(even)]:flex-row-reverse md:gap-4 md:px-5 lg:px-[34px]">
        <figure className="max-md:w-[60px]">
          <img src={imageSrc} alt={question} />
        </figure>
        <div className="flex flex-1 group-[:nth-of-type(even)]:flex-row-reverse">
          <svg
            className="mt-3 group-[:nth-of-type(even)]:rotate-180 md:mt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
          >
            <path
              d="M0.672147 9.49482C-0.224048 8.69924 -0.224048 7.30076 0.672146 6.50518L8 -4.4509e-07L8 16L0.672147 9.49482Z"
              fill="#22ABF3"
            />
          </svg>
          <div className="flex min-h-[50px] flex-1 items-center rounded-xl bg-[#22ABF3] p-4 text-[13px] font-bold text-white md:min-h-[74px] md:px-8 md:py-6 md:text-[18px]">
            {question}
          </div>
        </div>
      </div>
      <div className="mt-2 flex min-h-[80px] items-center justify-center rounded-[10px] border border-[#00B5EE]/[0.8] bg-white px-4 md:mt-4 md:min-h-[112px]">
        <p className="w-full max-w-[510px] text-[13px] font-bold md:text-[18px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

QAItem.propTypes = {
  question: PropTypes.node.isRequired,
  answer: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
