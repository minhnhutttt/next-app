"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const communicationCharge = [
  {
    id: 1,
    capacity: "/images/price-2gb.png",
    price: "1,100",
  },
  {
    id: 2,
    capacity: "/images/price-100gb.png",
    price: "3,410",
  },
  {
    id: 3,
    capacity: "/images/price-500gb.png",
    price: "12,650",
  },
];

export default function Price() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="relative bg-[url('/images/background-price.png')] bg-cover px-5 pt-10 md:pt-20">
      <div className="w-full max-w-[1220px] mx-auto relative pb-[260px] md:pb-[140px]">
        <figure ref={animateRefs} className="absolute bottom-0 left-0">
          <img
            className="max-[1439px]:w-[22.014vw] max-md:w-[140px]"
            src="/images/image-price.png"
            alt=""
          />
          <p className="absolute md:text-[14px] text-[10px] font-bold text-white md:bottom-4 bottom-2 left-2 md:left-6 lg:left-14 z-10">©諏訪原寛幸／七大陸</p>
        </figure>
        <div className="mx-auto max-w-[440px] md:max-w-[840px]">
          <SectionTitle>追加チャージ価格</SectionTitle>
          <div className="mt-12 space-y-3 md:mt-20">
            <div className="rounded-[20px] bg-black/50 pb-5 pt-8 md:pb-5 md:pt-12">
              <h5
                ref={animateRefs}
                className="text-center text-[24px] font-black text-white md:text-[36px]"
              >
                ストレージチャージ
              </h5>
              <div
                ref={animateRefs}
                className="mt-7 flex flex-wrap justify-center gap-4 px-4 md:gap-5 md:px-[140px] lg:px-[57px]"
              >
                {communicationCharge.map(({ id, capacity, price }) => (
                  <div
                    key={id}
                    className="flex items-center gap-2 rounded-[5px] border-2 border-black bg-white px-4 py-3 max-md:w-full max-md:basis-[280px] max-md:justify-center md:gap-3 xl:gap-5 xl:px-5"
                  >
                    <div className="max-md:flex max-md:w-1/2 max-md:justify-end">
                      <img
                        className="max-md:h-5"
                        src={capacity}
                        alt=""
                      />
                    </div>
                    <span className="w-px h-8 bg-black lg:h-11"></span>
                    <p className="text-[18px] font-bold max-md:w-1/2 md:text-[34px]">
                      ¥ {price}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-right md:text-[14px] text-[12px] text-white pt-2 pr-2">※表示価格は、全て税込です。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
