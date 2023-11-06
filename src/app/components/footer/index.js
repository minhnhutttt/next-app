import Link from "next/link";
import PropTypes from "prop-types";

function MenuItem({ link, children }) {
  return (
    <li>
      <Link
        className="block px-5 py-[5px] text-[14px] font-medium text-white md:px-6 md:text-[16px]"
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Footer() {
  return (
    <div className="bg-black px-5 pb-5 pt-10 md:pt-[5%]">
      <div className="mx-auto mb-16 flex w-full max-w-[964px] items-center justify-between gap-12 max-md:flex-col md:mb-20 md:gap-[70px]">
        <Link href="/">
          <img className="max-md:w-[120px]" src="/logo-footer.png" alt="" />
        </Link>
        <div className="flex items-center justify-between flex-1 gap-4 md:gap-8">
          <ul className="flex flex-wrap max-md:-ml-5 max-md:flex-col">
            <MenuItem link="/terms-of-service">Terms of Service</MenuItem>
            <MenuItem link="/privacy-policy">Privacy policy</MenuItem>
            <MenuItem link="/about">About</MenuItem>
            <MenuItem link="/contact">Contact</MenuItem>
          </ul>
          <div className="flex flex-col items-center gap-7 max-md:w-[140px]">
            <Link href="/">
              <img
                className="w-full max-w-[166px]"
                src="/btn-apple.png"
                alt=""
              />
            </Link>
            <Link href="/">
              <img
                className="w-full max-w-[166px]"
                src="/btn-google.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] text-white md:text-[16px]">
        Copyright © 2023 DIVER Biz.
      </p>
    </div>
  );
}
