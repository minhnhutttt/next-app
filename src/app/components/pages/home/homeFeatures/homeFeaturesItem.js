import PropTypes from "prop-types";

export default function HomeFeatureItem({ imgSrc, title, content }) {
  return (
    <div>
      <div className="mb-4 md:mb-6">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="px-4">
        <p className="mb-3 text-[18px] font-bold tracking-[-0.03em] md:mb-5 md:text-[22px]">
          {title}
        </p>
        <p className="text-[13px] leading-[1.4] md:text-[16px]">{content}</p>
      </div>
    </div>
  );
}

HomeFeatureItem.propTypes = {
  imgSrc: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};
