import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black pb-5 pt-10 md:pt-20">
      <div className="mx-auto w-full max-w-[453px]">
        <div className="flex gap-6 max-md:flex-col max-md:items-center md:gap-8">
          <Link href="/" className="block font-dela leading-none text-white">
            <p className="break-keep text-[22px] tracking-[0.5rem] md:text-[26px]">
              次世代
            </p>
            <p className="break-keep pl-5 text-[30px] tracking-wider md:pl-8 md:text-[42px]">
              アカウント
            </p>
          </Link>
          <div className="space-y-2 pt-3">
            <Link
              href="/"
              className="block text-[16px] text-white duration-150 hover:opacity-75"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/"
              className="block text-[16px] text-white duration-150 hover:opacity-75"
            >
              利用規約
            </Link>
          </div>
        </div>
        <div className="mb-8 mt-10 flex justify-center md:mb-14 md:mt-20">
          <Link
            href="#"
            className="flex h-12 w-[240px] items-center justify-center gap-3 rounded-[50px] bg-[#00B900] text-[14px] font-bold text-white duration-150 hover:opacity-75 md:h-[64px] md:w-[247px] md:text-[18px]"
          >
            <span> LINEでお問い合わせ</span>
            <svg
              className="max-md:w-2"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
            >
              <path
                d="M0.0157957 0.800481L0.015795 15.2009C0.0162528 15.3467 0.0564645 15.4896 0.132101 15.6142C0.207738 15.7389 0.315935 15.8405 0.44505 15.9083C0.574163 15.976 0.719303 16.0072 0.864846 15.9986C1.01039 15.99 1.15082 15.9418 1.27103 15.8593L11.6713 8.65911C12.1025 8.3607 12.1025 7.64228 11.6713 7.34307L1.27103 0.142863C1.15107 0.0595201 1.01057 0.0106461 0.864784 0.0015507C0.718999 -0.00754474 0.573509 0.0234863 0.444122 0.0912722C0.314735 0.159058 0.206398 0.261007 0.130884 0.386041C0.0553694 0.511075 0.0155658 0.654413 0.0157957 0.800481Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <p className="text-center font-noto text-[13px] text-white md:text-[15px]">
          Copyright © JISEDAI ACCOUNT
        </p>
      </div>
    </footer>
  );
}
