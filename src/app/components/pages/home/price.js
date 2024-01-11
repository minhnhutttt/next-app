"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const communicationCharge = [
    {
        id: 1,
        capacity: '/images/price-100gb.png',
        price: '6,480'
    },
    {
        id: 2,
        capacity: '/images/price-60gb.png',
        price: '4,980'
    },
    {
        id: 3,
        capacity: '/images/price-30gb.png',
        price: '3,280'
    },
    {
        id: 4,
        capacity: '/images/price-20gb.png',
        price: '2,880'
    },
    {
        id: 5,
        capacity: '/images/price-10gb.png',
        price: '1,480'
    },
    {
        id: 6,
        capacity: '/images/price-1gb.png',
        price: '980'
    },
];

const storageCharge = [
    {
        id: 1,
        capacity: '/images/price-200gb.png',
        price: '15,000'
    },
    {
        id: 2,
        capacity: '/images/price-2tb.png',
        price: '45,000'
    },
];
export default function Price() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="bg-[url('/images/background-price.png')] bg-cover pb-[320px] pt-10 md:pb-[82px] md:pt-20 px-5 relative">
            <figure ref={animateRefs} className="absolute left-0 bottom-0">
                <img className="max-md:w-[140px] max-[1439px]:w-[23.542vw]" src="/images/image-price.png" alt="" />
            </figure>
            <div className="min-[1440px]:w-full max-md:max-w-[440px] max-md:w-full max-[1439px]:w-[70vw] min-[1440px]:max-w-[1100px] mx-auto">
                <SectionTitle>追加チャージ価格</SectionTitle>
                <div className="mt-12 md:mt-20 space-y-3">
                    <div className="bg-black/50 rounded-[20px] md:pt-12 pt-8 pb-5 md:pb-9">
                        <h5 ref={animateRefs} className="text-center font-black md:text-[36px] text-[24px] text-white">通信チャージ</h5>
                        <div ref={animateRefs} className="flex flex-wrap justify-center px-4 md:px-9 lg:px-[57px] mt-7 gap-x-3 md:gap-x-5 gap-y-4 md:gap-y-7">
                            {communicationCharge.map(({ id, capacity, price }) => (
                                <div key={id} className="bg-white max-md:basis-[280px] max-md:w-full max-md:justify-center rounded-[5px] border-2 border-black gap-2 md:gap-3 xl:gap-5 flex items-center px-4 xl:px-5 py-3">
                                    <div className="max-md:w-1/2 max-md:flex max-md:justify-end">
                                        <img className="max-md:h-5 max-lg:h-6" src={capacity} alt="" />
                                    </div>
                                    <span className="w-px h-8 lg:h-11 bg-black"></span>
                                    <p className="max-md:w-1/2 lg:text-[34px] md:text-[22px] text-[18px] font-bold">¥ {price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-black/50 rounded-[20px] md:pt-8 pt-5 pb-5 md:pb-9">
                        <h5 ref={animateRefs} className="text-center font-black md:text-[36px] text-[24px] text-white">ストレージチャージ</h5>
                        <div ref={animateRefs} className="flex flex-wrap justify-center px-4 md:px-9 lg:px-[57px] mt-7 gap-x-3 md:gap-x-5 gap-y-4 md:gap-y-7">
                            {storageCharge.map(({ id, capacity, price }) => (
                                <div key={id} className="bg-white max-md:basis-[280px] max-md:w-full max-md:justify-center rounded-[5px] border-2 border-black gap-2 md:gap-3 xl:gap-5 flex items-center px-4 xl:px-5 py-3">
                                    <div className="max-md:w-1/2 max-md:flex max-md:justify-end">
                                        <img className="max-md:h-5 max-lg:h-6" src={capacity} alt="" />
                                    </div>
                                    <span className="w-px h-8 lg:h-11 bg-black"></span>
                                    <p className="max-md:w-1/2 lg:text-[34px] md:text-[22px] text-[18px] font-bold">¥ {price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  