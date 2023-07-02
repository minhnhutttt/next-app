"use client";
import Link from "next/link";
import PropTypes from "prop-types";
import { usePathname, useRouter } from "next/navigation";
import { useThemeContext } from "./../context/page-context";
export default function NextLink({ href, children, className, ...res }) {
  const pathname = usePathname();
  const router = useRouter();
  const { setLoading } = useThemeContext();
  const handleClick = (e) => {
    e.preventDefault();
    if (pathname !== href) {
      setLoading(true);
      setTimeout(() => {
        router.push(href);
      }, 1500);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <Link href={href} onClick={handleClick} className={className} {...res}>
      {children}
    </Link>
  );
}

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
