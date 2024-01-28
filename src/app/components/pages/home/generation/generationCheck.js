"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function GenerationCheck({ problem, handle }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div ref={animateRefs} className="flex items-start gap-3 py-[18px]">
        <span className="md:flex-[0_0_17px] flex-[0_0_12px] aspect-square bg-black rounded-full mt-1.5"></span>
        <div className="flex-1">
            <p className="md:text-[16px] text-[13px]">
                {problem}
            </p>
            <figure className="md:pl-[160px] max-md:flex max-md:justify-center w-full"><img className="max-md:w-4" src="/images/arrow.png" alt="" /></figure>
            <p className="inline text-[13px] md:text-[16px] font-inter font-bold bg-[linear-gradient(to_top,_#FFE500_40%,_transparent_40%)]">{handle}</p>
        </div>
    </div>
  );
}
GenerationCheck.propTypes = {
    problem: PropTypes.node.isRequired,
    handle: PropTypes.node.isRequired,
};
