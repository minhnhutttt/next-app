"use client";
import PropTypes from "prop-types";
import CardText from "@/app/components/common/card/cardText";

export default function FVCardNav({ type, text }) {
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
    <div className="px-[3px] pt-3">
        <div className="relative flex w-[20vw] md:w-[8.333vw] aspect-[20/19] items-center justify-center rounded-[20px] border-[3px] border-black  min-[1440px]:h-[114px] min-[1440px]:w-[120px]" style={{ backgroundColor: getColorByIndex(type) }}>
        <div className="triangle absolute left-0 right-0 top-[-3px] ">
            <div className="mx-auto md:h-3 h-2 md:w-3 w-2 border-l-2 border-t-2 border-black bg-[#7A9FFF] [transform:translate(0,-50%)_scale(1,1.5)_rotate(45deg)]" style={{ backgroundColor: getColorByIndex(type) }}></div>
        </div>
        <div>
            <CardText size="sm" type={type} text={text} />
        </div>
        </div>
    </div>
  );
}
FVCardNav.propTypes = {
  type: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
