import Link from "next/link";
import PropTypes from "prop-types";

export default function MenuItem({ link, children }) {
  return (
    <li>
      <Link
        className="text-[20px] block py-3 px-6 text-[#333] font-medium lg:text-[14px] xl:text-[16px]"
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
};
