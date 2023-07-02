import Link from "next/link";
import PropTypes from "prop-types";
import NextLink from "../components/next-link";
export default function Header({ small, children }) {
  return (
    <div>
      <div className="flex">
        <NextLink href="/" className="px-5 flex items-center text-[#18539e] font-bold h-10">DIVER Wallet 登録方法</NextLink>
        <NextLink href="/lp2"  className="px-5 flex items-center text-[#18539e] font-bold h-10">ウォレット復元用リカバリーフレーズ
確認方法</NextLink>
      </div>
      <div className="flex h-10 items-center justify-center bg-[url('/line.png')] bg-[length:100%_100%] md:h-[50px]">
        <img className="max-md:w-[140px]" src="/logo.png" alt="Web3.0 QR" />
      </div>
      <div
        className={`mb-7 mt-7 flex items-center justify-center bg-[url('/img-phone.png')] bg-center bg-no-repeat px-5 text-center font-['Noto_Sans_JP'] font-black text-[#18539e] max-md:bg-[length:70px_102px] md:mb-10 md:mt-[60px] md:min-h-[192px] ${
          small
            ? "text-[28px] leading-[1.2] tracking-wide md:text-[50px] lg:text-[80px]"
            : "text-[32px] tracking-[0.15em] md:text-[60px] lg:text-[100px] "
        }`}
      >
        {children}
      </div>
      <div className="h-10 bg-[url('/line2.png')] bg-cover md:h-[50px]"></div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};
