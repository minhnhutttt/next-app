import PropTypes from "prop-types";
import classNames from "classnames";
export default function FormLabel({ label, text, isRequired }) {
  return (
    <div className="mb-1 md:mb-2">
      <p
        className={classNames(
          "text-[18px] font-medium text-[#333] md:text-[32px]",
          { "pl-3": !isRequired }
        )}
      >
        {isRequired && <span className="text-[#ee3f3f]">*</span>}
        {label}
      </p>
      <p className="pl-3 text-[14px] text-[#999999] md:text-[18px]">{text}</p>
    </div>
  );
}
FormLabel.propTypes = {
  label: PropTypes.node.isRequired,
  text: PropTypes.string,
  isRequired: PropTypes.bool,
};
