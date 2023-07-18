import PropTypes from "prop-types";

export default function FormBlock({ children }) {
  return (
    <div className="border-b border-dashed border-[#333333] px-2 py-5 md:px-[54px] md:pb-10 md:pt-[54px]">
      {children}
    </div>
  );
}
FormBlock.propTypes = {
  children: PropTypes.node.isRequired,
};
