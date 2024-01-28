import PropTypes from "prop-types";
export default function ButtonCheck({size}) {
    return (
        <a href="https://scan.diver.io/" target="_blank" className={`text-[18px] font-bold rounded-[60px] bg-[#FFCA00] border-2 border-black flex items-center justify-center [box-shadow:0px_5px_0px_0px_#000] ${size === "sm" ? "w-[240px] h-[60px]" : "w-[300px] h-[80px]"}`}>
        チェックする
        </a>
    );
  }
  ButtonCheck.propTypes = {
    size: PropTypes.string,
  };
  