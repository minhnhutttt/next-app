import Link from "next/link";
import PropTypes from "prop-types";

export default function MenuItem({link, children}) {
  return (
    <li>
        <Link
        className="text-[20px] lg:text-[14px] xl:text-[16px] text-[#010101] uppercase" href={link}>
        {children}
        </Link>
    </li>
  );
}

MenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.node.isRequired,
  };
  