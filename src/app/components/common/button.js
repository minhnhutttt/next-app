import PropTypes from "prop-types";
import Link from "next/link";

export default function ButtonLink({ link, children, noBg }) {
  return (
    <Link
      href={link}
      className={`flex h-12 w-full max-w-[280px] items-center justify-center rounded-[40px] bg-[url('/arr.png')] bg-[center_right_1rem] bg-no-repeat text-[16px] font-medium tracking-widest text-white max-md:bg-[length:20px_auto] md:h-20 md:max-w-[415px] md:text-[22px] ${
        noBg ? "border-2 border-white" : "bg-[#0047ab]"
      }`}
    >
      {children}
    </Link>
  );
}
ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
  noBg: PropTypes.bool,
};
