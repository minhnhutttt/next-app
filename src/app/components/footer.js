import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-5 pb-10 md:px-10">
      <div className="mx-auto flex w-full max-w-[400px] flex-wrap justify-between gap-5 pb-16 pt-[60px] md:max-w-[660px] md:pb-28 md:pt-[120px] lg:max-w-[1016px] lg:pl-14">
        <div className="max-lg:w-full">
          <a href="/" className="duration-150 hover:opacity-75">
            <p className="font-dela text-[36px] text-white md:text-[52px]">
              次世代スキャン
            </p>
          </a>
        </div>
        <ul className="mt-3 space-y-[20px] text-[15px] font-bold text-white md:space-y-[30px] md:text-[16px]">
          <li>
            <Link
              href="/#faq"
              smooth="true"
              className="block duration-150 hover:opacity-75"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/admin" className="block duration-150 hover:opacity-75">
              運営者
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="block duration-150 hover:opacity-75"
            >
              プライバシーポリシー
            </Link>
          </li>
        </ul>
        <div className="mt-3">
          <a
            href="https://lin.ee/6PgmBNE"
            target="_blank"
            className="flex h-[44px] w-[160px] items-center justify-center gap-2 rounded-[7px] bg-[#01B202] text-[13px] text-white duration-150 hover:opacity-75 md:h-[51px] md:w-[207px] md:text-[15px]"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6175 8.40672V11.5019C12.6175 11.5891 12.5303 11.6327 12.4431 11.6327H11.9636C11.92 11.6327 11.8764 11.5891 11.8328 11.5891L10.4378 9.67094V11.5019C10.4378 11.5891 10.3506 11.6327 10.307 11.6327H9.78392C9.69673 11.6327 9.65314 11.5891 9.65314 11.5019V8.40672C9.65314 8.31953 9.69673 8.27594 9.78392 8.27594H10.307C10.3506 8.27594 10.3942 8.27594 10.3942 8.31953L11.8328 10.2377V8.40672C11.8328 8.31953 11.8764 8.27594 11.9636 8.27594H12.4431C12.5303 8.23234 12.6175 8.31953 12.6175 8.40672ZM9.04282 8.23234C9.08642 8.23234 9.1736 8.31953 9.1736 8.40672V11.5019C9.1736 11.5891 9.08642 11.6327 9.04282 11.6327H8.5197C8.43251 11.6327 8.38892 11.5891 8.38892 11.5019V8.40672C8.38892 8.31953 8.43251 8.23234 8.5197 8.23234H9.04282ZM7.8222 10.848C7.90939 10.848 7.95298 10.9352 7.95298 10.9787V11.5019C7.95298 11.5455 7.90939 11.6327 7.8222 11.6327H5.81689C5.77329 11.6327 5.77329 11.5891 5.7297 11.5891C5.7297 11.5455 5.6861 11.5455 5.6861 11.5019V8.40672C5.6861 8.31953 5.77329 8.23234 5.81689 8.23234H6.34001C6.4272 8.23234 6.47079 8.31953 6.47079 8.40672V10.848H7.8222ZM15.2331 8.23234C15.2767 8.23234 15.3639 8.31953 15.3639 8.40672V8.88625C15.3639 8.97344 15.2767 9.01703 15.2331 9.01703H13.8817V9.54016H15.2331C15.2767 9.54016 15.3639 9.62734 15.3639 9.67094V10.1941C15.3639 10.2812 15.2767 10.3248 15.2331 10.3248H13.8817V10.848H15.2331C15.2767 10.848 15.3639 10.9352 15.3639 10.9787V11.5019C15.3639 11.5891 15.2767 11.6327 15.2331 11.6327H13.2278C13.1406 11.6327 13.097 11.5455 13.097 11.5019V8.40672C13.097 8.31953 13.1406 8.23234 13.2278 8.23234H15.2331ZM20.29 4.43969V16.8639C20.2464 18.8256 18.677 20.4386 16.7153 20.395H4.2911C2.32938 20.395 0.716416 18.8256 0.76001 16.8639V4.39609C0.76001 2.47797 2.32938 0.864999 4.2911 0.864999H16.7589C18.677 0.908592 20.29 2.47797 20.29 4.43969ZM17.5872 9.80172C17.5872 6.61937 14.4049 4.00375 10.4814 4.00375C6.55798 4.00375 3.37563 6.61937 3.37563 9.80172C3.37563 12.6353 5.90407 15.033 9.30439 15.4689C10.1327 15.6433 10.0455 15.9484 9.8711 17.0819C9.82751 17.2562 9.69673 17.7794 10.4814 17.4742C11.2225 17.1691 14.5792 15.0766 16.0614 13.3328C17.1077 12.1994 17.5872 11.0659 17.5872 9.80172Z"
                fill="white"
              />
            </svg>
            <span>LINEでお問い合わせ</span>
          </a>
        </div>
      </div>
      <div className="text-center font-lato text-[13px] text-white md:text-[14px]">
        Copyright © JISEDAI-S CAN
      </div>
    </footer>
  );
}
