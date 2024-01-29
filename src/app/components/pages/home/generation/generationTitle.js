"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function GenerationTitle({ number, children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      ref={animateRefs}
      className="flex items-center gap-5 border-b-2 border-black pb-2.5 font-inter font-bold"
    >
      <div className="flex aspect-square w-16 items-center justify-center bg-[#FFE500] text-[20px] md:w-20 md:text-[36px]">
        {number}
      </div>
      <div className="flex-1 text-[18px] md:text-[22px] lg:text-[26px]">
        {children}
      </div>
    </div>
  );
}
GenerationTitle.propTypes = {
  number: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
