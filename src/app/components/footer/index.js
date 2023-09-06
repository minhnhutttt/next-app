import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#e1e2e7] px-5 pt-10 md:pt-[5%]">
      <div className="mx-auto mb-10 flex w-full max-w-[1640px] justify-center max-md:flex-col md:mb-16">
        <div className="flex justify-center px-[7%] md:w-1/2 md:justify-end">
          <Link href="/">
            <img
              className="max-md:w-[220px]"
              src="/logo-footer.png"
              alt="CONNECT TO WORLD"
            />
          </Link>
        </div>
        <div className="flex gap-5 max-md:mt-8 md:w-1/2 md:gap-[60px] md:px-5">
          <div>
            <p className="text-[16px] font-medium uppercase md:text-[18px]">
              Service
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link className="text-[14px]" href="/">
                  Blockchain development
                </Link>
              </li>
              <li>
                <Link className="text-[14px]" href="/">
                  NFT development
                </Link>
              </li>
              <li>
                <Link className="text-[14px]" href="/">
                  Smart contracts development
                </Link>
              </li>
              <li>
                <Link className="text-[14px]" href="/">
                  dApp development
                </Link>
              </li>
              <li>
                <Link className="text-[14px]" href="/">
                  DEX development
                </Link>
              </li>
              <li>
                <Link className="text-[14px]" href="/">
                  Cryptocurrency development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="flex items-center gap-1 text-[16px] font-medium uppercase md:text-[18px]">
              <img src="/ic-contact.png" alt="" />
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link className="text-[14px]" href="/">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="py-2 text-center text-[13px]">© 2023 CONNECT TO WORLD</p>
    </div>
  );
}
