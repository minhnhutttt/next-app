import Link from "next/link";
const links = [
    {
      id: 1,
      link: "#features",
      text: "特徴"
    },
    {
        id: 2,
        link: "#advantages",
        text: "メリット"
    },
    {
        id: 3,
        link: "#product",
        text: "商品紹介"
    },
    {
        id: 4,
        link: "#plan",
        text: "おすすめプラン"
    },
    {
        id: 5,
        link: "#flow",
        text: "ご利用の流れ"
    },
    {
        id: 6,
        link: "#faq",
        text: "FAQ"
    },
  ];
export default function Footer() {
  return (
    <footer className="bg-[#000] px-6 py-12 md:pb-[50px] md:pt-[90px]">
      <div className="mx-auto mb-8 md:mb-14 w-full md:max-w-[926px] max-w-[400px]">
        <div className="flex justify-center w-full">
          <Link
            href="/"
            className="duration-150 hover:opacity-75"
          >
            <img
              className="max-md:w-[200px]"
              src="/images/giga-wifi-white.png"
              alt="ギガ二刀流Wi-Fi"
            />
          </Link>
        </div>
        <div className="mt-7">
            <ul className="flex justify-center items-center max-md:flex-wrap md:gap-2.5">
            {links.map(({ id, link, text }) => (
                <li key={id} className="max-md:w-1/2 max-md:px-2">
                    <Link href={link} smooth="true" className="md:text-[16px] text-[14px] block text-white font-bold py-3 px-2.5 duration-150 hover:opacity-75">{text}</Link>
                </li>
            ))}
            </ul>
        </div>
      </div>
      <p className="text-center text-[12px] text-white md:text-[16px]">
      Copyright © 2023 ギガ二刀流Wi-Fi.
      </p>
    </footer>
  );
}
