import React from "react";
import PropTypes from "prop-types";
export default function FormSelect({ options, selectedOption, onChange }) {
  return (
    <div className="relative px-3">
      <div className="relative">
        <span className="pointer-events-none absolute right-4 top-1/2 z-10 block -translate-y-1/2">
          <img className="max-md:w-3" src="/ic-arrow-down.png" alt="" />
        </span>
        <select
          id="selectOption"
          value={selectedOption}
          onChange={onChange}
          className="h-11  w-full rounded-[5px] border border-[#999999] bg-[#f5f8fa] px-4 text-base !outline-none focus-visible:border-2 focus-visible:border-[#366bb3] md:h-[60px] md:rounded-[10px] md:text-2xl"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

FormSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
