"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PropTypes from "prop-types";

export default function SecurityItem({ title, imageSrc, children }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      ref={animateRefs}
      className="max-w-[380px] flex-1 rounded-[15px] bg-white p-5 [box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)] lg:p-[30px]"
    >
      <figure>
        <img src={imageSrc} alt="" />
      </figure>
      <p className="py-4 text-center text-[18px] font-bold md:py-5 md:text-[20px] lg:text-[24px]">
        {title}
      </p>
      <div className="text-[14px] lg:text-[16px]">{children}</div>
    </div>
  );
}
SecurityItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
