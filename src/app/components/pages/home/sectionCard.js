"use client";
import PropTypes from "prop-types";
import CardText from "@/app/components/common/card/cardText";
import CardButton from "../../common/card/cardButton";
import { useState } from "react";

export default function SectionCard({
  anchor,
  type,
  image,
  text,
  button,
  children,
  isComming,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getColorByIndex = (index) => {
    switch (index) {
      case "ACCOUNT":
        return "#7A9FFF";
      case "CHAT":
        return "#AC7AFF";
      case "DOMAIN":
        return "#C5FA77";
      case "TAG":
        return "#FFA4A4";
      case "SCAN":
        return "#FBF18D";
      case "COUPON":
        return "#EFB0E5";
      default:
        return "";
    }
  };
  return (
    <div className="relative" id={anchor}>
      {isComming && (
        <div className="absolute inset-0 z-50 flex items-center justify-center ">
          <span className="absolute inset-0 bg-[#344054]/[0.7] backdrop-blur backdrop-filter"></span>
          <figure className="relative px-5">
            <img className="max-w-full" src="/images/comming-soon.png" alt="" />
          </figure>
        </div>
      )}
      <div
        className="relative flex min-h-[500px] items-center justify-center overflow-hidden border border-black [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] md:min-h-[644px]"
        style={{ backgroundColor: getColorByIndex(type) }}
      >
        <figure>
          <img className="w-full" src={image} alt={type} />
        </figure>
        <div className="absolute bottom-[12vw] w-full md:bottom-[4.167vw] min-[1440px]:bottom-[60px]">
          <CardText size="lg" type={type} text={text} />
          <div className="mt-[4vw] md:mt-[2.778vw] min-[1440px]:mt-10">
            <CardButton openModal={openModal}>{button}</CardButton>
          </div>
        </div>
        {isModalOpen && (
          <div
            className="absolute-0 absolute inset-0 z-40 bg-[#344054]/[0.7] backdrop-blur backdrop-filter"
            onClick={() => closeModal()}
          ></div>
        )}
        <div
          className={`pointer-events-none absolute inset-x-0 z-50 mx-auto flex w-full max-w-[320px] flex-col items-center justify-center rounded-[10px] bg-white opacity-0 duration-300 lg:max-w-[400px] ${
            isModalOpen ? "pointer-events-auto opacity-100" : ""
          }`}
        >
          <button
            className="absolute right-4 top-4 h-11 w-11"
            onClick={() => closeModal()}
          >
            <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 16.3345L16 28.3345M16 16.3345L28 28.3345"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex w-full flex-col items-center justify-center px-6 pb-6 pt-[50px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
SectionCard.propTypes = {
  anchor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isComming: PropTypes.bool,
};
