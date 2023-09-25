import Link from "next/link";
import PropTypes from "prop-types";

export default function Button({ link, children }) {
  return (
    <Link href={link} className="flex items-center justify-center lg:w-[369px] w-[300px] lg:h-[94px] h-[76px] text-[24px] font-bold bg-[url('/bg-btn.png')] bg-[length:100%_100%]">
        {children}
    </Link>
  );
}
Button.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
