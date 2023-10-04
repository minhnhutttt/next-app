import PropTypes from "prop-types";

export default function PageTitle({ children }) {
  return (
    <div className="flex h-[120px] items-center justify-center text-[7vw] font-black uppercase tracking-[0.2em] text-white md:h-[180px] md:text-[54px] lg:text-[80px]">
      {children}
    </div>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
