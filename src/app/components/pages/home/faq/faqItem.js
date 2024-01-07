"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";
import { useRef } from "react";
import { gsap } from "gsap";

export default function FaqItem({ question, awnser }) {
  const animateRefs = useScrollAnimation("fadeUp");
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const isClosedRef = useRef(true);

  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: -180 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  return (
    <div
      ref={animateRefs}
      className="space-y-2 rounded-[20px] border border-[#22ABF3] bg-white p-4 md:px-8 md:pb-8 md:pt-10"
    >
      <button
        type="button"
        className="flex items-center justify-between w-full duration-200 hover:opacity-75"
        onClick={handleExpanderClick}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <p className="font-roboto text-[18px] font-bold uppercase tracking-widest text-[#22ABF3] md:text-[32px]">
            q
          </p>
          <p className="text-left text-[16px] font-bold text-black md:text-[22px]">
            {question}
          </p>
        </div>
        <div
          ref={arrowRef}
          className="relative flex items-center justify-center w-8 h-8 ml-2 duration-150 md:h-12 md:w-12"
        >
          <svg
            className="max-md:w-8"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="23.5"
              transform="rotate(-180 24 24)"
              stroke="#22ABF3"
            />
            <path
              d="M28.2667 21.8667L24 26.1334L19.7333 21.8667"
              stroke="#22ABF3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="pb-4 pl-8 text-[14px] leading-[1.6] text-black md:w-[85%] md:pb-7 md:pl-16 md:text-[16px]">
          {awnser}
        </p>
      </div>
    </div>
  );
}

FaqItem.propTypes = {
  question: PropTypes.node.isRequired,
  awnser: PropTypes.node.isRequired,
};
