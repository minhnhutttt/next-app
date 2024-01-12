"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function SectionTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex justify-center">
      <div className="md:text-[32px] text-[24px] font-bold leading-[1.3] text-white relative bg-[repeating-linear-gradient(45deg,_transparent_0_3px,_#FFFFFF_3px_6px)] bg-no-repeat [background-size:100%_12px] bg-bottom pb-7">
        {children}
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
