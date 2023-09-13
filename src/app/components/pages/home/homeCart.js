import Link from "next/link";

export default function HomeCart() {
    return (
        <div className="px-5 mt-[170px] mb-[160px]">
            <div className="relative bg-[#0055A3] w-full max-w-[1095px] mx-auto py-3.5 pl-[3%] pr-[4.28%] flex items-center shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] rounded-[30px]">
                <div className="flex items-center mr-10">
                    <div className="mr-4">
                        <img src="/logo-d.png" alt="" />
                    </div>
                    <div className="flex-1">
                        <h5 className="text-[48px] font-bold text-white tracking-[-0.04em]">Original NFC tag</h5>
                        <p className="text-[18px] leading-[1.4] text-white mt-2">
                            Compact seal type that can be easily attached to any shaped location.Durable NFC tag with original logo.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <Link href="/" className="text-[24px] w-[280px] h-[70px] font-bold text-[#0055A3] flex items-center justify-center gap-3 bg-white rounded-[35px]">
                        <img src="/icon-cart.svg" alt="" />
                        Add to cart
                    </Link>
                </div>
            </div>
        </div>
    );
  }
  