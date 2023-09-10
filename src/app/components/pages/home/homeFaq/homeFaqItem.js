"use client";
import PropTypes from "prop-types";
import { useState } from "react";

export default function HomeFaqItem({ question, awnser }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-4 border-b border-[#313333] p-4 md:space-y-8 md:p-7">
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-2">
          <p className="text-[18px] font-bold uppercase tracking-widest md:text-[32px]">
            Q.
          </p>
          <p className="text-left text-[16px] font-bold leading-[1.6] max-md:mt-0.5 md:text-[24px] md:leading-[2.2] md:tracking-widest">
            {question}
          </p>
        </div>
        <div className="relative ml-2 flex h-5 w-5 items-center justify-center md:h-[27px] md:w-[27px]">
          <span className="h-0.5 w-5 bg-[#313333] md:h-[3px] md:w-[27px]"></span>
          <span
            className={`absolute bg-[#313333] duration-100 ${
              open
                ? "left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 md:h-[3px] md:w-[27px]"
                : "left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 md:h-[27px] md:w-[3px]"
            }`}
          ></span>
        </div>
      </button>
      {open && (
        <div className="flex gap-2">
          <p className="text-[18px] font-bold uppercase tracking-widest text-[#ca0000] md:text-[32px]">
            A.
          </p>
          <p className="text-[14px] leading-[1.7] tracking-widest md:text-[18px] md:mt-2.5">
            {awnser}
          </p>
        </div>
      )}
    </div>
  );
}

HomeFaqItem.propTypes = {
  question: PropTypes.node.isRequired,
  awnser: PropTypes.node.isRequired,
};
