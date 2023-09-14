import PropTypes from "prop-types";

export default function HomeWorksTitle({ children }) {
  return (
    <div className="flex h-[120px] items-center justify-center bg-[url('/bg-title.png')] bg-[length:auto_100%] bg-center bg-no-repeat text-[22px] font-black tracking-[-0.1em] text-[#0055A3] md:h-[178px] md:text-[28px]">
      {children}
    </div>
  );
}

HomeWorksTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
