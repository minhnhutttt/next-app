"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function GenerationContainer({ children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="relative bg-white py-4 md:py-10 px-4 md:px-6 lg:px-[58px] flex md:gap-[60px] gap-7 max-lg:flex-col-reverse">
        {children}
    </div>
  );
}

GenerationContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
