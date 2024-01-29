"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function StepItem({ step, children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="relative">
        <figure className="flex justify-center -mb-2 md:-mb-4">
            <img className="max-md:h-8" src={step} alt="" />
        </figure>
        <div className="bg-[#FFCA00] lg:h-[172px] h-[100px] flex items-center justify-center font-black xl:text-[32px] text-[22px] p-5 text-center">
            {children}
        </div>
    </div>
  );
}

StepItem.propTypes = {
    step: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};