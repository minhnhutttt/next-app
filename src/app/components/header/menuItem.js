import Link from "next/link";
import PropTypes from "prop-types";

export default function MenuItem({ link, children }) {
  return (
    <li>
      <Link
        className="text-[20px] uppercase text-[#010101] max-lg:font-bold lg:text-[14px] xl:text-[16px]"
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
