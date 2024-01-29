"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function StepItem({ step, children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="relative">
      <figure className="-mb-2 flex justify-center md:-mb-4">
        <img className="max-md:h-8" src={step} alt="" />
      </figure>
      <div className="flex h-[100px] items-center justify-center bg-[#FFCA00] p-5 text-center text-[22px] font-black lg:h-[172px] xl:text-[32px]">
        {children}
      </div>
    </div>
  );
}

StepItem.propTypes = {
  step: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
