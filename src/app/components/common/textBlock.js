"use client";
import PropTypes from "prop-types";

export default function TextBlock({ title, children }) {
  return (
    <div>
      {title && (
        <p className="text-[18px] font-bold tracking-wider text-white md:text-[20px]">
          {title}
        </p>
      )}
      <div className="mt-3 text-[14px] tracking-wider text-white md:mt-[18px] md:text-[16px]">
        {children}
      </div>
    </div>
  );
}

TextBlock.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
};
