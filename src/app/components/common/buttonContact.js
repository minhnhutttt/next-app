import PropTypes from "prop-types";

export default function ButtonContact({ sm }) {
  return (
    <div className="md:px-10">
      <a
        href="/contact"
        className={`flex items-center justify-center rounded-[50px] bg-[url('/images/button-top.png')] bg-[length:100%_100%] font-bold shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition duration-300 hover:opacity-75 ${
          sm
            ? "h-[53px] w-[240px] text-[16px] md:h-[70px] md:w-[320px] md:text-[20px]"
            : "h-[63px] w-[300px] text-[18px] md:h-[80px] md:w-[378px] md:text-[24px] "
        }`}
      >
        お問い合わせはこちら
      </a>
    </div>
  );
}
ButtonContact.propTypes = {
  sm: PropTypes.node.isRequired,
};
