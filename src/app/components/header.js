"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonContact from "./common/button/buttonContact";
import ButtonLine from "./common/button/buttonLine";

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
    <header className="fixed left-0 right-0 top-0 z-10 bg-[linear-gradient(180deg,_rgba(0,_30,_40,_0.90)_0%,_rgba(0,_30,_40,_0.00)_100%)] px-5 min-[1366px]:px-20">
      <div className="mx-auto flex h-20 w-full items-center justify-between md:h-[128px]">
        <Link href="/" className="font-black text-white duration-150 hover:opacity-75">
          <p className="text-[24px] tracking-[0.6em] md:text-[35px]">NES</p>
          <p className="text-[10px] md:text-[12px]">
            ネバーエンディングストレージ
          </p>
        </Link>
        <div className="flex items-center">
          <div
            className={`z-[99] flex items-center justify-center gap-6 duration-300 max-xl:pointer-events-none max-xl:fixed max-xl:inset-0 max-xl:flex-col max-xl:bg-black/90 max-xl:opacity-0 md:gap-8 xl:gap-[74px] ${
              open ? "max-xl:pointer-events-auto max-xl:opacity-100" : ""
            }`}
          >
            <nav>
              <ul className="flex items-center max-md:flex-col max-md:gap-6">
                <li>
                  <a
                    href="#about"
                    className="px-3 font-bold text-white md:text-[16px] duration-150 hover:opacity-75"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#qa"
                    className="px-3 font-bold text-white md:text-[16px] duration-150 hover:opacity-75"
                  >
                    一問一答
                  </a>
                </li>
                <li>
                  <a
                    href="#plan"
                    className="px-3 font-bold text-white md:text-[16px] duration-150 hover:opacity-75"
                  >
                    料金プラン
                  </a>
                </li>
                <li>
                  <a
                    href="#howto"
                    className="px-3 font-bold text-white md:text-[16px] duration-150 hover:opacity-75"
                  >
                    購入方法
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="px-3 font-bold text-white md:text-[16px] duration-150 hover:opacity-75"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex w-[200px] md:w-[528px] gap-4 max-md:flex-col md:gap-7">
              <ButtonContact />
              <ButtonLine />
            </div>
          </div>
        </div>
        <div className="flex h-[28px] w-[50px] items-center justify-center md:w-[70px] xl:hidden">
          <button
            className={`group relative block h-[22px] w-8 cursor-pointer border-[none] p-0 max-xl:z-[99] md:w-10 max-xl:[&.active]:fixed ${
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
    </header>
  );
}
