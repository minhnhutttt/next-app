"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonCheck from "./common/buttonCheck";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleLinksClick = () => {
      setOpen(false);
    };

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", handleLinksClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinksClick);
      });
    };
  }, []);
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-5 md:px-10">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[120px]">
        <Link
          href="/"
          className="duration-150 hover:opacity-75"
        >
          <p className="text-[32px] md:text-[42px] font-dela">次世代スキャン</p>
        </Link>
        <div className="flex items-center justify-end">
          <div
            className={`z-[99] flex items-center justify-center gap-6 duration-300 max-xl:pointer-events-none max-xl:fixed max-xl:inset-0 max-xl:flex-col max-xl:bg-[#FFE500]/[0.9] max-xl:opacity-0 md:gap-8 xl:gap-9 ${
              open ? "max-xl:pointer-events-auto max-xl:opacity-100" : ""
            }`}
          >
            <nav>
              <ul className="flex items-center gap-6 max-md:flex-col">
                <li>
                  <Link
                    href="#faq"
                    smooth="true"
                    className="px-3 font-bold duration-150 hover:opacity-75 text-[20px] md:text-[18px]"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="px-3 font-bold duration-150 hover:opacity-75 text-[20px] md:text-[18px]"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </nav>
            <ButtonCheck size="sm" />
          </div>
        </div>
        <div className="flex h-[28px] w-[50px] items-center justify-center md:w-[70px] xl:hidden">
          <button
            className={`group relative block h-[22px] w-8 cursor-pointer border-[none] p-0 max-xl:z-[99] md:w-10 max-xl:[&.active]:fixed ${
              open ? "active" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
            <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
