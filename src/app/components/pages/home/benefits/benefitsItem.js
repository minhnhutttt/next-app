import PropTypes from "prop-types";

export default function BenefitsItem({ imgSrc, title, content }) {
  return (
    <div className="px-5 md:px-[45px] mb-8 md:mb-[60px] flex">
        <div className="rounded-[20px] bg-white  h-full overflow-hidden shadow-[4px_0px_15px_rgba(0,0,0,0.15)]">
            <div className="flex">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="flex justify-center items-center flex-col pt-[7%] pb-[8%] px-[10%]">
                <p className="text-[18px] md:text-[24px] font-bold text-center">{title}</p>
                <p className="text-[13px] md:text-[16px] font-medium mt-[2.5%]">
                    {content}
                </p>
            </div>
        </div>
    </div>
  );
}

BenefitsItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};
