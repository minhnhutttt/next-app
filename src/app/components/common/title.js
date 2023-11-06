import PropTypes from "prop-types";

export default function Title({ children }) {
  return (
    <div className="flex text-[18px] md:text-[40px] font-bold justify-center flex-col items-center md:tracking-[8px] tracking-[4px] text-center">
        <figure className="max-md:max-w-[40px]">
            <img src="./images/icon-title.png" alt="" />
        </figure>
      <h3>{children}</h3>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
