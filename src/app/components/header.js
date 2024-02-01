import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-end h-20 px-10 md:px-16">
      <Link
        href="https://lin.ee/6PgmBNE"
        target="_blank"
        className="block font-fredoka text-[18px] font-bold tracking-[0.2em] duration-150 hover:opacity-60"
      >
        CONTACT
      </Link>
    </div>
  );
}
