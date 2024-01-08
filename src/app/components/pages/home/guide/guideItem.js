"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
export default function GuideItem({ step, children, imageSrc }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="max-w-[300px] flex-1 md:w-1/3">
      <div
        ref={animateRefs}
        className="mx-auto flex aspect-square flex-col items-center justify-center rounded-full bg-[#D4F5FF] max-md:max-w-[200px] md:w-full"
      >
        <figure className="-mt-2 max-lg:w-[80px] max-md:w-[60px] md:-mt-4">
          <img src={imageSrc} alt={step} />
        </figure>
        <p className="mt-2 text-center text-[16px] font-bold md:mt-4 md:text-[24px]">
          {step}
        </p>
      </div>
      <div ref={animateRefs} className="mt-4 md:mt-5">
        <div className="rounded-[10px] bg-white p-4 text-[14px] md:text-[16px] lg:p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

GuideItem.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  step: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
