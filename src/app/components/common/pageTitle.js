import PropTypes from "prop-types";
export default function PageTitle({ children }) {
  return (
    <div className="flex h-[100px] bg-white items-center justify-center px-5 md:h-[180px]">
        <p className="text-[7vw] font-black tracking-wider md:text-[80px] uppercase">
          {children}
        </p>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
