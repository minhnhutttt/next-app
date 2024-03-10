"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function Advantages() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="advantages"
      className="relative overflow-hidden max-md:pb-0 max-[1380px]:pb-[16vw]"
    >
      <figure
          ref={animateRefs}
          className="absolute bottom-0 right-0 z-10 max-[1440px]:w-[27.708vw] max-md:w-[180px]"
        >
          <img src="/images/image-advantages.png" alt="" />
          <p className="absolute md:text-[14px] text-[10px] font-bold text-white bottom-2 right-4">©諏訪原寛幸／七大陸</p>
        </figure>
      <div className="relative px-5 pb-12 pt-[60px] md:pb-[84px] md:pt-[100px]">
        <figure className="absolute top-8 md:top-[70px] z-10 md:left-[66%] left-[50%] w-[400px] md:w-[803px]">
          <img className="" src="/images/deco-01.png" alt="" />
        </figure>
        <figure className="absolute bottom-8 md:bottom-[20px] z-10 md:right-[67%] right-[60%] w-[300px] md:w-[597px]">
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
                  <div className="mx-auto flex w-full max-w-[540px] flex-wrap justify-center gap-4 md:gap-y-7 md:gap-x-5">
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
            <div className="flex max-md:flex-wrap justify-center md:gap-12 gap-16 mt-24 md:mt-[124px]">
              <div className="flex justify-end w-full md:w-1/2">
                <div className="relative flex flex-col items-center justify-center p-5 w-full md:w-[290px] lg:w-[350px] md:min-h-[330px] min-h-[290px] bg-[#FFE8E8] border-y-[10px] border-[#D80000]">
                  <div className="absolute top-[-50px] md:top-[-75px] md:left-[-60px] left-[-36px] bg-[url('/images/bubble.png')] bg-cover aspect-[161/169] w-[110px] md:w-[161px] font-bold text-center flex items-center justify-center">
                    <p className="md:text-[24px] text-[16px] leading-tight">
                      月額費用 <br />
                      <span className="md:text-[32px] text-[20px]">無し!!</span>
                    </p>
                  </div>
                  <p className="text-center md:text-[24px] text-[16px] font-bold">買い切り型</p>
                  <div className="w-full max-w-[300px] md:max-w-[240px] mx-auto mt-5">
                    <p className="md:text-[16px] text-[13px] font-medium">購入したオンラインストレージは ずっと使い放題!</p>
                    <span className="block my-4 border border-black border-dashed"></span>
                    <p className="md:text-[16px] text-[13px] font-medium">購入したオンラインストレージは ずっと使い放題!</p>
                  </div>
                </div>
              </div>
              <div className="flex md:w-1/2 md:pl-[44px] w-full">
                <div className="relative flex flex-col items-center justify-center p-5 w-full md:w-[290px] lg:w-[350px] md:min-h-[330px] min-h-[290px] bg-[#FFE8E8] border-y-[10px] border-[#D80000]">
                  <div className="absolute top-[-50px] md:top-[-75px] md:left-[-60px] left-[-36px] bg-[url('/images/bubble.png')] bg-cover aspect-[161/169] w-[110px] md:w-[161px] font-bold text-center flex items-center justify-center">
                    <p className="md:text-[24px] text-[16px] leading-tight">
                    解約手続 <br />
                      <span className="md:text-[32px] text-[20px]">不要!!</span>
                    </p>
                  </div>
                  <p className="text-center md:text-[24px] text-[16px] font-bold">契約不要</p>
                  <div className="w-full max-w-[300px] md:max-w-[240px] mx-auto mt-5">
                    <p className="md:text-[16px] text-[13px] font-medium">個人情報登録は不要で、 オンラインなのにUSBメモリと 同じ感覚で使える!</p>
                    <span className="block my-4 border border-black border-dashed"></span>
                    <p className="md:text-[16px] text-[13px] font-medium">保存中のデータが不要になったら、アカウントを捨てるか放置するだけ!</p>
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
