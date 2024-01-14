"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function SectionTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex justify-center">
      <h3 className="relative mb-2 px-2.5 pb-7 font-bold leading-[1.3] tracking-wider text-white [font-size:_min(3.8vw,18px)] before:absolute before:-left-[5px] before:bottom-0 before:h-[12px] before:w-full before:-skew-x-[50deg] before:bg-[repeating-linear-gradient(90deg,_transparent_0_3px,_#fff_8px_12px)] before:content-[''] md:text-[32px] md:before:-left-[10px] md:before:bg-[repeating-linear-gradient(90deg,_transparent_0_5px,_#fff_8px_16px)]">
        {children}
      </h3>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
