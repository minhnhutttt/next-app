"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function GenerationCheck({ problem, handle }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex items-start gap-3 py-[18px]">
      <span className="mt-1.5 aspect-square flex-[0_0_12px] rounded-full bg-black md:flex-[0_0_17px]"></span>
      <div className="flex-1">
        <p className="text-[13px] md:text-[16px]">{problem}</p>
        <figure className="w-full max-md:flex max-md:justify-center md:pl-[160px]">
          <img className="max-md:w-4" src="/images/arrow.png" alt="" />
        </figure>
        <p className="inline bg-[linear-gradient(to_top,_#FFE500_40%,_transparent_40%)] font-inter text-[13px] font-bold md:text-[16px]">
          {handle}
        </p>
      </div>
    </div>
  );
}
GenerationCheck.propTypes = {
  problem: PropTypes.node.isRequired,
  handle: PropTypes.node.isRequired,
};
