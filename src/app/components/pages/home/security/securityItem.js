"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function SecurityItem({ title, imageSrc, children }) {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div ref={animateRefs} className="flex-1 max-w-[380px] bg-white rounded-[15px] p-5 lg:p-[30px] [box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)]">
            <figure>
                <img src={imageSrc} alt="" />
            </figure>
            <p className="text-center md:text-[20px] lg:text-[24px] text-[18px] font-bold md:py-5 py-4">{title}</p>
            <div className="lg:text-[16px] text-[14px]">
                {children}
            </div>
        </div>
    );
}
SecurityItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };
  