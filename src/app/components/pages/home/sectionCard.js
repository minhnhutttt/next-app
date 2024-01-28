"use client";
import PropTypes from "prop-types";
import CardText from "@/app/components/common/card/cardText";
import CardButton from "../../common/card/cardButton";
import { useState } from "react";
import Link from "next/link";

export default function SectionCard({ type, image, text, button, children }) {
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
    <div>
      <div
      className="relative flex items-center justify-center overflow-hidden border border-black [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] min-h-[644px]"
      style={{ backgroundColor: getColorByIndex(type) }}>
        <figure>
          <img className="w-full" src={image} alt={type} />
        </figure>
        <div className="absolute w-full md:bottom-[4.167vw] bottom-[10vw] min-[1440px]:bottom-[60px]">
            <CardText size="lg" type={type} text={text} />
            <div className="mt-[2.778vw] min-[1440px]:mt-10">
                <CardButton openModal={openModal}>{button}</CardButton>
            </div>
        </div>
        {isModalOpen && (
        <div
          className="absolute inset-0 z-40 absolute-0 bg-[#344054]/[0.7] blur"
          onClick={() => closeModal()}
        ></div>
      )}
        <div className={`z-50 w-full lg:max-w-[400px] max-w-[320px] mx-auto inset-x-0 bg-white absolute opacity-0 duration-300 rounded-[10px] flex items-center justify-center flex-col pointer-events-none ${isModalOpen ? "pointer-events-auto opacity-100" : ""}`}>
            <button className="absolute w-11 h-11 top-4 right-4" onClick={() => closeModal()}>
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 16.3345L16 28.3345M16 16.3345L28 28.3345" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div className="w-full pt-[50px] flex flex-col items-center justify-center px-6 pb-6">
                {children}
            </div>
        </div>
        </div>
    </div>
  );
}
SectionCard.propTypes = {
  type: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
