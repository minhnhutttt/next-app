import PropTypes from "prop-types";

export default function FormRadio({ options, selectedOption, onChange }) {
  return (
    <div className="flex flex-col gap-6 md:gap-10 px-3 md:px-6">
      {options.map((option, index) => (
        <label key={index} className="flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={(e) => onChange(e.target.value)}
            class="peer hidden"
          />
          <div class="inline-flex md:h-8 md:w-8 w-6 h-6 cursor-pointer items-center justify-center rounded-full border-[3px] border-[#333333] bg-white  peer-checked:bg-[#333333] peer-checked:[&>span]:bg-white">
            <span className="md:h-3 md:w-3 w-2 h-2 rounded-full bg-[#333333]"></span>
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
