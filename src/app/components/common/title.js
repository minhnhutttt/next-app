import PropTypes from "prop-types";

export default function Title({ children }) {
  return (
    <div className="flex flex-col items-center justify-center text-center text-[18px] font-bold tracking-[4px] md:text-[40px] md:tracking-[8px]">
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
