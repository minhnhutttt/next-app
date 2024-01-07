import Link from "next/link";

export default function ButtonContact() {
  return (
    <Link
      href="/"
      className="flex h-[50px] w-full max-w-[200px] items-center justify-center gap-[5px] rounded-[50px] bg-[#22ABF3] text-[14px] font-medium text-white duration-150 hover:opacity-75 md:h-[64px] md:max-w-[250px] md:text-[16px]"
    >
      <svg
        className="h-4 w-4 md:h-6 md:w-6"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.46875 5.95312C0.28125 5.8125 0 5.95312 0 6.1875V15.75C0 17.0156 1.03125 18 2.25 18H21.75C23.0156 18 24 17.0156 24 15.75V6.1875C24 5.95312 23.7656 5.8125 23.5781 5.95312C22.5 6.79688 21.1406 7.82812 16.3594 11.2969C15.375 12 13.6875 13.5469 12 13.5469C10.3594 13.5469 8.625 12 7.6875 11.2969C2.90625 7.82812 1.54688 6.79688 0.46875 5.95312ZM12 12C13.125 12.0469 14.6719 10.6406 15.4688 10.0781C21.7031 5.57812 22.1719 5.15625 23.5781 4.03125C23.8594 3.84375 24 3.51562 24 3.14062V2.25C24 1.03125 23.0156 0 21.75 0H2.25C1.03125 0 0 1.03125 0 2.25V3.14062C0 3.51562 0.1875 3.84375 0.46875 4.03125C1.875 5.15625 2.34375 5.57812 8.57812 10.0781C9.375 10.6406 10.9219 12.0469 12 12Z"
          fill="white"
        />
      </svg>
      <span>メールでお申込み</span>
    </Link>
  );
}
