import PropTypes from "prop-types";
export default function PageTitle({ children }) {
  return (
    <div className="flex h-[100px] items-center justify-center bg-white px-5 md:h-[180px]">
      <p className="text-[7vw] font-black uppercase tracking-wider md:text-[80px]">
        {children}
      </p>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
