import PropTypes from "prop-types";
import Link from "next/link";

export default function ButtonLink({ link, children, noBg }) {
  return (
    <Link href={link} className={`flex items-center justify-center w-full md:max-w-[415px] max-w-[280px] h-12 md:h-20 rounded-[40px] text-white font-medium text-[16px] md:text-[22px] tracking-widest bg-[url('/arr.png')] bg-no-repeat max-md:bg-[length:20px_auto] bg-[center_right_1rem] ${noBg ? 'border-2 border-white' : 'bg-[#0047ab]'}`}>
        {children}
    </Link>
  );
}
ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
  noBg: PropTypes.bool,
};
