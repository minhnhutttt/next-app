import PropTypes from "prop-types";

export default function HomeWorksTitle({children}) {
  return (
    <div className="bg-[url('/bg-title.png')] bg-no-repeat bg-center bg-[length:auto_100%] flex items-center justify-center h-[178px] text-[28px] font-black text-[#0055A3] tracking-[-0.1em]">
        {children}
    </div>
  );
}

HomeWorksTitle.propTypes = {
    children: PropTypes.node.isRequired,
};
