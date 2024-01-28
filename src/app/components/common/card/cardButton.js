"use client";
import PropTypes from "prop-types";
export default function CardButton({ openModal , children }) {
  return (
    <div className="h-[87px] flex justify-center px-5">
      <button
        type="button"
        onClick={openModal}
        className="group h-[80px] w-full max-w-[500px] border-b-[7px] border-black/60 box-content rounded-[10px] duration-300 hover:border-b hover:mt-[6px] relative"
      >
        <span className="flex w-full h-full items-center justify-center rounded-[10px] border-4 border-white text-white bg-black font-noto text-[18px] lg:text-[24px] font-bold tracking-[0.5em] align-middle">
          {children}
        </span>
      </button>
    </div>
  );
}
CardButton.propTypes = {
  children: PropTypes.node.isRequired,
  openModal: PropTypes.func.isRequired,
};
