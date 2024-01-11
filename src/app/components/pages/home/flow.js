"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const steps = [
    {
        id: 1,
        text: <>商品のご注文</>
    },
    {
        id: 2,
        text: <>ご住所・支払い方法のご入力</>
    },
    {
        id: 3,
        text: <>ご注文確定</>
    },
    {
        id: 4,
        text: <>商品到着</>
    },
];

export default function Flow() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div id="flow" className="py-10 md:py-20 px-5">
            <SectionTitle>ご利用の流れ</SectionTitle>
            <div className="flex flex-col w-full md:max-w-[700px] max-w-[400px] mx-auto mt-10 md:mt-20 gap-8 md:gap-12">
                {steps.map(({ id, text }) => (
                    <div ref={animateRefs} key={id} className="flex items-center bg-white/90 px-5 py-3 [filter:drop-shadow(0px_4px_10px_rgba(0,_0,_0,_0.30))] after:absolute after:bg-[url('/images/step-path.png')] md:after:w-[34px] after:w-[20px] md:after:h-[27px] after:h-[16px] after:top-full after:bg-cover after:left-1/2 after:-translate-x-1/2 pr-[60px] md:pr-[88px]">
                        <div className="md:w-[88px] md:h-[88px] w-[60px] h-[60px] flex items-center justify-center flex-col border-4 md:border-[7px] border-[#D80000] rounded-full">
                            <span className="font-bold md:text-[16px] text-[12px] tracking-widest leading-none">STEP</span>
                            <span className="md:text-[32px] text-[20px] font-bold leading-none">{id}</span>
                        </div>
                        <div className="flex-1 md:text-[28px] text-[18px] tracking-wider font-bold text-center px-2">
                            {text}
                        </div>
                    </div>
                ))}
            </div>
            <div ref={animateRefs} className="flex max-md:flex-col items-center w-full md:max-w-[1026px] max-w-[400px] mx-auto gap-5 md:gap-8 mt-12 md:mt-20">
                <figure>
                    <img src="/images/delivery.png" alt="ご注文から最短で商品をお届けいたします。" />
                </figure>
                <div className="flex-1">
                    <h6 className="md:text-[22px] text-[15px] font-bold">ご注文から最短で商品をお届けいたします</h6>
                    <p className="md:text-[18px] text-[13px] mt-4">
                    ヤマト運輸の宅配便コンパクトで、ご自宅にお届けいたします。商品はユーザーガイドも同梱されておりますので、お手元に商品が届きましたら商品をご確認ください。
                    </p>
                </div>
            </div>
        </div>
    )
}
