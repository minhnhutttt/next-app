"use client";
import PropTypes from "prop-types";

export default function TextBlock({title, children}) {
    return (
        <div>
          {title && <p className="font-bold text-[18px] md:text-[20px] tracking-wider">{title}</p>}
          <div className="text-[14px] md:text-[16px] tracking-wider mt-3 md:mt-[18px]">{children}</div>
        </div>
    );
  }

  TextBlock.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node.isRequired,
  };