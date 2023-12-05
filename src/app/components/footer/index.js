import Link from "next/link";
import PropTypes from "prop-types";

function MenuItem({ link, children }) {
    return (
      <li className="lg:border-l border-black lg:last-of-type:border-r lg:h-[60px]">
        <a
          className="md:text-[14px] text-[13px] text-center font-medium transition duration-300 hover:opacity-75 flex h-full items-center justify-center max-lg:py-3 md:px-5 lg:px-6 xl:px-[30px]"
          href={link}
        >
          {children}
        </a>
      </li>
    );
  }
  
  MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };


export default function Footer() {
  return (
    <div className="bg-[#EBEBEB] pb-5 md:pb-9 pt-10 md:pt-[74px]">
        <div className="w-full max-w-[920px] mx-auto px-5">
            <Link href="/" className="flex items-center justify-center">
                <img className="max-w-[140px] md:max-w-[180px] lg:max-w-[222px]" src="/images/logo.png" alt="NFT MAP" />
            </Link>
            <div className="flex items-center mt-4 mb-11 max-lg:flex-col">
                <ul className="grid md:flex max-md:grid-cols-2">
                    <MenuItem link="#about">ABOUT</MenuItem>
                    <MenuItem link="#enjoy">楽しみ方</MenuItem>
                    <MenuItem link="#scene">ご利用シーン</MenuItem>
                    <MenuItem link="#howTo">使い方</MenuItem>
                    <MenuItem link="#shop">店舗一覧</MenuItem>
                    <MenuItem link="#faq">FAQ</MenuItem>
                    <MenuItem link="#">プライバシーポリシー</MenuItem>
                </ul>
            </div>
            <p className="text-center md:text-[14px] text-[12px]">
            Copyright © 2023 NFT Map.
            </p>
        </div>
    </div>
  )
}
