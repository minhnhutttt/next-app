import Link from "next/link";
import FooterItem from "./footerItem";

export default function Footer() {
  return (
    <div className="bg-[#E0F3FF] px-5 pb-5 pt-8 md:pt-12">
      <div className="mx-auto mb-16 flex w-full max-w-[727px] items-center gap-8 max-md:flex-col md:mb-[60px] md:items-start md:gap-[70px]">
        <Link href="/">
          <img
            className="max-md:w-[120px]"
            src="/logo-footer.png"
            alt="DIVER Tag"
          />
        </Link>
        <div className="flex gap-4 pt-4 max-md:items-center md:gap-[50px]">
          <ul className="flex flex-col">
            <FooterItem link="/">Buy Tag</FooterItem>
            <FooterItem link="/terms-of-service">Terms of Service</FooterItem>
            <FooterItem link="/privacy-policy">Buy Tag</FooterItem>
            <FooterItem link="/about">About</FooterItem>
            <FooterItem link="/">Contact</FooterItem>
          </ul>
          <div className="flex gap-6 max-md:w-[140px] max-md:flex-col">
            <Link href="/">
              <img
                className="w-full max-w-[166px]"
                src="/btn-app-store.png"
                alt=""
              />
            </Link>
            <Link href="/">
              <img
                className="w-full max-w-[166px]"
                src="/btn-google-play.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center font-['Work_Sans'] text-[12px] md:text-[16px]">
        Copyright © 2023 DIVER Tag.
      </p>
    </div>
  );
}
