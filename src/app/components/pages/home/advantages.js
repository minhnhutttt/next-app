"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionSupport from "./components/sectionSupport";
import SectionTitle from "./components/sectionTitle";

export default function Advantages() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="advantages"
      className="relative overflow-hidden px-5 pb-12 pt-[60px] md:pb-[82px] md:pt-[100px]"
    >
      <figure
        ref={animateRefs}
        className="absolute bottom-0 right-0 z-10 max-[1440px]:w-[29.514vw] max-md:w-[180px]"
      >
        <img src="/images/image-advantages.png" alt="" />
      </figure>
      <div className="relative mx-auto w-full max-w-[1280px] rounded-[10px] bg-[#FFF9F2]/[0.8] px-5 pb-[120px] pt-10 md:pb-8 md:pt-20">
        <SectionTitle>ギガ二刀流Wi-Fiのメリット</SectionTitle>
        <div className="mx-auto mt-8 w-full max-w-[440px] md:mt-16 md:max-w-[1006px]">
          <div className="flex gap-7 max-md:flex-col max-md:items-center md:gap-[50px]">
            <div
              ref={animateRefs}
              className="w-full overflow-hidden rounded-[20px] md:w-[296px]"
            >
              <p className="flex h-[60px] items-center justify-center bg-[#848199] text-[16px] font-bold text-white md:h-[84px] md:text-[24px]">
                従来のWi-Fi契約
              </p>
              <div className="space-y-5 bg-white pb-6 pt-2.5 text-center text-[14px] font-medium md:pb-9 md:pt-3.5 md:text-[20px]">
                <p>長期契約の縛り</p>
                <p>高価な月額料金</p>
                <p>制限されたデータ帯域幅</p>
                <p>バッテリー寿命の短さ</p>
                <p>契約の解除が困難</p>
              </div>
            </div>
            <div
              ref={animateRefs}
              className="flex flex-1 flex-col overflow-hidden rounded-[20px]"
            >
              <p className="flex h-[60px] items-center justify-center bg-black text-center text-[20px] font-bold text-white md:h-[84px] md:text-[32px]">
                ギガ二刀流Wi-Fi契約
              </p>
              <div className="flex-1 bg-[#D80000] px-2 py-6 md:px-5 md:py-10">
                <div className="mx-auto flex w-full max-w-[455px] flex-wrap justify-center gap-3 md:gap-5">
                  <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                    契約不要
                  </p>
                  <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                    審査無し
                  </p>
                  <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                    月額0円
                  </p>
                  <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                    契約期間無し
                  </p>
                  <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                    365日有効
                  </p>
                  <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                    バッテリー大容量
                  </p>
                  <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                    ストレージ付き
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-b border-black pb-6 md:mt-16 md:pb-10">
            <SectionSupport />
          </div>
          <div className="relative z-10 py-10">
            <div
              ref={animateRefs}
              className="flex items-center justify-center gap-8 md:gap-24"
            >
              <figure>
                <img
                  src="/images/image-expiration-date.png"
                  alt="買取ギガ有効期限"
                />
              </figure>
              <figure>
                <img src="/images/image-model.png" alt="" />
              </figure>
            </div>
            <div
              ref={animateRefs}
              className="mx-auto mt-12 w-[70vw] md:w-[50vw] min-[1441px]:w-full min-[1441px]:max-w-[757px]"
            >
              <h5 className="text-center text-[16px] font-bold md:text-[24px]">
                ご契約開始日から１年間(365日)ご利用いただけます。
              </h5>
              <div className="flex justify-center">
                <p className="relative mt-6 text-[13px] font-medium leading-[1.6] md:left-[-16px] md:text-[18px]">
                  従来のポケットWi-Fiは、1ヶ月でギガは消滅し翌月繰越ができず、余りギガ数が無駄になってしまいますが、ギガ二刀流Wi-Fiの場合、チャージ制ですので、未使用のデータ容量は、次の月に持ち越すことができます。そのため、月々大量のデータを使用しない方にとって、ギガ二刀流WiFiは、使いたい時に使用でき色々なシーンでご利用いただけます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
