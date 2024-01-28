"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function TextBlock({ title, children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="opacity-0">
      {title && (
        <p className="font-worksans text-[18px] font-bold md:text-[20px]">
          {title}
        </p>
      )}
      <div className="mt-3 font-worksans text-[14px] md:mt-[18px] md:text-[16px]">
        {children}
      </div>
    </div>
  );
}

TextBlock.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
};
