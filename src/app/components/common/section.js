import PropTypes from "prop-types";

export default function Section({ no, image, title, children }) {
  return (
    <div className="group mx-auto flex w-full max-w-[720px] max-lg:flex-col-reverse max-lg:px-10 max-md:px-6 lg:max-w-[1440px] lg:items-end lg:even:flex-row-reverse">
      <div className="lg:w-1/2">
        <img
          className="relative max-w-full max-lg:top-[-40px] lg:group-odd:right-[-77px] lg:group-even:left-[-77px]"
          src={image}
          alt=""
        />
      </div>
      <div className="relative lg:w-1/2 lg:pb-[12.5%]">
        <p className="mb-4 flex items-center gap-5 text-[16px] text-white after:block after:h-px after:w-full after:bg-white md:mb-8 md:gap-7 md:text-[20px] lg:group-even:flex-row-reverse">
          No.{no}
        </p>
        <div className="w-full max-w-[720px] lg:group-odd:pr-20 lg:group-even:pl-20">
          <h5 className="mb-5 inline-block bg-gradient-to-r from-[#0047FF] to-[#9541FF] bg-clip-text text-[18px] leading-[1.8] text-transparent md:mb-8 md:text-[24px]">
            {title}
          </h5>
          <p className="text-[13px] leading-[2.4] tracking-[0.15em] text-white md:text-[16px]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

Section.propTypes = {
  image: PropTypes.string.isRequired,
  no: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
