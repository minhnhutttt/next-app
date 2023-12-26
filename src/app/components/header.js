import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between h-20 md:h-[110px] px-5 md:px-[45px]">
            <Link href="/" className="text-[20px] md:text-[42px] text-black font-dela">
                次世代ドメイン
            </Link>
            <Link href="#" className="flex items-center justify-center w-[140px] md:w-[320px] h-10 md:h-[78px] text-[12px] md:text-[24px] font-bold font-zenkaku bg-[#98FE01] md:rounded-[50px] rounded-[25px] relative px-6 md:px-10 md:tracking-[0.2em] mr-2">
                <span>今すぐLINE登録</span>
                <svg className="absolute md:right-5 right-2.5 w-[7.5px] h-[10px] md:w-[15px] md:h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 20" fill="none">
                    <path d="M-4.28367e-05 1.0006L-4.36236e-05 19.0011C0.000527716 19.1834 0.050792 19.362 0.145338 19.5178C0.239885 19.6736 0.375131 19.8007 0.536523 19.8853C0.697915 19.97 0.879341 20.009 1.06127 19.9982C1.2432 19.9875 1.41874 19.9273 1.569 19.8241L14.5694 10.8239C15.1084 10.4509 15.1084 9.55285 14.5694 9.17883L1.569 0.178578C1.41905 0.0744001 1.24342 0.0133077 1.06119 0.00193837C0.878961 -0.00943092 0.697098 0.0293578 0.535364 0.11409C0.37363 0.198823 0.23821 0.326258 0.143817 0.482551C0.0494242 0.638844 -0.000330421 0.818016 -4.28367e-05 1.0006Z" fill="#111111"/>
                </svg>
            </Link>
        </header>
    )
}