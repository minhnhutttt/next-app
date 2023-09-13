import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black px-5 pb-5 pt-10 md:pt-[82px]">
      <div className="mx-auto mb-16 flex w-full max-w-[686px] items-center gap-12 max-md:flex-col md:mb-20 md:gap-[90px]">
        <Link href="/">
          <img className="max-md:w-[80px]" src="/logo-footer.png" alt="" />
        </Link>
        <div className="flex gap-4 max-md:items-center md:gap-8">
          <ul className="flex flex-col max-md:-ml-5">
            <li>
              <Link
                href="/terms-of-service"
                className="block px-5 py-[5px] text-[14px] font-medium text-white md:px-6 md:text-[16px]"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="block px-5 py-[5px] text-[14px] font-medium text-white md:px-6 md:text-[16px]"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-5 py-[5px] text-[14px] font-medium text-white md:px-6 md:text-[16px]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block px-5 py-[5px] text-[14px] font-medium text-white md:px-6 md:text-[16px]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-7 max-md:w-[140px]">
            <Link href="/">
              <img
                className="w-full max-w-[166px]"
                src="/appstore.png"
                alt=""
              />
            </Link>
            <Link href="/">
              <img
                className="w-full max-w-[166px]"
                src="/google-play.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] text-white md:text-[16px]">
        Copyright © 2023 Knock.
      </p>
    </div>
  );
}
