import PropTypes from "prop-types";
import Title from "./title";
export default function Step({ title, imgSrc, imgSecondSrc, children }) {
  return (
    <div className="mx-auto w-full max-w-[1400px] rounded-[20px] bg-white px-5 pb-5 pt-[2.5%] shadow-[1px_1px_28px_rgba(70,94,125,0.3)] md:rounded-[40px] md:pb-[3%]">
      <div className="flex items-center justify-center max-md:py-5 md:h-[168px]">
        <Title>{title}</Title>
      </div>
      <div className="relative flex w-full justify-center">
        <div className="relative flex justify-center gap-[10%] max-lg:w-full max-lg:flex-wrap lg:gap-[130px]">
          <div className="relative max-w-[289px] max-lg:w-[30%] lg:flex-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-[44px] bg-transparent shadow-[1px_1px_50px_rgba(70,94,125,0.3)]"></div>
              <img src={imgSrc} alt="" />
            </div>
          </div>
          {imgSecondSrc && (
            <div className="relative max-w-[289px] max-lg:w-[30%] lg:flex-1">
              <div className="absolute inset-0 rounded-[44px] bg-transparent shadow-[1px_1px_50px_rgba(70,94,125,0.3)]"></div>
              <img src={imgSecondSrc} alt="" />
            </div>
          )}

          {children && (
            <div className="space-y-6 max-lg:mx-auto max-lg:mt-6 max-lg:flex max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:justify-center md:space-y-10 lg:absolute lg:left-[calc(100%+40px)] lg:top-0 lg:h-full">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Step.propTypes = {
  title: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgSecondSrc: PropTypes.string,
  children: PropTypes.node,
};
