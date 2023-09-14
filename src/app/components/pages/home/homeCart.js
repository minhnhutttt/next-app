import Link from "next/link";

export default function HomeCart() {
    return (
        <div className="px-5 my-16 md:mt-[170px] md:mb-[160px]">
            <div className="relative bg-[#0055A3] w-full max-w-[1095px] gap-10 max-lg:flex-wrap mx-auto py-8 lg:py-3.5 pl-[3%] pr-[4.28%] flex items-center shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] rounded-[30px]">
                <div className="flex items-center">
                    <div className="mr-2 md:mr-4">
                        <img className="max-md:max-w-[110px]" src="/logo-d.png" alt="" />
                    </div>
                    <div className="flex-1">
                        <h5 className="text-[24px] md:text-[48px] font-bold text-white tracking-[-0.04em]">Original NFC tag</h5>
                        <p className="text-[14px] md:text-[18px] leading-[1.4] text-white mt-2">
                            Compact seal type that can be easily attached to any shaped location.Durable NFC tag with original logo.
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <Link href="/" className="text-[20px] md:text-[24px] w-[280px] h-[55px] md:h-[70px] font-bold text-[#0055A3] flex items-center justify-center gap-3 bg-white rounded-[35px]">
                        <img className="max-md:w-[24px]" src="/icon-cart.svg" alt="" />
                        Add to cart
                    </Link>
                </div>
            </div>
        </div>
    );
  }
  