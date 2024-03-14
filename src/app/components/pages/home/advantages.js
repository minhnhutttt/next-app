"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function Advantages() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="advantages"
      className="relative overflow-hidden max-[1380px]:pb-[16vw] max-md:pb-0"
    >
      <figure
        ref={animateRefs}
        className="absolute bottom-0 right-0 z-10 max-[1440px]:w-[27.708vw] max-md:w-[180px]"
      >
        <img src="/images/image-advantages.png" alt="" />
        <p className="absolute bottom-2 right-4 text-[10px] font-bold text-white md:text-[14px]">
          ©諏訪原寛幸／七大陸
        </p>
      </figure>
      <div className="relative px-5 pb-12 pt-[60px] md:pb-[84px] md:pt-[100px]">
        <figure className="absolute left-[50%] top-8 z-10 w-[400px] md:left-[66%] md:top-[70px] md:w-[803px]">
          <img className="" src="/images/deco-01.png" alt="" />
        </figure>
        <figure className="absolute bottom-8 right-[60%] z-10 w-[300px] md:bottom-[20px] md:right-[67%] md:w-[597px]">
          <img className="" src="/images/deco-02.png" alt="" />
        </figure>
        <div className="relative mx-auto w-full max-w-[1280px] rounded-[10px] bg-[#FFF9F2]/[0.8] px-5 pb-[120px] pt-16 md:pb-[96px] md:pt-20">
          <SectionTitle>ギガ100年ストレージのメリット</SectionTitle>
          <div className="mx-auto mt-8 w-full max-w-[440px] md:mt-[74px] md:max-w-[980px]">
            <div className="flex gap-6 max-md:flex-col max-md:items-center md:gap-[20px]">
              <div
                ref={animateRefs}
                className="w-full overflow-hidden rounded-[20px] md:w-[296px]"
              >
                <p className="flex h-[60px] items-center justify-center bg-[#848199] text-[16px] font-bold text-white md:h-[84px] md:text-[24px]">
                  従来のストレージ契約
                </p>
                <div className="space-y-7 bg-white pb-6 pt-5 text-center text-[14px] font-medium md:pb-9 md:pt-8 md:text-[20px]">
                  <p>契約までが大変</p>
                  <p>月額料金での利用</p>
                  <p>契約の解除が困難</p>
                  <p>他社への乗り換えが困難</p>
                </div>
              </div>
              <div
                ref={animateRefs}
                className="flex flex-1 flex-col overflow-hidden rounded-[20px] [box-shadow:0px_42px_34px_0px_rgba(177,_56,_56,_0.20)] "
              >
                <p className="flex h-[60px] items-center justify-center bg-black text-center text-[20px] font-bold text-white md:h-[84px] md:text-[32px]">
                  ギガ100年ストレージ契約
                </p>
                <div className="flex-1 bg-[#D80000] px-2 py-6 md:px-5 md:py-8">
                  <div className="mx-auto flex w-full max-w-[540px] flex-wrap justify-center gap-4 md:gap-x-5 md:gap-y-7">
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
                      契約期間100年
                    </p>
                    <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                      データが暗号化され安全
                    </p>
                    <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                      有効期限100年
                    </p>
                    <p className="rounded-[5px] bg-white px-3 py-1.5 text-[14px] font-bold tracking-[0.18em] md:px-5 md:py-2.5 md:text-[20px]">
                      購入した分は使い放題
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={animateRefs} className="opacity-0 mt-24 flex justify-center gap-16 max-md:flex-wrap md:mt-[124px] md:gap-12">
              <div className="flex justify-end w-full md:w-1/2">
                <div className="relative flex min-h-[290px] w-full flex-col items-center justify-center border-y-[10px] border-[#D80000] bg-[#FFE8E8] p-5 md:min-h-[330px] md:w-[290px] lg:w-[350px]">
                  <div className="absolute left-[-36px] top-[-50px] flex aspect-[161/169] w-[110px] items-center justify-center bg-[url('/images/bubble.png')] bg-cover text-center font-bold md:left-[-60px] md:top-[-75px] md:w-[161px]">
                    <p className="text-[16px] leading-tight md:text-[24px]">
                      月額費用 <br />
                      <span className="text-[20px] md:text-[32px]">無し!!</span>
                    </p>
                  </div>
                  <p className="text-center text-[16px] font-bold md:text-[24px]">
                    買い切り型
                  </p>
                  <div className="mx-auto mt-5 w-full max-w-[300px] md:max-w-[240px]">
                    <p className="text-[13px] font-medium md:text-[16px]">
                      購入したオンラインストレージは <span className="bg-[linear-gradient(to_top,_#FAFF00_50%,_transparent_50%)]">ずっと使い放題!</span>
                    </p>
                    <span className="block my-4 border border-black border-dashed"></span>
                    <p className="text-[13px] font-medium md:text-[16px]">
                      足りなくなったらギガ保存容量の追加も可能!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full md:w-1/2 md:pl-[44px]">
                <div className="relative flex min-h-[290px] w-full flex-col items-center justify-center border-y-[10px] border-[#D80000] bg-[#FFE8E8] p-5 md:min-h-[330px] md:w-[290px] lg:w-[350px]">
                  <div className="absolute left-[-36px] top-[-50px] flex aspect-[161/169] w-[110px] items-center justify-center bg-[url('/images/bubble.png')] bg-cover text-center font-bold md:left-[-60px] md:top-[-75px] md:w-[161px]">
                    <p className="text-[16px] leading-tight md:text-[24px]">
                      解約手続 <br />
                      <span className="text-[20px] md:text-[32px]">不要!!</span>
                    </p>
                  </div>
                  <p className="text-center text-[16px] font-bold md:text-[24px]">
                    契約不要
                  </p>
                  <div className="mx-auto mt-5 w-full max-w-[300px] md:max-w-[240px]">
                    <p className="text-[13px] font-medium md:text-[16px]">
                      個人情報登録は不要で、 オンラインなのにUSBメモリと
                      同じ感覚で使える!
                    </p>
                    <span className="block my-4 border border-black border-dashed"></span>
                    <p className="text-[13px] font-medium md:text-[16px]">
                      保存中のデータが不要になったら、アカウントを捨てるか放置するだけ!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
