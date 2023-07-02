import PropTypes from "prop-types";
export default function Title({ children }) {
  return (
    <div className="text-center text-[18px] font-bold leading-[1.4] tracking-wider md:text-[40px] lg:text-[60px]">
      {children}
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
