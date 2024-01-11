"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const communicationCharge = [
  {
    id: 1,
    capacity: "/images/price-100gb.png",
    price: "6,480",
  },
  {
    id: 2,
    capacity: "/images/price-60gb.png",
    price: "4,980",
  },
  {
    id: 3,
    capacity: "/images/price-30gb.png",
    price: "3,280",
  },
  {
    id: 4,
    capacity: "/images/price-20gb.png",
    price: "2,880",
  },
  {
    id: 5,
    capacity: "/images/price-10gb.png",
    price: "1,480",
  },
  {
    id: 6,
    capacity: "/images/price-1gb.png",
    price: "980",
  },
];

const storageCharge = [
  {
    id: 1,
    capacity: "/images/price-200gb.png",
    price: "15,000",
  },
  {
    id: 2,
    capacity: "/images/price-2tb.png",
    price: "45,000",
  },
];
export default function Price() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="relative bg-[url('/images/background-price.png')] bg-cover px-5 pb-[320px] pt-10 md:pb-[82px] md:pt-20">
      <figure ref={animateRefs} className="absolute bottom-0 left-0">
        <img
          className="max-[1439px]:w-[23.542vw] max-md:w-[140px]"
          src="/images/image-price.png"
          alt=""
        />
      </figure>
      <div className="mx-auto max-[1439px]:w-[70vw] max-md:w-full max-md:max-w-[440px] min-[1440px]:w-full min-[1440px]:max-w-[1100px]">
        <SectionTitle>追加チャージ価格</SectionTitle>
        <div className="mt-12 space-y-3 md:mt-20">
          <div className="rounded-[20px] bg-black/50 pb-5 pt-8 md:pb-9 md:pt-12">
            <h5
              ref={animateRefs}
              className="text-center text-[24px] font-black text-white md:text-[36px]"
            >
              通信チャージ
            </h5>
            <div
              ref={animateRefs}
              className="mt-7 flex flex-wrap justify-center gap-x-3 gap-y-4 px-4 md:gap-x-5 md:gap-y-7 md:px-9 lg:px-[57px]"
            >
              {communicationCharge.map(({ id, capacity, price }) => (
                <div
                  key={id}
                  className="flex items-center gap-2 rounded-[5px] border-2 border-black bg-white px-4 py-3 max-md:w-full max-md:basis-[280px] max-md:justify-center md:gap-3 xl:gap-5 xl:px-5"
                >
                  <div className="max-md:flex max-md:w-1/2 max-md:justify-end">
                    <img
                      className="max-lg:h-6 max-md:h-5"
                      src={capacity}
                      alt=""
                    />
                  </div>
                  <span className="h-8 w-px bg-black lg:h-11"></span>
                  <p className="text-[18px] font-bold max-md:w-1/2 md:text-[22px] lg:text-[34px]">
                    ¥ {price}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[20px] bg-black/50 pb-5 pt-5 md:pb-9 md:pt-8">
            <h5
              ref={animateRefs}
              className="text-center text-[24px] font-black text-white md:text-[36px]"
            >
              ストレージチャージ
            </h5>
            <div
              ref={animateRefs}
              className="mt-7 flex flex-wrap justify-center gap-x-3 gap-y-4 px-4 md:gap-x-5 md:gap-y-7 md:px-9 lg:px-[57px]"
            >
              {storageCharge.map(({ id, capacity, price }) => (
                <div
                  key={id}
                  className="flex items-center gap-2 rounded-[5px] border-2 border-black bg-white px-4 py-3 max-md:w-full max-md:basis-[280px] max-md:justify-center md:gap-3 xl:gap-5 xl:px-5"
                >
                  <div className="max-md:flex max-md:w-1/2 max-md:justify-end">
                    <img
                      className="max-lg:h-6 max-md:h-5"
                      src={capacity}
                      alt=""
                    />
                  </div>
                  <span className="h-8 w-px bg-black lg:h-11"></span>
                  <p className="text-[18px] font-bold max-md:w-1/2 md:text-[22px] lg:text-[34px]">
                    ¥ {price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
