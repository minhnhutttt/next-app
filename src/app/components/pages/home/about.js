"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function About() {
  const animateRefs = useScrollAnimation("fadeUp");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <div
      id="about"
      className="overflow-hidden bg-[linear-gradient(180deg,_rgba(217,_217,_217,_0.00)_0%,_rgba(0,_181,_238,_0.30)_100%)] py-20 md:py-[160px]"
    >
      <div className="flex items-center justify-between max-md:flex-col">
        <div className="flex w-full justify-center px-5 md:w-1/2">
          <div className="w-full max-w-[403px]">
            <h3
              ref={animateRefs}
              className="text-[35px] font-black leading-snug tracking-[0.6em] md:text-[70px]"
            >
              NES
            </h3>
            <p
              ref={animateRefs}
              className="mb-7 text-[18px] font-black md:text-[24px]"
            >
              ネバーエンディングストレージ
            </p>
            <div ref={animateRefs} className="mb-4 flex flex-wrap gap-2.5">
              <div className="flex h-8 items-center justify-center gap-[5px] rounded-[10px] border border-[#00B5EE] px-2.5 text-[14px] md:h-10 md:text-[16px]">
                <img src="/images/icon-photo.svg" alt="写真" />
                <span>写真</span>
              </div>
              <div className="flex h-8 items-center justify-center gap-[5px] rounded-[10px] border border-[#00B5EE] px-2.5 text-[14px] md:h-10 md:text-[16px]">
                <img src="/images/icon-movie.svg" alt="動画" />
                <span>動画</span>
              </div>
              <div className="flex h-8 items-center justify-center gap-[5px] rounded-[10px] border border-[#00B5EE] px-2.5 text-[14px] md:h-10 md:text-[16px]">
                <img src="/images/icon-music.svg" alt="音楽" />
                <span>音楽</span>
              </div>
              <div className="flex h-8 items-center justify-center gap-[5px] rounded-[10px] border border-[#00B5EE] px-2.5 text-[14px] md:h-10 md:text-[16px]">
                <img src="/images/icon-doc.svg" alt="ドキュメント" />
                <span>ドキュメント</span>
              </div>
            </div>
            <p
              ref={animateRefs}
              className="text-[14px] leading-[1.8] md:text-[16px]"
            >
              つらい時の幸せも、嬉しい時の幸せも、そのすべてを残し続ける。
              <br />
              <br />
              それがあるから頑張れる、時が刻まれた大切な情景を。
              <br />
              他愛もないけど価値のある、切り取られた日々に時を感じる未来を。
              <br />
              <br />
              USBのように簡単に、海のように終わりがない。
              <br />
              生涯寄り添う次世代のパートナー。
              <br />
              <br />
              ネバーエンディングストレージ。
            </p>
          </div>
        </div>
        <div
          ref={animateRightRefs}
          className="flex w-full justify-end max-md:pl-20 md:w-1/2"
        >
          <img src="/images/nes-introduction-image.png" alt="NES" />
        </div>
      </div>
    </div>
  );
}
