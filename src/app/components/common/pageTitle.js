"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function PageTitle({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="mt-[120px] flex h-[100px] items-center justify-center px-5 md:mt-[270px] md:h-[172px]">
      <p
        ref={animateRefs}
        className="font-zen text-[7vw] font-bold opacity-0 md:text-[60px]"
      >
        {children}
      </p>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
