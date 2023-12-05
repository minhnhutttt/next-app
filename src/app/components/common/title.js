import PropTypes from "prop-types";

export default function Title({ head, children }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="md:text-[20px] text-[16px] text-center font-['Oswald'] tracking-[0.35em]">{head}</p>
      <h5 className="md:text-[36px] text-[24px] font-bold text-center">{children}</h5>
    </div>
  );
}

Title.propTypes = {
    head: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};