import PropTypes from "prop-types";

export default function FormButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="mx-auto flex h-16 w-full max-w-[300px] items-center justify-center rounded-[5px] bg-[#366bb3] text-base font-medium text-white md:h-20 md:max-w-[400px] md:text-2xl"
    >
      {children}
    </button>
  );
}
FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
