import Link from 'next/link';
import PropTypes from 'prop-types';

export default function FooterMenuItem({children, link, active}) {
  return (
    <li>
        <Link
        className="block text-[13px] font-medium md:text-[18px] text-white "
        href={link}
        >
        {children}
        </Link>
    </li>
  );
}
FooterMenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.string,
    active: PropTypes.bool
  };