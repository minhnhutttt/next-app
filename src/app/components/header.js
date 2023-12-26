import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between px-5 md:h-[110px] md:px-[45px]">
      <Link
        href="/"
        className="font-dela text-[20px] text-black duration-200 hover:opacity-75 md:text-[42px]"
      >
        次世代ドメイン
      </Link>
      <Link
        href="#"
        className="relative mr-2 flex h-10 w-[140px] items-center justify-center rounded-[25px] bg-[#98FE01] px-6 font-zenkaku text-[12px] font-bold duration-200 hover:opacity-75 md:h-[78px] md:w-[320px] md:rounded-[50px] md:px-10  md:text-[24px] md:tracking-[0.2em]"
      >
        <span>今すぐLINE登録</span>
        <svg
          className="absolute right-2.5 h-[10px] w-[7.5px] md:right-5 md:h-[20px] md:w-[15px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 20"
          fill="none"
        >
          <path
            d="M-4.28367e-05 1.0006L-4.36236e-05 19.0011C0.000527716 19.1834 0.050792 19.362 0.145338 19.5178C0.239885 19.6736 0.375131 19.8007 0.536523 19.8853C0.697915 19.97 0.879341 20.009 1.06127 19.9982C1.2432 19.9875 1.41874 19.9273 1.569 19.8241L14.5694 10.8239C15.1084 10.4509 15.1084 9.55285 14.5694 9.17883L1.569 0.178578C1.41905 0.0744001 1.24342 0.0133077 1.06119 0.00193837C0.878961 -0.00943092 0.697098 0.0293578 0.535364 0.11409C0.37363 0.198823 0.23821 0.326258 0.143817 0.482551C0.0494242 0.638844 -0.000330421 0.818016 -4.28367e-05 1.0006Z"
            fill="#111111"
          />
        </svg>
      </Link>
    </header>
  );
}
