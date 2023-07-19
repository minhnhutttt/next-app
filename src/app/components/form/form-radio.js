import PropTypes from "prop-types";

export default function FormRadio({ options, selectedOption, onChange }) {
  return (
    <div className="flex flex-col gap-6 px-3 md:gap-10 md:px-6">
      {options.map((option, index) => (
        <label key={index} className="flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="peer hidden"
          />
          <div className="inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-[3px] border-[#333333] bg-white peer-checked:bg-[#333333] md:h-8  md:w-8 peer-checked:[&>span]:bg-white">
            <span className="h-2 w-2 rounded-full bg-[#333333] md:h-3 md:w-3"></span>
          </div>
          <span className="ml-5 text-[16px] md:text-[32px]">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
FormRadio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
