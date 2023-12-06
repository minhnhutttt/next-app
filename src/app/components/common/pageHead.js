import PropTypes from "prop-types";

export default function PageHead({ page, children }) {
  return (
    <div className="pt-[160px] md:pt-[14%]">
      <div className="relative mx-auto flex w-full max-w-[1440px] justify-end pl-10 pt-[2.5%] md:pl-[14%]">
        <div className="w-full border-b border-white ">
          <div className="top-0 text-[16px] font-bold tracking-widest text-white max-md:mb-4 md:absolute md:text-[24px]">
            {children}
          </div>
          <h4 className="stroke-text text-right text-[250px] font-bold capitalize leading-[0.75] max-[1440px]:text-[17.361vw]">
            {page}
          </h4>
        </div>
      </div>
    </div>
  );
}

PageHead.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
