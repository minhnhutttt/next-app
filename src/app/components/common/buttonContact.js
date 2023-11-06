
import PropTypes from "prop-types";

export default function ButtonContact({ sm }) {
  return (
    <div className="px-10">
        <a href="#" className={`flex items-center justify-center bg-[url('/images/button-top.png')] bg-cover font-bold ${sm ? ' md:w-[320px] w-[240px] h-[53px] md:h-[70px] md:text-[20px] text-[16px]' : 'w-[300px] md:w-[378px] md:h-[80px] h-[63px] text-[18px] md:text-[24px] '}`}>
        お問い合わせはこちら
        </a>
    </div>
  );
}
ButtonContact.propTypes = {
  sm: PropTypes.node.isRequired,
};