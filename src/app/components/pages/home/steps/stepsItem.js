import PropTypes from "prop-types";

export default function StepsItem({ imgSrc, step, content }) {
  return (
    <div className="flex flex-col">
        <div className="flex items-center max-md:justify-center gap-2 md:gap-3">
            <p className="text-[50px] md:text-[6.5vw] lg:text-[72px] font-bold">{step}</p>
            <p className="text-[24px] md:text-[2.2vw] lg:text-[30px] font-bold">{content}</p>
        </div>
        <div className="flex max-md:justify-center max-md:max-w-[220px] max-md:mx-auto">
            <img src={imgSrc} alt="" />
        </div>
    </div>
  );
}

StepsItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};
