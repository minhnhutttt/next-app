import Link from "next/link";
import PropTypes from "prop-types";
export default function Button({link, children}) {
  return (
    <Link href={link} className="w-full max-w-[300px] md:max-w-[400px] h-[60px] md:h-[72px] bg-[#234078] flex items-center justify-center text-[14px] md:text-[18px] font-bold text-white tracking-[0.2em]">
        {children}
    </Link>
  );
}
Button.propTypes = {
  link: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
