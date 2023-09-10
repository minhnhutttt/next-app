import Link from "next/link";
import PropTypes from "prop-types";
export default function Button({ link, children }) {
  return (
    <Link
      href={link}
      className="flex h-[60px] w-full max-w-[300px] items-center justify-center bg-[#234078] text-[14px] font-bold tracking-[0.2em] text-white md:h-[72px] md:max-w-[400px] md:text-[18px]"
    >
      {children}
    </Link>
  );
}
Button.propTypes = {
  link: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
