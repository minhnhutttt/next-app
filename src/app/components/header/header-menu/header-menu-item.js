import Link from "next/link";
import PropTypes from "prop-types";

export default function HeaderMenuItem({ children, link, active }) {
  return (
    <li className="px-[1.2vw] max-md:py-1">
      <Link
        className="text-[16px] font-medium tracking-[-0.1em] min-[1600px]:text-[1.146vw] "
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}
HeaderMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  active: PropTypes.bool,
};
