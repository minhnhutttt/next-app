import PropTypes from "prop-types";

export default function Section({no, image, title, children}) {
    return (
        <div className="w-full lg:max-w-[1440px] max-w-[720px] mx-auto flex lg:items-end max-lg:flex-col-reverse group lg:even:flex-row-reverse max-md:px-6 max-lg:px-10">
            <div className="lg:w-1/2">
                <img className="relative max-lg:top-[-40px] lg:group-odd:right-[-77px] lg:group-even:left-[-77px] max-w-full" src={image} alt="" />
            </div>
            <div className="relative lg:w-1/2 lg:pb-[12.5%]">
                <p className="md:text-[20px] text-[16px] lg:group-even:flex-row-reverse text-white after:block after:w-full after:h-px after:bg-white flex items-center gap-5 md:gap-7 mb-4 md:mb-8">No.{no}</p>
                <div className="w-full max-w-[720px] lg:group-even:pl-20 lg:group-odd:pr-20">
                    <h5 className="md:text-[24px] text-[18px] inline-block text-transparent bg-gradient-to-r from-[#0047FF] to-[#9541FF] bg-clip-text md:mb-8 mb-5 leading-[1.8]">{title}</h5>
                    <p className="md:text-[16px] text-white text-[13px] leading-[2.4] tracking-[0.15em]">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  Section.propTypes = {
    image: PropTypes.string.isRequired,
    no: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};