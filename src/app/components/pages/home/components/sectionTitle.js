"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function SectionTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex items-center justify-center">
      <div className="relative">
        <p className="absolute inset-0 text-center text-[24px] font-bold tracking-widest text-white [-webkit-text-stroke:_8px_white] md:text-[48px]">
          {children}
        </p>
        <h3 className="relative text-center text-[24px] font-bold tracking-widest md:text-[48px]">
          {children}
        </h3>
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
