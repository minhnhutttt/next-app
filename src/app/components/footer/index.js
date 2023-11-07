import Link from "next/link";
import PropTypes from "prop-types";

function MenuItem({ link, children }) {
  return (
    <li>
      <Link
        className="block px-4 py-2 md:py-[5px] text-[16px] font-medium text-white md:px-5 md:text-[18px] max-md:text-center"
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Footer() {
  return (
    <div className="bg-black px-5 pb-5 pt-10 md:pt-[5%]">
      <div className="mx-auto mb-16 flex flex-col w-full max-w-[964px] items-center justify-between gap-12 max-md:flex-col md:mb-20 md:gap-[40px]">
        <Link href="/">
          <img className="max-md:w-[200px]" src="/images/logo-footer.png" alt="" />
        </Link>
        <div className="flex flex-1 items-center justify-between gap-4 md:gap-8">
          <ul className="flex flex-wrap max-md:-ml-5 max-md:flex-col">
            <MenuItem link="#about">ABOUT</MenuItem>
            <MenuItem link="/">サービス</MenuItem>
            <MenuItem link="#guide">活用シーン</MenuItem>
            <MenuItem link="#flow">実施までの流れ</MenuItem>
            <MenuItem link="#how-to-use">使い方</MenuItem>
            <MenuItem link="/contact">お問い合わせ</MenuItem>
          </ul>
        </div>
      </div>
      <p className="text-center text-[12px] text-white md:text-[16px]">
      Copyright © 2023 推し活トレカシステム.
      </p>
    </div>
  );
}
