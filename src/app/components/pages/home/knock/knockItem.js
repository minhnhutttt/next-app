import PropTypes from "prop-types";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function KnockItem({ number, title, children, large }) {
  const animateLeftRefs = useScrollAnimation("slideLeft");
  return (
    <div className={`inline-flex md:max-w-[299px] max-w-[220px] bg-white [box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)] lg:rounded-[60px] rounded-[5vw] pt-2.5 pb-[30px] ${large ? 'md:px-[23px] px-4 lg:min-h-[298px]' : 'md:px-5 px-4 lg:min-h-[279px]'}`}>
        <div className="flex flex-col items-center justify-center">
            <div className="lg:w-[100px] md:w-[80px] w-[60px] lg:h-[100px] md:h-[80px] h-[60px] rounded-full bg-[#FFF6D8] flex items-center justify-center text-[30px] md:text-[6vw] lg:text-[96px] font-racing relative">
                <span className="absolute font-noto md:text-[16px] text-[11px] top-2 left-0 font-bold rotate-[-20deg]">魅力</span>
                {number}
            </div>
            <p className="text-center lg:text-[18px] text-[13px] md:text-[1.5vw] font-bold py-3.5 md:py-[1vw] lg:py-5">
                {title}
            </p>
            <p className="lg:text-[16px] text-[12px] md:text-[1.3vw] max-w-[245px] mx-auto">
                {children}
            </p>
        </div>
    </div>
  );
}

KnockItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  large: PropTypes.bool
};
