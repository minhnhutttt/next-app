"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function PageTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="flex items-center justify-center px-5 mt-20 mb-4 md:mt-[140px]">
      <p
        ref={animateRefs}
        className="font-zenkaku text-[6vw] font-bold opacity-0 md:text-[50px] text-white"
      >
        {children}
      </p>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
