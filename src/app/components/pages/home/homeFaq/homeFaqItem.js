"use client";
import PropTypes from "prop-types";
import { useState } from "react";

export default function HomeFaqItem({ id, question, awnser }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="md:space-y-4 space-y-2 border-b border-[#313333] px-3 md:px-5 py-5 md:pt-11 md:pb-10">
          <button
            type="button"
            className="flex w-full items-center justify-between"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-4 md:gap-8">
              <p className="text-[20px] font-bold uppercase tracking-widest md:text-[32px]">
                {id}
              </p>
              <p className="text-left text-[16px] font-bold md:text-[22px] tracking-tight">
                {question}
              </p>
            </div>
            <div className={`relative ml-2 flex h-8 w-8 items-center justify-center md:h-12 md:w-12 duration-150 ${open && 'rotate-180'}`}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" stroke="black"/>
                <path d="M28.2666 21.8666L23.9999 26.1332L19.7333 21.8666" stroke="#343A3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
          </button>
          {open && (
            <div className="flex pl-11 md:pl-20">
              <p className="text-[14px] leading-[1.6] md:text-[16px] md:w-[85%]">
                {awnser}
              </p>
            </div>
          )}
        </div>
      );
}

HomeFaqItem.propTypes = {
    id: PropTypes.string.isRequired,
    question: PropTypes.node.isRequired,
    awnser: PropTypes.node.isRequired,
  };
  