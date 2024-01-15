"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function NFT() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="">
      <div className="bg-[url('/images/background-nft.jpg')] bg-[length:100%_100%] bg-no-repeat px-5 pb-[120px] pt-12 md:pb-[140px] md:pt-[80px] lg:pb-[200px] lg:pt-[120px]">
        <div className="mx-auto flex w-full gap-10 max-lg:flex-col max-lg:items-center max-lg:justify-center max-md:max-w-[440px] md:max-w-[1320px] md:pl-6 lg:gap-4">
          <div className="w-full max-w-[348px] pt-5">
            <div
              ref={animateRefs}
              className="relative z-10 mx-auto flex aspect-square w-[150px] flex-col items-center justify-center rounded-full border-[9px] border-[#FFC84D] bg-white text-center font-noto font-black leading-tight md:w-[189px]"
            >
              <span className="text-[24px] md:text-[34px]">今だけ</span>
              <span className="bg-[linear-gradient(to_top,_#FBC02D_40%,_transparent_40%)] text-[32px] md:text-[44px]">
                無料
              </span>
              <span className="text-[20px] tracking-[-0.3rem] md:text-[26px]">
                キャンペーン
              </span>
            </div>
            <div
              ref={animateRefs}
              className="-mt-8 rounded-[30px] bg-white px-[30px] py-10"
            >
              <h4 className="relative pb-5 text-center text-[20px] font-black before:absolute before:-left-[5px] before:bottom-0 before:h-[12px] before:w-full before:-skew-x-[50deg] before:bg-[repeating-linear-gradient(90deg,_transparent_0_3px,_#2A5297_8px_12px)] before:content-[''] md:text-[32px] md:before:-left-[10px] md:before:bg-[repeating-linear-gradient(90deg,_transparent_0_5px,_#2A5297_8px_16px)]">
                初めてのWEB3.0 <br />
                NFTを送ろう！
              </h4>
            </div>
          </div>
          <div className="flex-1">
            <div ref={animateRefs} className="font-bold text-center">
              <h4 className="text-[18px] md:text-[24px]">
                大切な人への贈り物として、この特別な包装を選んでみませんか？
              </h4>
              <p className="mt-2 text-[14px] md:text-[18px]">
                「見れればいいってだけじゃない!」
              </p>
            </div>
            <div
              ref={animateRefs}
              className="flex items-start justify-center gap-5 mt-8 max-md:flex-wrap md:mt-12 md:px-5"
            >
              <div className="flex w-[calc(50%-10px)] flex-col items-center justify-center md:w-1/3">
                <figure>
                  <img
                    className="max-md:w-[150px]"
                    src="/images/nft-ic-01.png"
                    alt="記念日のメッセージ"
                  />
                </figure>
                <div className="mt-3 md:mt-5">
                  <h5 className="text-center text-[15px] font-bold md:text-[18px]">
                    記念日のメッセージ
                  </h5>
                  <p className="mt-2 text-center text-[13px] tracking-tighter md:text-[16px]">
                    卒業式や入園式、誕生日や結婚記念日に
                  </p>
                </div>
              </div>
              <div className="flex w-[calc(50%-10px)] flex-col items-center justify-center md:w-1/3">
                <figure>
                  <img
                    className="max-md:w-[150px]"
                    src="/images/nft-ic-02.png"
                    alt="記念日のメッセージ"
                  />
                </figure>
                <div className="mt-3 md:mt-5">
                  <h5 className="text-center text-[15px] font-bold md:text-[18px]">
                    記念写真
                  </h5>
                  <p className="mt-2 text-center text-[13px] tracking-tighter md:text-[16px]">
                    家族写真や友達との思い出の写真など
                  </p>
                </div>
              </div>
              <div className="flex w-[calc(50%-10px)] flex-col items-center justify-center md:w-1/3">
                <figure>
                  <img
                    className="max-md:w-[150px]"
                    src="/images/nft-ic-03.png"
                    alt="記念日のメッセージ"
                  />
                </figure>
                <div className="mt-3 md:mt-5">
                  <h5 className="text-center text-[15px] font-bold md:text-[18px]">
                    来場者記念
                  </h5>
                  <p className="mt-2 text-center text-[13px] tracking-tighter md:text-[16px]">
                    イベントの来場者記念や、達成記念に
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div
          ref={animateRefs}
          className="relative mx-auto z-10 -mt-[88px] w-full max-w-[578px] rounded-[70px] bg-white p-8 after:absolute after:left-1/2 after:top-[calc(100%-12px)] after:h-7 after:w-8 after:-translate-x-1/2 after:bg-[url('/images/triangle.png')] after:bg-cover md:mt-[-119px] md:rounded-[170px] md:p-[60px] md:after:h-9 md:after:w-10"
        >
          <div className="border-y border-[#EA4335] py-5">
            <p className="text-[14px] font-medium leading-tight md:text-[18px]">
              NFTへと昇華したデータには、花言葉のような言葉にしない優しさも刻まれます。
            </p>
            <p className="mt-2 text-[12px] max-md:pr-4 md:text-[14px]">
              ※NFTとはWeb3.0技術を使った、改ざんができない特別な証明書です。
            </p>
          </div>
          <figure className="absolute bottom-4 right-1.5 md:bottom-9">
            <img className="max-md:w-[60px]" src="/images/flowers.png" alt="" />
          </figure>
        </div>
        <div
          ref={animateRefs}
          className="mx-auto w-full relative z-0 max-w-[912px] rounded-[20px] bg-[#00B900] px-6 pb-5 pt-8 -mt-1.5 md:-mt-2.5 md:px-11 md:pb-8 md:pt-[38px]"
        >
          <div
            ref={animateRefs}
            className="flex gap-6 max-md:flex-col-reverse max-md:items-center md:gap-11"
          >
            <div className="pt-3 md:pt-6">
              <h6 className="flex items-center justify-center text-center text-[22px] font-bold text-white before:mt-2 before:block before:h-[39px] before:w-[20px] before:bg-[url('/images/line.png')] before:bg-cover after:mt-2 after:block  after:h-[39px] after:w-[20px] after:scale-x-[-1] after:bg-[url('/images/line.png')] after:bg-cover md:text-[32px] md:before:mt-4 md:before:h-[55px] md:before:w-[28px] md:after:mt-4 md:after:h-[55px] md:after:w-[28px]">
                キャンペーンに参加する
              </h6>
              <div className="mx-auto mt-6 w-full max-w-[334px]">
                <Link
                  href="/"
                  className="ư-full relative mx-auto flex h-16 max-w-[240px] items-center justify-center rounded-[10px] bg-[#FBBC04] font-noto text-[24px] font-black duration-150 [box-shadow:0px_4px_0px_0px_#000] hover:opacity-75 md:h-20 md:max-w-[320px] md:text-[32px]"
                >
                  <span>申し込む</span>
                  <svg
                    className="absolute right-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                  >
                    <path
                      d="M15 7.64637C16.3333 8.41617 16.3333 10.3407 15 11.1105L3 18.0387C1.66667 18.8085 -8.94676e-07 17.8462 -8.27378e-07 16.3066L-2.21695e-07 2.45021C-1.54397e-07 0.910614 1.66667 -0.0516367 3 0.718164L15 7.64637Z"
                      fill="black"
                    />
                  </svg>
                </Link>
                <div className="mt-[30px] border-t border-white pt-[25px]">
                  <p className="text-[13px] font-bold leading-[1.3] text-white md:text-[16px]">
                    LINE登録後「キャンペーンに参加」をタップし、ガイダンスに従い「NFTにしたい写真や画像」と「ウォレットアドレス」を送ってください。
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="max-md:max-w-[300px]"
                src="/images/campaign.png"
                alt=""
              />
            </div>
          </div>
          <div
            ref={animateRefs}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <img src="/images/girl.png" alt="" />
            <span className="text-[15px] font-bold text-white md:text-[20px]">
              わからないことはLINEで何でもお問い合わせください。
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
