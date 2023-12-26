import PropTypes from "prop-types";
import useScrollAnimation from '@/app/hooks/useScrollAnimation';
export default function DomainItem({ title, imageSrc, children }) {
  
  const animateLeftRefs = useScrollAnimation('slideLeft');
  const animateRightRefs = useScrollAnimation('slideRight');
    return (
      <div className="flex items-center max-md:flex-col-reverse md:gap-[64px] gap-8 md:py-[60px] py-[30px] break-words md:[&:nth-of-type(even)]:flex-row-reverse">
        <div ref={animateLeftRefs} className="flex-1">
            <div className="font-dela lg:text-[60px] text-[24px] md:text-[30px] text-[#111] text-center leading-[1.3]">
                {title}
            </div>
            <div className="font-dm lg:text-[20px] text-[14px] md:text-[16px] leading-[1.6] mt-6 md:mt-10">
                <p>{children}</p>
            </div>
        </div>
        <figure ref={animateRightRefs} className="max-md:w-3/5 max-lg:w-1/3">
            <img src={imageSrc} alt="" />
        </figure>
      </div>
    );
  }
  
  DomainItem.propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    imageSrc: PropTypes.string.isRequired,
  };