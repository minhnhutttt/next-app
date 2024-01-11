"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const steps = [
  {
    id: 1,
    text: <>商品のご注文</>,
  },
  {
    id: 2,
    text: <>ご住所・支払い方法のご入力</>,
  },
  {
    id: 3,
    text: <>ご注文確定</>,
  },
  {
    id: 4,
    text: <>商品到着</>,
  },
];

export default function Flow() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="flow" className="px-5 py-10 md:py-20">
      <SectionTitle>ご利用の流れ</SectionTitle>
      <div className="mx-auto mt-10 flex w-full max-w-[400px] flex-col gap-8 md:mt-20 md:max-w-[700px] md:gap-12">
        {steps.map(({ id, text }) => (
          <div
            ref={animateRefs}
            key={id}
            className="flex items-center bg-white/90 px-5 py-3 pr-[60px] [filter:drop-shadow(0px_4px_10px_rgba(0,_0,_0,_0.30))] after:absolute after:left-1/2 after:top-full after:h-[16px] after:w-[20px] after:-translate-x-1/2 after:bg-[url('/images/step-path.png')] after:bg-cover md:pr-[88px] md:after:h-[27px] md:after:w-[34px]"
          >
            <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full border-4 border-[#D80000] md:h-[88px] md:w-[88px] md:border-[7px]">
              <span className="text-[12px] font-bold leading-none tracking-widest md:text-[16px]">
                STEP
              </span>
              <span className="text-[20px] font-bold leading-none md:text-[32px]">
                {id}
              </span>
            </div>
            <div className="flex-1 px-2 text-center text-[18px] font-bold tracking-wider md:text-[28px]">
              {text}
            </div>
          </div>
        ))}
      </div>
      <div
        ref={animateRefs}
        className="mx-auto mt-12 flex w-full max-w-[400px] items-center gap-5 max-md:flex-col md:mt-20 md:max-w-[1026px] md:gap-8"
      >
        <figure>
          <img
            src="/images/delivery.png"
            alt="ご注文から最短で商品をお届けいたします。"
          />
        </figure>
        <div className="flex-1">
          <h6 className="text-[15px] font-bold md:text-[22px]">
            ご注文から最短で商品をお届けいたします
          </h6>
          <p className="mt-4 text-[13px] md:text-[18px]">
            ヤマト運輸の宅配便コンパクトで、ご自宅にお届けいたします。商品はユーザーガイドも同梱されておりますので、お手元に商品が届きましたら商品をご確認ください。
          </p>
        </div>
      </div>
    </div>
  );
}
