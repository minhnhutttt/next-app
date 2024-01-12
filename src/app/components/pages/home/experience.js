"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function Experience() {
  const animateRefs = useScrollAnimation("");
  const animateLeftRefs = useScrollAnimation("slideLeft");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <div
      id="experience"
      className="overflow-hidden bg-[linear-gradient(180deg,_rgba(0,_181,_238,_0.30)_0%,_rgba(217,_217,_217,_0.00)_100%)] py-10 md:pb-9 md:pt-[110px]"
    >
      <div className="">
        <h3
          ref={animateRefs}
          className="text-center text-[20px] font-bold md:text-[42px]"
        >
          NESがあなたに必要な理由・・・
          <br />
          こんな経験、ありませんか？
        </h3>
        <div className="flex justify-center mt-7">
          <div className="relative flex w-full justify-center py-5 md:max-w-[850px] md:py-[88px]">
            <figure
              ref={animateRefs}
              className="md:ml-6 max-md:w-[25vw] max-lg:w-[340px] max-md:mt-[2vw]"
            >
              <img className="max-md:hidden" src="/images/image-experience.png" alt="" />
              <img className="md:hidden" src="/images/image-experience-sp.png" alt="" />
            </figure>
            <div
              ref={animateLeftRefs}
              className="absolute left-[4vw] md:top-0 top-[12vw] flex h-[20vw] w-[33vw] items-center justify-center rounded-[48%] border-2 border-[#231815] bg-white text-[2.2vw] font-bold after:absolute after:bottom-[5%] after:right-[8%] after:block after:h-[4vw] after:w-[6vw] after:bg-[url(/images/chat.png)] after:bg-cover after:content-[''] md:left-[4%] md:h-[140px] md:w-[200px] md:text-[14px] md:after:right-[3%] md:after:h-6 md:after:w-9 lg:text-[16px]"
            >
              スマートフォンの
              <br />
              容量がいっぱい..
            </div>
            <div
              ref={animateLeftRefs}
              className="absolute left-[1vw] top-[34vw] flex h-[20vw] w-[33vw] items-center justify-center rounded-[48%] border-2 border-[#231815] bg-white text-[2.2vw] font-bold after:absolute after:bottom-[12%] after:right-[2%] after:block after:h-[4vw] after:w-[6vw] after:bg-[url(/images/chat.png)] after:bg-cover after:content-[''] md:left-[-1%] md:top-[31%] md:h-[140px] md:w-[200px] md:text-[14px] md:after:right-[-2%] md:after:h-6 md:after:w-9 lg:text-[16px]"
            >
              子どもの写真や動
              <br />
              画は安全な場所に
              <br />
              保管したい..
            </div>
            <div
              ref={animateLeftRefs}
              className="absolute left-[3%] top-[57vw] flex h-[20vw] w-[33vw] items-center justify-center rounded-[48%] border-2 border-[#231815] bg-white text-[2.2vw] font-bold after:absolute after:bottom-[27%] after:right-[-4%] after:block after:h-[4vw] after:w-[6vw] after:rotate-[-30deg] after:bg-[url(/images/chat.png)] after:bg-cover after:content-[''] md:left-[2%] md:top-[63%] md:h-[140px] md:w-[200px] md:text-[14px] md:after:h-6 md:after:w-9 lg:text-[16px]"
            >
              ストレージのサブス
              <br />
              ク契約してるけど永
              <br />
              久に払うのかと思う
              <br />
              と憂鬱..
            </div>
            <div
              ref={animateRightRefs}
              className="absolute right-[3%] top-[20vw] flex h-[20vw] w-[33vw] items-center justify-center rounded-[48%] border-2 border-[#231815] bg-white text-[2.2vw] font-bold after:absolute after:bottom-[14%] after:left-[0] after:block after:h-[4vw] after:w-[6vw] after:rotate-[18deg] after:scale-x-[-1] after:bg-[url(/images/chat.png)] after:bg-cover after:content-[''] md:right-[1.5%] md:top-[14%] md:h-[140px] md:w-[200px] md:text-[14px] md:after:left-[-3%] md:after:h-6 md:after:w-9 lg:text-[16px]"
            >
              共有アプリにアップ
              <br />
              ロードするのは内部
              <br />
              から見られそうでな
              <br />
              んだか気持ち悪い..
            </div>
            <div
              ref={animateRightRefs}
              className="absolute right-[3%] top-[46vw] flex h-[20vw] w-[33vw] items-center justify-center rounded-[48%] border-2 border-[#231815] bg-white text-[2.2vw] font-bold after:absolute after:bottom-[20%] after:left-[-3%] after:block after:h-[4vw] after:w-[6vw] after:rotate-[18deg] after:scale-x-[-1] after:bg-[url(/images/chat.png)] after:bg-cover after:content-[''] md:right-[1.5%] md:top-[54%] md:h-[140px] md:w-[200px] md:text-[14px] md:after:h-6 md:after:w-9 lg:text-[16px]"
            >
              スマホの機種変更
              <br />
              データ移行が全然
              <br />
              終わらない..
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
