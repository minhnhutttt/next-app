import Link from "next/link";
import PropTypes from "prop-types";

export default function FooterItem({ link, children }) {
  return (
    <li>
      <Link
        className="block px-5 py-[5px] text-[14px] font-medium text-[#333] md:px-6 md:text-[16px]"
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}

FooterItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
};
