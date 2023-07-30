"use client";

import Link from "next/link";
import PropTypes from "prop-types";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function HeaderMenuItem({ children, link }) {
  const currentRoute = usePathname();
  return (
    <li className="px-[1.15vw] max-md:py-1">
      <Link
        className={classNames(
          "relative text-[16px] font-medium tracking-[-0.1em] after:absolute after:bottom-[-5px] md:after:bottom-[-10px] after:left-0 after:h-0.5 md:after:h-1 after:w-full after:bg-[#366bb3] min-[1600px]:text-[1.146vw]",
          currentRoute === link ? "after:block" : "after:hidden"
        )}
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
};
