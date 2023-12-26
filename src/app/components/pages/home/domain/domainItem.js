import PropTypes from "prop-types";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function DomainItem({ title, imageSrc, children }) {
  const animateLeftRefs = useScrollAnimation("slideLeft");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <div className="flex items-center gap-8 break-words py-[30px] max-md:flex-col-reverse md:gap-[64px] md:py-[60px] md:[&:nth-of-type(even)]:flex-row-reverse">
      <div ref={animateLeftRefs} className="flex-1">
        <div className="text-center font-dela text-[24px] leading-[1.3] text-[#111] md:text-[30px] lg:text-[60px]">
          {title}
        </div>
        <div className="mt-6 font-dm text-[14px] leading-[1.6] md:mt-10 md:text-[16px] lg:text-[20px]">
          <p>{children}</p>
        </div>
      </div>
      <figure ref={animateRightRefs} className="max-lg:w-1/3 max-md:w-3/5">
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
