import PropTypes from "prop-types";

export default function StoresItem({ imgSrc, children }) {
  return (
    <div>
        <div className="flex">
            <img src={imgSrc} alt="" />
        </div>
        <p className="text-[13px] md:text-[24px] font-medium mt-[6%] text-center">
            {children}
        </p>
    </div>
  );
}

StoresItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
