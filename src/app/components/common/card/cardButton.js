"use client";
import PropTypes from "prop-types";
export default function CardButton({ openModal, children }) {
  return (
    <div className="flex h-[67px] justify-center px-5 md:h-[87px]">
      <button
        type="button"
        onClick={openModal}
        className="group relative box-content h-[60px] w-full max-w-[500px] rounded-[10px] border-b-[7px] border-black/60 duration-300 hover:mt-[6px] hover:border-b md:h-[80px]"
      >
        <span className="flex h-full w-full items-center justify-center rounded-[10px] border-4 border-white bg-black align-middle font-noto text-[18px] font-bold tracking-[0.5em] text-white lg:text-[24px]">
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
