import PropTypes from "prop-types";

const sizeClassMap = {
  lg: "md:w-[79px] w-[50px] md:text-[16px] text-[11px]",
  md: "md:w-[67px] w-[42px] md:text-[13px] text-[8px]",
  sm: "md:w-[50px] w-[30px] md:text-[16px] text-[10px]",
};

export default function FVItem({ size, children }) {
  const sizeClass = sizeClassMap[size] || "";

  return (
    <div className={`font-dela border border-[#111] rounded-full flex items-center justify-center tracking-tighter aspect-[1/1] ${sizeClass}`}>
      {children}
    </div>
  );
}

FVItem.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  children: PropTypes.node.isRequired,
};