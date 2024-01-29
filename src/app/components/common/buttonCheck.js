import PropTypes from "prop-types";
export default function ButtonCheck({size}) {
    return (
        <a href="https://scan.diver.io/" target="_blank" className={`font-bold rounded-[60px] bg-[#FFCA00] border-2 border-black flex items-center justify-center [box-shadow:0px_5px_0px_0px_#000] duration-150 hover:opacity-75 ${size === "sm" ? "w-[240px] h-[60px] text-[18px]" : "md:w-[300px] w-[240px] md:h-[80px] h-[60px] text-[18px] md:text-[24px]"}`}>
        チェックする
        </a>
    );
  }
  ButtonCheck.propTypes = {
    size: PropTypes.string,
  };
  