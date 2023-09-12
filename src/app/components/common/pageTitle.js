import PropTypes from "prop-types";

export default function PageTitle({children}) {
    return (
        <div className="h-[120px] md:h-[180px] flex items-center justify-center text-[7vw] md:text-[54px] lg:text-[80px] font-black uppercase tracking-[0.2em]">
            {children}
        </div>
    );
  }

  PageTitle.propTypes = {
    children: PropTypes.node.isRequired,
  };