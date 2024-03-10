"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const steps = [
  {
    id: 1,
    text: <>ご購入はこちらをクリック</>,
  },
  {
    id: 2,
    text: <>お好みのストレージ容量を選択</>,
  },
  {
    id: 3,
    text: <>必要事項ご入力・購入</>,
  },
  {
    id: 4,
    text: (
      <>
        メールにてウォレットアドレスを
        <br className="max-md:hidden" />
        確認させていただきます
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        DIVER Storageサイトへアクセスし
        <br className="max-md:hidden" />
        DIVER Walletをコネクトする
      </>
    ),
  },
];

export default function Flow() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="flow" className="px-5 py-10 md:pb-[128px] md:pt-[180px]">
      <SectionTitle>ご利用の流れ</SectionTitle>
      <div className="mx-auto mt-10 flex w-full max-w-[400px] flex-col gap-8 md:mt-20 md:max-w-[700px] md:gap-12">
        {steps.map(({ id, text }) => (
          <div
            ref={animateRefs}
            key={id}
            className="flex items-center bg-white/90 px-5 py-3  [filter:drop-shadow(0px_4px_10px_rgba(0,_0,_0,_0.30))] after:absolute after:left-1/2 after:top-full after:h-[16px] after:w-[20px] after:-translate-x-1/2 after:bg-[url('/images/step-path.png')] after:bg-cover  md:after:h-[27px] md:after:w-[34px]"
          >
            <div className="flex h-[60px] w-[60px] flex-col items-center justify-center rounded-full border-4 border-[#D80000] md:h-[88px] md:w-[88px] md:border-[7px]">
              <span className="text-[12px] font-bold leading-none tracking-widest md:text-[16px]">
                STEP
              </span>
              <span className="text-[20px] font-bold leading-none md:text-[32px]">
                {id}
              </span>
            </div>
            <div className="flex flex-1 justify-center px-2 text-[16px] font-bold leading-tight tracking-wider md:text-[28px]">
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
