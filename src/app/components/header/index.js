"use client";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { usePathname } from "next/navigation";

function MenuItem({ link, children }) {
  return (
    <li className="px-3 py-3 xl:px-6">
      <a
        className="text-[24px] font-medium leading-normal tracking-wide text-white lg:text-[18px]"
        href={link}
      >
        {children}
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header
      className={`left-0 right-0 top-0 px-4 md:px-8 ${
        isHomePage ? "absolute bg-black/20 " : ""
      }`}
    >
      <div className="mx-auto flex h-[80px] w-full max-w-[1600px] items-center justify-between px-5 py-2 md:h-[110px] xl:pl-20">
        <Link href="/">
          <img className="max-md:w-[160px]" src="/logo.png" alt="DIVER Biz" />
        </Link>
        <div className="flex-1 max-lg:flex max-lg:justify-end lg:ml-6">
          <div
            className={`z-[99] flex items-center justify-end max-lg:pointer-events-none max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:bg-black/70 max-lg:opacity-0 max-md:gap-4 ${
              open ? "max-lg:pointer-events-auto max-lg:opacity-100" : ""
            }`}
          >
            <div className="flex items-center max-lg:flex-col">
              <ul className="flex items-center max-lg:mb-5 max-lg:flex-col lg:mr-9">
                <MenuItem link="/">Home</MenuItem>
                <MenuItem link="/terms-of-service">Terms of Service</MenuItem>
                <MenuItem link="/privacy-policy">Privacy policy</MenuItem>
                <MenuItem link="/about">About</MenuItem>
              </ul>
            </div>
          </div>
          <div className="flex h-[70px] w-[70px] items-center justify-center lg:hidden">
            <button
              className={`group relative block h-[22px] w-10 cursor-pointer border-[none] p-0 max-lg:z-[99] max-lg:[&.active]:fixed ${
                open ? "active" : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <span className="absolute left-0 top-0 block h-0.5 w-full bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
              <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
