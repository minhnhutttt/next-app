"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function PageTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="flex h-[100px] items-center justify-center px-5 md:h-[172px]">
      <p ref={animateRefs} className="opacity-0 text-[7vw] font-bold font-zenkaku md:text-[60px]">
        {children}
      </p>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
