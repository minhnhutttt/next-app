"use client";
import PropTypes from "prop-types";

export default function CardText({ size, type, text }) {
  const getColorByIndex = (index) => {
    switch (index) {
      case "ACCOUNT":
        return "#2157E3";
      case "CHAT":
        return "#8F01FE";
      case "DOMAIN":
        return "#98FE01";
      case "TAG":
        return "#E70012";
      case "SCAN":
        return "#F9FE01";
      case "COUPON":
        return "#FE01F4";
      default:
        return "";
    }
  };
  return (
    <>
      {size === "sm" && (
        <>
          <p
            className="text-stroke-sm text-center text-[3vw] md:text-[1.667vw] leading-none min-[1440px]:text-[24px]"
            style={{ color: getColorByIndex(type) }}
          >
            次世代
          </p>
          <div className="flex justify-center pt-1 max-md:pb-0.5">
            <p className="border-y border-black bg-white px-[3px] font-fredoka text-[2.4vw] md:text-[10px] font-bold leading-none tracking-widest lg:text-[13px]">
              {type}
            </p>
          </div>
          <p
            className="text-stroke-sm text-center text-[3vw] md:text-[1.389vw] leading-none min-[1440px]:text-[20px]"
            style={{ color: getColorByIndex(type) }}
          >
            {text}
          </p>
        </>
      )}
      {size === "md" && (
        <>
          <p
            className="text-stroke text-center text-[10vw] md:text-[4.722vw] leading-none min-[1440px]:text-[68px]"
            style={{ color: getColorByIndex(type) }}
          >
            次世代
          </p>
          <div className="flex justify-center pt-3 pb-1">
            <p className="border-x-[0.5px] border-y-2 border-black bg-white px-[12px] py-1.5 font-fredoka text-[4vw] md:text-[2.222vw] font-bold leading-none tracking-widest min-[1440px]:text-[32px]">
              {type}
            </p>
          </div>
          <p
            className="text-stroke text-center text-[10vw] md:text-[4.722vw] leading-none min-[1440px]:text-[68px]"
            style={{ color: getColorByIndex(type) }}
          >
            {text}
          </p>
        </>
      )}
      {size === "lg" && (
        <>
          <p className="text-stroke-lg text-center text-[12vw] md:text-[6.944vw] leading-none min-[1440px]:text-[100px]"
            style={{ color: getColorByIndex(type) }}>
                次世代
              </p>
              <div className="flex justify-center pt-6 pb-2">
                <p className="border-x-[0.5px] border-y-2 border-black bg-white px-[12px] py-1.5 font-fredoka text-[5vw] md:text-[3.333vw] font-bold leading-none tracking-widest min-[1440px]:text-[48px]">
                {type}
                </p>
              </div>
              <p className="text-stroke-lg text-center text-[12vw] md:text-[6.944vw] leading-none min-[1440px]:text-[100px]"
            style={{ color: getColorByIndex(type) }}>
                {text}
              </p>
        </>
      )}
    </>
  );
}
CardText.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
