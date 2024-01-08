"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Download() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="download"
      className="mt-12 scroll-mt-[80px] px-5 md:mt-20 md:px-[30px]"
    >
      <div className="relative mx-auto flex w-full max-w-[1380px] overflow-hidden rounded-[20px] bg-white bg-[linear-gradient(101deg,_rgba(202,_235,_251,_0.20)_17.3%,_rgba(198,_214,_255,_0.20)_84.95%)] max-xl:gap-10 max-lg:justify-center">
        <div className="relative z-10 flex max-w-[488px] flex-1 flex-col items-center py-8 xl:ml-[123px]">
          <figure
            ref={animateRefs}
            className="rounded-[57px] [box-shadow:0px_2.767px_2.214px_0px_rgba(0,_0,_0,_0.01),_0px_6.65px_5.32px_0px_rgba(0,_0,_0,_0.02),_0px_12.522px_10.017px_0px_rgba(0,_0,_0,_0.01),_0px_22.336px_17.869px_0px_rgba(0,_0,_0,_0.02),_0px_41.778px_33.422px_0px_rgba(0,_0,_0,_0.03),_0px_100px_80px_0px_rgba(0,_0,_0,_0.04)]"
          >
            <img
              className="max-md:w-[180px]"
              src="/images/logo-knock.png"
              alt=""
            />
          </figure>
          <h4
            ref={animateRefs}
            className="mt-6 text-center text-[20px] font-black leading-relaxed md:mt-10 md:text-[32px]"
          >
            完全無料
            <br />
            匿名で安全なチャットルームを
            <br />
            今すぐダウンロード
          </h4>
          <div
            ref={animateRefs}
            className="mt-5 flex flex-wrap justify-center gap-4 md:mt-8 md:gap-10"
          >
            <a
              href="https://apps.apple.com/jp/app/diver-knock/id6450264436"
              target="_blank"
            >
              <img
                className="max-md:w-[180px]"
                src="/images/btn-app-store.png"
                alt="App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.talk.flutter_project&pcampaignid=web_share"
              target="_blank"
            >
              <img
                className="max-md:w-[180px]"
                src="/images/btn-google-play.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>
        <figure
          ref={animateRefs}
          className="absolute bottom-0 right-0 top-0 max-lg:hidden "
        >
          <img
            className="h-full object-fill"
            src="/images/image-knock.png"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
}
