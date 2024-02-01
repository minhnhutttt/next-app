"use client";
import PropTypes from "prop-types";
import CardText from "@/app/components/common/card/cardText";
import Link from "next/link";

export default function FVCard({ anchor, type, image, text }) {
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
        className="relative mx-auto flex w-[70vw] items-center justify-center overflow-hidden rounded-[10px] border border-black [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)] md:w-[33.472vw] min-[1440px]:w-[482px]"
        style={{ backgroundColor: getColorByIndex(type) }}
      >
        <Link href={anchor} scroll={false} className="absolute inset-0 z-20"></Link>
        <figure>
          <img className="w-full" src={image} alt={type} />
        </figure>
        <div className="absolute bottom-[10vw] md:bottom-[5.278vw] min-[1440px]:bottom-[76px]">
          <CardText size="md" type={type} text={text} />
        </div>
      </div>
    </div>
  );
}
FVCard.propTypes = {
  anchor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
