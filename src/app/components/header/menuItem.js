import Link from "next/link";
import PropTypes from "prop-types";

export default function MenuItem({ link, children }) {
  return (
    <Link
      className="block px-3 py-3 text-[20px] font-medium text-[#333] lg:text-[14px] xl:px-6 xl:text-[16px]"
      href={link}
    >
      {children}
    </Link>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
};
