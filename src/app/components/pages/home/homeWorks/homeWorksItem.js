import PropTypes from "prop-types";

export default function HomeWorksItem({ imgSrc, children }) {
  return (
    <div className="rounded-[20px] md:h-[530px] max-md:py-6 border border-[#0055A3] bg-white shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] pb-5 flex flex-col">
        <div className="flex justify-center items-start md:items-center md:flex-1 max-md:mb-5">
            <img className="max-md:w-[60%]" src={imgSrc} alt="" />
        </div>
        <div className="px-4 flex justify-center md:min-h-[112px] ">
            <p className="text-[12px] md:text-[16px] font-medium leading-[1.4] tracking-tight">{children}</p>
        </div>
    </div>
  );
}

HomeWorksItem.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};
