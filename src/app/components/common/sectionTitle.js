"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function SectionTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex flex-col items-center justify-center gap-3">
        <figure>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 30 48" fill="none">
            <line x1="15" y1="8.74228e-08" x2="15" y2="48" stroke="black" stroke-width="4"/>
            <line x1="28.4142" y1="32.3432" x2="14.2721" y2="46.4853" stroke="black" stroke-width="4"/>
            <line y1="-2" x2="20" y2="-2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 3 30.929)" stroke="black" strokeWidth="4"/>
        </svg>
        </figure>
        <h4 className="text-[32px] md:text-[48px] font-black text-center">
            {children}
        </h4>
    </div>
  );
}
SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
