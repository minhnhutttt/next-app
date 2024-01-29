import PropTypes from "prop-types";
export default function ButtonCheck({ size }) {
  return (
    <a
      href="https://scan.diver.io/"
      target="_blank"
      className={`flex items-center justify-center rounded-[60px] border-2 border-black bg-[#FFCA00] font-bold duration-150 [box-shadow:0px_5px_0px_0px_#000] hover:opacity-75 ${
        size === "sm"
          ? "h-[60px] w-[240px] text-[18px]"
          : "h-[60px] w-[240px] text-[18px] md:h-[80px] md:w-[300px] md:text-[24px]"
      }`}
    >
      チェックする
    </a>
  );
}
ButtonCheck.propTypes = {
  size: PropTypes.string,
};
