import PropTypes from "prop-types";

export default function HomeFeatureItem({ imgSrc, title, content }) {
  return (
    <div>
        <div className="mb-6">
            <img src={imgSrc} alt={title} />
        </div>
        <div className="px-4">
            <p className="text-[22px] font-bold tracking-[-0.03em] mb-5">{title}</p>
            <p className="text-[16px] leading-[1.4]">{content}</p>
        </div>
    </div>
  );
}

HomeFeatureItem.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};
