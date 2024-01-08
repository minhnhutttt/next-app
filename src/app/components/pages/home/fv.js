"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function FV() {
  const animateRefs = useScrollAnimation("fadeUp");
  const animate3Refs = useScrollAnimation("fadeUp", 0.3);
  return (
    <div className="mt-6 px-5 md:px-[30px]">
      <div className="mx-auto w-full max-w-[1380px]  rounded-[20px] bg-white px-5 py-5 md:py-[40px] lg:py-[85px]">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between max-md:flex-col-reverse">
          <div className="space-y-5 max-md:py-6 md:space-y-7 xl:mt-[-50px]">
            <div ref={animateRefs} className="font-black">
              <p className="px-3 text-[18px] leading-none md:text-[24px]">
                プライバシー
              </p>
              <h1 className="inline-block break-keep bg-[linear-gradient(to_top,_#FBC02D_40%,_transparent_40%)] px-3 text-[30px] leading-tight tracking-widest md:text-[50px] xl:text-[80px]">
                秘密
                <span className="text-[32px] md:text-[40px] xl:text-[66px]">
                  が
                </span>
                守
                <span className="text-[32px] md:text-[40px] xl:text-[66px]">
                  られる
                </span>
              </h1>
            </div>
            <div
              ref={animate3Refs}
              className="ml-6 font-black md:ml-10 lg:ml-16"
            >
              <p className="px-3 text-[18px] leading-none md:text-[24px]">
                チャットルーム
              </p>
              <h1 className="inline-block break-keep px-3 text-[30px] leading-tight tracking-widest md:text-[50px] xl:text-[80px]">
                部屋へようこそ
              </h1>
            </div>
          </div>
          <figure ref={animateRefs} className="max-md:max-w-[400px]">
            <img src="/images/fv.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}
