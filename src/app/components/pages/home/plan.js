"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function Plan() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="bg-white px-5 pt-[60px] pb-[70px] md:pb-[110px] md:pt-[100px] overflow-hidden">
      <div className="mx-auto w-full max-w-[400px] md:max-w-[1030px]">
        <h3 ref={animateRefs} className="text-center text-[18px] font-bold md:text-[42px]">
          料金プラン
        </h3>
        <p ref={animateRefs} className="mt-2 text-center text-[16px] font-bold md:text-[28px]">
          次世代USBのNESを<span className="text-[#FF3A14]">最安価格</span>
          でご提供！
        </p>
        <div className="mt-10 flex justify-center rounded-[26px] bg-white/90 px-5 [box-shadow:0px_4px_50px_0px_rgba(0,_0,_0,_0.10)] md:mt-[128px]">
          <div className="flex w-full justify-center gap-10 py-10 max-md:flex-col max-md:items-center md:max-w-[865px] md:py-11 lg:gap-20">
            <div ref={animateRefs} className="max-md:rounded-[26px] max-md:bg-white max-md:p-5 max-md:[box-shadow:0px_20px_34px_0px_rgba(0,_64,_158,_0.30)]">
              <div className="w-[207px] md:w-[180px] lg:w-[207px]">
                <p className="border-b border-[#22ABF3] py-3 text-center text-[18px] font-medium md:text-[24px]">
                  2GB Storage
                </p>
                <p className="mt-4 text-center text-[20px] font-bold md:text-[36px]">
                  1,100<span className="text-[16px] md:text-[28px]">円</span>
                </p>
                <ul className="my-4 space-y-5">
                  <li className="flex justify-center gap-2 text-[13px] font-bold md:text-[16px]">
                    <figure>
                      <img src="/images/check-circle.svg" alt="" />
                    </figure>
                    <p>1GBあたり550円</p>
                  </li>
                  <li className="flex justify-center gap-2 text-[13px] font-bold md:text-[16px]">
                    <figure>
                      <img src="/images/check-circle.svg" alt="" />
                    </figure>
                    <p>
                      画像：約408枚 <br />
                      <span className="text-[12px] font-medium md:text-[14px]">
                        (1200万画素の場合)
                      </span>
                    </p>
                  </li>
                </ul>
                <Link
                  href="/"
                  className="flex h-[45px] items-center justify-center rounded-3xl bg-[#22ABF3]/[0.6] text-[12px] font-bold duration-150 hover:opacity-50 md:text-[15px]"
                >
                  はじめる
                </Link>
              </div>
            </div>
            <div ref={animateRefs} className="rounded-[26px] border-2 border-[#22ABF3] bg-white px-5 pb-8 pt-6 [box-shadow:0px_20px_34px_0px_rgba(0,_64,_158,_0.30)] md:mt-[-110px] md:w-[292px] md:border-4 md:px-[30px] md:pb-[46px] md:pt-10">
              <div className="mx-auto w-[232px] md:w-[212px] lg:w-[232px]">
                <div className="flex justify-center mb-2">
                  <p className="relative rounded-xl bg-[#FF3A14] px-3 py-1 text-[12px] font-bold leading-snug tracking-wider text-white md:text-[14px]">
                    <span>迷ったらこれ！</span>
                    <svg
                      className="absolute -translate-x-1/2 left-1/2 top-full"
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      fill="none"
                    >
                      <path
                        d="M4 6L0.535899 -6.52533e-07L7.4641 -4.68497e-08L4 6Z"
                        fill="#FF3A14"
                      />
                    </svg>
                  </p>
                </div>
                <p className="border-b border-[#22ABF3] py-3 text-center text-[18px] font-medium md:text-[24px]">
                  100GB Storage
                </p>
                <p className="mt-4 text-center text-[20px] font-bold md:text-[36px]">
                  6,820<span className="text-[16px] md:text-[28px]">円</span>
                </p>
                <ul className="my-4 space-y-5">
                  <li className="flex justify-center gap-2 text-[13px] font-bold md:text-[16px]">
                    <figure>
                      <img src="/images/check-circle.svg" alt="" />
                    </figure>
                    <p>1GBあたり68円</p>
                  </li>
                  <li className="flex justify-center gap-2 text-[13px] font-bold md:text-[16px]">
                    <figure>
                      <img src="/images/check-circle.svg" alt="" />
                    </figure>
                    <p>
                      画像：約2.2万枚 <br />
                      <span className="text-[12px] font-medium md:text-[14px]">
                        (1200万画素の場合)
                      </span>
                    </p>
                  </li>
                </ul>
                <Link
                  href="/"
                  className="flex h-[45px] items-center justify-center rounded-3xl bg-[#22ABF3] text-[12px] font-bold duration-150 hover:opacity-50 md:text-[15px]"
                >
                  はじめる
                </Link>
              </div>
            </div>
            <div ref={animateRefs} className="max-md:rounded-[26px] max-md:bg-white max-md:p-5 max-md:[box-shadow:0px_20px_34px_0px_rgba(0,_64,_158,_0.30)]">
              <div className="w-[207px] md:w-[180px] lg:w-[207px]">
                <p className="border-b border-[#22ABF3] py-3 text-center text-[18px] font-medium md:text-[24px]">
                  500GB Storage
                </p>
                <p className="mt-4 text-center text-[20px] font-bold md:text-[36px]">
                  25,300<span className="text-[16px] md:text-[28px]">円</span>
                </p>
                <ul className="my-4 space-y-5">
                  <li className="flex justify-center gap-2 text-[13px] font-bold md:text-[16px]">
                    <figure>
                      <img src="/images/check-circle.svg" alt="" />
                    </figure>
                    <p>1GBあたり50円</p>
                  </li>
                  <li className="flex justify-center gap-2 text-[13px] font-bold md:text-[16px]">
                    <figure>
                      <img src="/images/check-circle.svg" alt="" />
                    </figure>
                    <p>
                      画像：約11.3万枚 <br />
                      <span className="text-[12px] font-medium md:text-[14px]">
                        (1200万画素の場合)
                      </span>
                    </p>
                  </li>
                </ul>
                <Link
                  href="/"
                  className="flex h-[45px] items-center justify-center rounded-3xl bg-[#22ABF3]/[0.6] text-[12px] font-bold duration-150 hover:opacity-50 md:text-[15px]"
                >
                  はじめる
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
