"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function GenerationContainer({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      ref={animateRefs}
      className="relative flex gap-7 bg-white px-4 py-4 max-lg:flex-col md:gap-[60px] md:px-6 md:py-10 lg:px-[58px]"
    >
      {children}
    </div>
  );
}

GenerationContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
