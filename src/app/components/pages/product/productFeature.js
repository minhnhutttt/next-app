import PropTypes from "prop-types";
export default function ProductFeature({ imgSrc, title, content }) {
  return (
    <div className="flex flex-col items-center rounded-[30px] bg-white px-[13%] py-[9%] shadow-[12px_0px_18px_rgba(119,120,121,0.5)]">
      <div className="mb-4">
        <img className="max-md:w-[140px]" src={imgSrc} alt="" />
      </div>
      <h5 className="text=center mb-3 text-[18px] font-bold tracking-widest md:text-[30px]">
        {title}
      </h5>
      <p className="text-[14px] leading-[1.8] md:text-[18px]">{content}</p>
    </div>
  );
}
ProductFeature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};
