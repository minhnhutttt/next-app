import PropTypes from "prop-types";

export default function PageHead({page, children}) {
    return (
        <div className="pt-[160px] md:pt-[14%]">
            <div className="w-full max-w-[1440px] mx-auto md:pl-[14%] pl-10 flex justify-end pt-[2.5%] relative">
                <div className="w-full border-b border-white ">
                    <div className="md:text-[24px] text-[16px] text-white font-bold tracking-widest md:absolute top-0 max-md:mb-4">
                        {children}
                    </div>
                    <h4 className="text-right text-[250px] font-bold capitalize stroke-text leading-[0.75] max-[1440px]:text-[17.361vw]">
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