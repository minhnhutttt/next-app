import Link from "next/link";

export default function HomeCart() {
  return (
    <div className="my-16 px-5 md:mb-[160px] md:mt-[170px]">
      <div className="relative mx-auto flex w-full max-w-[1095px] items-center gap-10 rounded-[30px] bg-[#0055A3] py-8 pl-[3%] pr-[4.28%] shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] max-lg:flex-wrap lg:py-3.5">
        <div className="flex items-center">
          <div className="mr-2 md:mr-4">
            <img className="max-md:max-w-[110px]" src="/logo-d.png" alt="" />
          </div>
          <div className="flex-1">
            <h5 className="text-[24px] font-bold tracking-[-0.04em] text-white md:text-[48px]">
              Original NFC tag
            </h5>
            <p className="mt-2 text-[14px] leading-[1.4] text-white md:text-[18px]">
              Compact seal type that can be easily attached to any shaped
              location.Durable NFC tag with original logo.
            </p>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Link
            href="/"
            className="flex h-[55px] w-[280px] items-center justify-center gap-3 rounded-[35px] bg-white text-[20px] font-bold text-[#0055A3] md:h-[70px] md:text-[24px]"
          >
            <img className="max-md:w-[24px]" src="/icon-cart.svg" alt="" />
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
