import Link from "next/link";
const links = [
  {
    id: 1,
    link: "#features",
    text: "特徴",
  },
  {
    id: 2,
    link: "#advantages",
    text: "メリット",
  },
  {
    id: 3,
    link: "#price",
    text: "価格一覧",
  },
  {
    id: 4,
    link: "#flow",
    text: "ご利用の流れ",
  },
  {
    id: 5,
    link: "#faq",
    text: "FAQ",
  },
];
export default function Footer() {
  return (
    <footer className="bg-[#000] px-6 py-12 md:pb-[50px] md:pt-[90px]">
      <div className="mx-auto mb-8 w-full max-w-[400px] md:mb-10 md:max-w-[926px]">
        <div className="flex justify-center w-full">
          <Link href="/" className="duration-150 hover:opacity-75">
            <img
              className="max-md:w-[200px]"
              src="/images/logo-footer.png"
              alt="ギガ100年ストレージ"
            />
          </Link>
        </div>
        <div className="mt-5">
          <ul className="flex items-center justify-center max-md:flex-wrap md:gap-2.5">
            {links.map(({ id, link, text }) => (
              <li key={id} className="max-md:w-1/2 max-md:px-2">
                <Link
                  href={link}
                  smooth="true"
                  className="block px-2.5 py-3 text-[14px] font-bold text-white duration-150 hover:opacity-75 md:text-[16px]"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-[12px] text-white md:text-[16px]">
        Copyright © 2024 ギガ100年ストレージ.
      </p>
    </footer>
  );
}
