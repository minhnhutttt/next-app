import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-end h-20 px-10 md:px-16">
        <Link
        href="/contact"
        className="block font-fredoka text-[18px] font-bold tracking-[0.2em]"
        >
        CONTACT
        </Link>
    </div>
  );
}
