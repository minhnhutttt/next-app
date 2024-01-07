import Link from "next/link";
import ButtonContact from "./common/button/buttonContact";
import ButtonLine from "./common/button/buttonLine";

export default function Footer() {
  return (
    <footer className="bg-[#111] bg-[url('/images/bg-footer.png')] bg-right-bottom bg-no-repeat px-10 pb-4 pt-12 max-md:bg-[length:100%_auto] md:pb-6 md:pt-[100px]">
      <div className="mx-auto mb-12 flex w-full max-w-[700px] max-md:flex-col md:mb-20 lg:max-w-[953px] lg:items-center">
        <Link href="/" className="font-black text-white duration-150 hover:opacity-75">
          <p className="text-center text-[24px] tracking-[0.6em] md:text-[35px]">
            NES
          </p>
          <p className="text-center text-[10px] md:text-[12px]">
            ネバーエンディングストレージ
          </p>
        </Link>
        <div className="flex flex-1 items-center gap-[24px] max-lg:flex-col max-md:mt-10 lg:ml-10 lg:gap-[48px]">
          <ul className="flex flex-wrap gap-y-6 max-md:justify-center md:gap-y-4">
            <li>
              <a
                href="#about"
                className="block px-3 text-[16px] font-bold tracking-[0.1em] text-white duration-150 hover:opacity-75"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#qa"
                className="block px-3 text-[16px] font-bold tracking-[0.1em] text-white duration-150 hover:opacity-75"
              >
                一問一答
              </a>
            </li>
            <li>
              <a
                href="#plan"
                className="block px-3 text-[16px] font-bold tracking-[0.1em] text-white duration-150 hover:opacity-75"
              >
                料金プラン
              </a>
            </li>
            <li>
              <a
                href="#howto"
                className="block px-3 text-[16px] font-bold tracking-[0.1em] text-white duration-150 hover:opacity-75"
              >
                購入方法
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block px-3 text-[16px] font-bold tracking-[0.1em] text-white duration-150 hover:opacity-75"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="w-[200px] flex-1 space-y-5 md:w-[250px]">
            <ButtonContact />
            <ButtonLine />
          </div>
        </div>
      </div>
      <p className="text-center font-lato text-[14px] text-white md:text-[16px]">
        Copyright © NES
      </p>
    </footer>
  );
}
