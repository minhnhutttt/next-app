"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function SectionTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex justify-center">
      <h3 className="relative md:text-[32px] [font-size:_min(3.8vw,18px)] px-2.5 tracking-wider leading-[1.3] mb-2 pb-7 font-bold text-white before:absolute before:-left-[5px] md:before:-left-[10px] before:bottom-0 before:w-full before:h-[12px] before:-skew-x-[50deg] md:before:bg-[repeating-linear-gradient(90deg,_transparent_0_5px,_#fff_8px_16px)] before:bg-[repeating-linear-gradient(90deg,_transparent_0_3px,_#fff_8px_12px)] before:content-['']">
        {children}
      </h3>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
