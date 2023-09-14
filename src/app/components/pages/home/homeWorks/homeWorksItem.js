import PropTypes from "prop-types";

export default function HomeWorksItem({ imgSrc, children }) {
  return (
    <div className="flex flex-col rounded-[20px] border border-[#0055A3] bg-white pb-5 shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] max-md:py-6 md:h-[530px]">
      <div className="flex items-start justify-center max-md:mb-5 md:flex-1 md:items-center">
        <img className="max-md:w-[60%]" src={imgSrc} alt="" />
      </div>
      <div className="flex justify-center px-4 md:min-h-[112px] ">
        <p className="text-[12px] font-medium leading-[1.4] tracking-tight md:text-[16px]">
          {children}
        </p>
      </div>
    </div>
  );
}

HomeWorksItem.propTypes = {
  imgSrc: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
