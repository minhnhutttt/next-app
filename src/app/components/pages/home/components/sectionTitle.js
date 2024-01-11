"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function SectionTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex justify-center items-center">
      <div className="relative">
        <p className="absolute inset-0 md:text-[48px] text-[24px] font-bold text-center tracking-widest text-white [-webkit-text-stroke:_8px_white]">{children}</p>
        <h3 className="relative md:text-[48px] text-[24px] font-bold text-center tracking-widest">{children}</h3>
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
