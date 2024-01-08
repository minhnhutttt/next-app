"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import KnockItem from "./knockItem";

export default function Knock() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="mt-[84px]">
      <div
        ref={animateRefs}
        className="mb-[-40px] flex flex-col items-center justify-center md:mb-[-70px]"
      >
        <h3>
          <img
            className="max-md:w-[240px]"
            src="/images/welcome-to-knock.png"
            alt="Welcome To Knock"
          />
        </h3>
      </div>
      <div className="bg-[url('/images/bg-knock.png')] bg-cover px-5 pb-[54px] pt-16 md:pt-[90px]">
        <div className="mx-auto w-full max-w-[440px] md:max-w-[1280px]">
          <p
            ref={animateRefs}
            className="text-center text-[16px] font-black md:text-[22px]"
          >
            ノックを知る冒険にでよう！ <br />
            7つの魅力を知れば、ノックをすぐに使いたくなる！
          </p>
          <div className="relative mt-12 flex justify-center max-md:flex-col max-md:gap-7">
            <figure className="md:py-[144px]">
              <img
                className="max-md:hidden"
                src="/images/racing-road.png"
                alt=""
              />
            </figure>
            <img
              className="absolute bottom-0 left-0 right-0 top-0 h-full md:hidden"
              src="/images/racing-road-sp.png"
              alt=""
            />

            <img
              ref={animateRefs}
              src="/images/deco-racing-01.png"
              alt=""
              className="absolute left-[72%] top-[6%] w-[12%] md:left-[23%] md:top-[-1%] md:w-[6.09375%]"
            />
            <img
              ref={animateRefs}
              src="/images/deco-racing-02.png"
              alt=""
              className="absolute left-[24%] top-[26%] w-[16%] md:left-[11%] md:top-[40%] md:w-[8.828125%]"
            />
            <img
              ref={animateRefs}
              src="/images/deco-racing-03.png"
              alt=""
              className="absolute left-[80%] top-[36%] w-[13%] md:left-[76.5%] md:top-[17%] md:w-[6.25%]"
            />
            <img
              ref={animateRefs}
              src="/images/deco-racing-04.png"
              alt=""
              className="absolute left-[18%] top-[46%] w-[12%] md:left-[68%] md:top-[45%] md:w-[6.09375%]"
            />
            <img
              ref={animateRefs}
              src="/images/deco-racing-05.png"
              alt=""
              className="absolute left-[78%] top-[56%] w-[10%] md:left-[38.5%] md:top-[48%] md:w-[5.703125%]"
            />
            <img
              ref={animateRefs}
              src="/images/deco-racing-06.png"
              alt=""
              className="absolute left-[13%] top-[76%] w-[13%] md:left-[83.5%] md:top-[71%] md:w-[6.5625%]"
            />
            <img
              ref={animateRefs}
              src="/images/deco-racing-07.png"
              alt=""
              className="absolute left-[80%] top-[86%] w-[13%] md:left-[49%] md:top-[89%] md:w-[6.640625%]"
            />
            <div
              ref={animateRefs}
              className="left-0 z-10 w-full max-md:flex max-md:flex-col md:absolute md:w-1/4 md:pr-5"
            >
              <p className="font-racing text-[24px] leading-[0.8] md:text-[46px]">
                START!
              </p>
              <KnockItem number="1" title="個人情報の登録不要">
                氏名、メールアドレス、電話番号など登録なしで使える！匿名性が完全に守られます。
              </KnockItem>
            </div>
            <div
              ref={animateRefs}
              className="left-[25.5%] top-[7%] z-10 w-full max-md:flex max-md:flex-col max-md:items-end md:absolute md:w-1/4 md:pr-5"
            >
              <KnockItem number="2" title="使い方はとても簡単！">
                新たにやり方を覚える必要はありません！子どもでも今すぐ使用できます。
              </KnockItem>
            </div>
            <div
              ref={animateRefs}
              className="left-[51.5%] top-[-1%] z-10 w-full max-md:flex max-md:flex-col md:absolute md:w-1/4 md:pr-5"
            >
              <KnockItem number="3" title="グループチャットも対応！">
                1対1だけでなくグループでのチャットルームが作成できます！自由に秘密の話をしてください。
              </KnockItem>
            </div>
            <div
              ref={animateRefs}
              className="left-[76.5%] top-[27%] z-10 w-full max-md:flex max-md:flex-col max-md:items-end md:absolute md:w-1/4 md:pr-5"
            >
              <KnockItem number="4" title="完全なプライバシー保護を実現" large>
                チャットルームでのやりとりは全て暗号化！流出も盗聴も心配無用です。
              </KnockItem>
            </div>
            <div
              ref={animateRefs}
              className="left-[51.5%] top-[51%] z-10 w-full max-md:flex max-md:flex-col md:absolute md:w-1/4 md:pr-5"
            >
              <KnockItem number="5" title="ファイル共有が簡単！">
                画像、動画、音声、その他のファイルを簡単共有！3回タップで共有完了です。
              </KnockItem>
            </div>
            <div
              ref={animateRefs}
              className="left-[25.5%] top-[57%] z-10 w-full max-md:flex max-md:flex-col max-md:items-end md:absolute md:w-1/4 md:pr-5"
            >
              <KnockItem number="6" title="個人情報の収集や広告の表示がゼロ">
                無料で使えるのに、一切個人情報が収集されません！広告の表示やトラッキングもゼロ。
              </KnockItem>
            </div>
            <div
              ref={animateRefs}
              className="left-0 top-[53%] z-10 max-md:flex max-md:flex-col md:absolute md:w-1/4 md:pr-5"
            >
              <KnockItem number="7" title="ユーザーファースト">
                ユーザーに真のプライバシー保護を届けるために！ユーザーの要望を取り入れて進化する次世代のチャットアプリ。
              </KnockItem>
              <p className="flex items-center font-racing text-[24px] leading-[0.8] md:text-[46px]">
                GOAL
                <img
                  className="max-md:w-[20px]"
                  src="/images/img-goal.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
