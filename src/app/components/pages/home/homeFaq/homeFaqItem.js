"use client";
import PropTypes from "prop-types";
import { useState } from "react";

export default function HomeFaqItem({question, awnser}) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-[#313333] p-4 md:p-7 space-y-4 md:space-y-8">
            <button type="button" className="w-full flex justify-between items-center" onClick={() => setOpen(!open)}>
                <div className="flex gap-2">
                    <p className="text-[18px] md:text-[32px] font-bold tracking-widest uppercase">Q.</p>
                    <p className="text-[16px] md:text-[24px] text-left font-bold md:tracking-widest leading-[1.6] max-md:mt-0.5 md:leading-[2.2]">{question}</p>
                </div>
                <div className="w-5 h-5 md:w-[27px] md:h-[27px] flex items-center justify-center relative ml-2">
                    <span className="w-5 md:w-[27px] h-0.5 md:h-[3px] bg-[#313333]"></span>
                    <span className={`absolute bg-[#313333] duration-100 ${open ? 'w-5 md:w-[27px] h-0.5 md:h-[3px] left-0 top-1/2 -translate-y-1/2' : 'md:h-[27px] h-5 w-0.5 md:w-[3px] top-0 left-1/2 -translate-x-1/2'}`}></span>
                </div>
            </button>
            {open &&
                <div className="flex gap-2">
                    <p className="text-[18px] md:text-[32px] font-bold tracking-widest uppercase text-[#ca0000]">A.</p>
                    <p className="text-[14px] md:text-[18px] tracking-widest leading-[1.7]">{awnser}</p>
                </div>
            }
        </div>
    );
}

HomeFaqItem.propTypes = {
    question: PropTypes.node.isRequired,
    awnser: PropTypes.node.isRequired,
  };
  