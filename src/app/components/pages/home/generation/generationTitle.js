"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function GenerationTitle({ number, children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex items-center gap-5 font-bold border-b-2 border-black font-inter pb-2.5">
        <div className="flex items-center justify-center md:w-20 w-16 aspect-square bg-[#FFE500] md:text-[36px] text-[20px]">{number}</div>
        <div className="lg:text-[26px] md:text-[22px] text-[18px] flex-1">{children}</div>
    </div>
  );
}
GenerationTitle.propTypes = {
    number: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
