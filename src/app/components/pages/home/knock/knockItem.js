export default function KnockItem({ number, title, children, large }) {
  return (
    <div
      className={`inline-flex max-w-[220px] rounded-[5vw] bg-white pb-[30px] pt-2.5 [box-shadow:0px_4px_20px_0px_rgba(0,_0,_0,_0.10)] md:max-w-[299px] lg:rounded-[60px] ${
        large
          ? "px-4 md:px-[23px] lg:min-h-[298px]"
          : "px-4 md:px-5 lg:min-h-[279px]"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FFF6D8] font-racing text-[30px] md:h-[80px] md:w-[80px] md:text-[6vw] lg:h-[100px] lg:w-[100px] lg:text-[96px]">
          <span className="absolute left-0 top-2 rotate-[-20deg] font-noto text-[11px] font-bold md:text-[16px]">
            魅力
          </span>
          {number}
        </div>
        <p className="py-3.5 text-center text-[13px] font-bold md:py-[1vw] md:text-[1.5vw] lg:py-5 lg:text-[18px]">
          {title}
        </p>
        <p className="mx-auto max-w-[245px] text-[12px] md:text-[1.3vw] lg:text-[16px]">
          {children}
        </p>
      </div>
    </div>
  );
}

KnockItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
};
