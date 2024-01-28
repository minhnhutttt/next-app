"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function PageTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="flex h-[100px] items-center justify-center px-5 md:h-[172px] md:mt-[270px] mt-[120px]">
      <p
        ref={animateRefs}
        className="text-[7vw] font-bold opacity-0 md:text-[60px] font-zen"
      >
        {children}
      </p>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
