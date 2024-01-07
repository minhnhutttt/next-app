"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function FormRadio({ label, options, checkedValue, onChange }) {
  const [selectedValue, setSelectedValue] = useState(checkedValue);

  useEffect(() => {
    setSelectedValue(checkedValue);
  }, [checkedValue]);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };
  return (
    <div>
      <div className="text-[16px] font-bold md:text-[20px]">{label}</div>
      <div className="flex flex-col pl-3 mt-3 md:mt-6 md:gap-5 md:pl-6">
        {options.map((option, index) => (
          <div className="inline-flex items-center" key={index}>
            <label
              className="relative flex items-center p-2 rounded-full cursor-pointer md:p-3"
              htmlFor={option.value}
            >
              <input
                name="type"
                type="radio"
                className="before:content[''] before:bg-blue-gray-500 peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-[#4D9FFF] text-[#4D9FFF] transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-[#4D9FFF] checked:before:bg-gray-900 hover:before:opacity-10 md:h-[30px] md:w-[30px]"
                id={option.value}
                value={option.value}
                checked={option.value === selectedValue}
                onChange={() => handleRadioChange(option.value)}
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-[#4D9FFF] opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 md:h-4 md:w-4"
                  viewBox="0 0 16 16"
                  fill="#4D9FFF"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label
              className="mt-px cursor-pointer select-none text-[16px] font-bold md:text-[24px]"
              htmlFor={option.value}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

FormRadio.propTypes = {
  label: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  checkedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
