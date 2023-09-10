import PropTypes from "prop-types";
export default function ProductFeature({imgSrc, title, content}) {
  return (
    <div className="bg-white shadow-[12px_0px_18px_rgba(119,120,121,0.5)] rounded-[30px] flex flex-col items-center py-[9%] px-[13%]">
        <div className="mb-4">
            <img className="max-md:w-[140px]" src={imgSrc} alt="" />
        </div>
        <h5 className="text=center text-[18px] md:text-[30px] font-bold tracking-widest mb-3">{title}</h5>
        <p className="text-[14px] md:text-[18px] leading-[1.8]">{content}</p>
    </div>
  );
}
ProductFeature.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};
