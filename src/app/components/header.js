import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between px-5 md:h-[110px] md:px-[45px]">
      <Link
        href="/"
        className="font-dela text-[20px] text-black duration-200 hover:opacity-75 md:text-[42px]"
      >
        次世代チャット
      </Link>
    </header>
  );
}
