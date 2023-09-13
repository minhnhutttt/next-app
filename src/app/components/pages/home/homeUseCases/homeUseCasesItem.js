import PropTypes from "prop-types";

export default function HomeUseCasesItem({ imgSrc, title, content }) {
  return (
    <div>
        <div className="mb-8 shadow-[0px_0px_9px_2px_rgba(0,0,0,0.05)] rounded-[10px] overflow-hidden">
            <img src={imgSrc} alt={title} />
        </div>
        <div className="">
            <p className="text-[22px] font-bold tracking-[-0.03em]">{title}</p>
            <p className="text-[16px] leading-[1.4]">{content}</p>
        </div>
    </div>
  );
}

HomeUseCasesItem.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};
