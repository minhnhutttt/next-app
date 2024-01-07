import PropTypes from "prop-types";
export default function GuideItem({ step, children, imageSrc }) {
  return (
    <div className="max-w-[300px] flex-1 md:w-1/3">
        <div className="aspect-square max-md:max-w-[200px] mx-auto md:w-full bg-[#D4F5FF] rounded-full flex items-center justify-center flex-col">
            <figure className="max-lg:w-[80px] max-md:w-[60px] -mt-2 md:-mt-4">
                <img src={imageSrc} alt={step} />
            </figure>
            <p className="md:text-[24px] text-[16px] text-center font-bold md:mt-4 mt-2">{step}</p>
        </div>
        <div className="mt-4 md:mt-5">
            <div className="bg-white rounded-[10px] lg:p-5 p-4 md:text-[16px] text-[14px]">
                {children}
            </div>
        </div>
    </div>
  );
}

GuideItem.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  step: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
