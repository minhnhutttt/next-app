import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-[url('/bg-footer.png')] bg-cover pt-[14px]">
      <div className="border-t-[5px] border-white">
        <div className="mx-auto w-full max-w-[440px] md:max-w-[1300px]">
          <div className="flex max-md:flex-col justify-between pb-9 max-md:px-5 md:pl-9 pt-6 gap-5">
            <Link href="/">
              <img src="/logo-footer.png" alt="" />
            </Link>
            <div className="md:w-[440px] md:border-l border-t border-white pb-20 md:pb-[150px] pt-5 md:pt-9">
              <div className="flex justify-center">
                <Link href="/">
                  <img src="/img-footer.png" alt="" />
                </Link>
              </div>
              <div className="mt-[38px] flex items-center justify-center gap-[62px]">
                <p className="text-[16px] font-semibold text-white">
                  株式会社〇〇〇 <br />
                  東京都〇〇
                  <br />
                  03-0000-0001
                </p>
                <Link
                  href="/"
                  className="flex h-[42px] w-[136px] items-center justify-center border border-white bg-white/[0.16] text-[22px] font-semibold text-white"
                >
                  contact
                </Link>
              </div>
            </div>
          </div>
          <div className="border-y border-white px-4 max-md:py-4 md:px-10">
            <ul className="flex max-md:flex-col md:items-center md:gap-[108px]">
              <li>
                <Link
                  href="/"
                  className="block py-2 md:py-4 text-[16px] md:text-[18px] font-semibold text-white"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2 md:py-4 text-[16px] md:text-[18px] font-semibold text-white"
                >
                  運営会社
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2 md:py-4 text-[16px] md:text-[18px] font-semibold text-white"
                >
                  特定商取引法に関する表示
                </Link>
              </li>
            </ul>
          </div>
          <p className="px-5 py-5 md:py-[30px] text-right md:text-[18px] text-[16px] font-semibold text-white">
            （C)2023　DIVER HELP CENTER　
          </p>
        </div>
      </div>
    </footer>
  );
}
