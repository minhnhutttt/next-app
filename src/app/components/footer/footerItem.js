import Link from "next/link";
import PropTypes from "prop-types";

export default function FooterItem({ link, children }) {
  return (
    <li>
      <Link
        className="block py-[5px] px-5 md:px-6 text-[14px] md:text-[16px] text-[#333] font-medium"
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
