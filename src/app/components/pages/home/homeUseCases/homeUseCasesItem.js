import PropTypes from "prop-types";

export default function HomeUseCasesItem({ imgSrc, title, content }) {
  return (
    <div>
      <div className="mb-5 overflow-hidden rounded-[10px] shadow-[0px_0px_9px_2px_rgba(0,0,0,0.05)] md:mb-8">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="">
        <p className="text-[18px] font-bold tracking-[-0.03em] max-md:mb-2 max-md:leading-tight md:text-[22px]">
          {title}
        </p>
        <p className="text-[12px] leading-[1.4] md:text-[14px] xl:text-[16px]">
          {content}
        </p>
      </div>
    </div>
  );
}

HomeUseCasesItem.propTypes = {
  imgSrc: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};
