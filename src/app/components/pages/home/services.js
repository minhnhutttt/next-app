"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

const Services = () => {
  const animateRefs = useScrollAnimation("fadeUp");

  return (
    <div className="mx-auto w-full max-w-[480px] px-5 pb-16 pt-6 md:max-w-[1260px] md:pb-[110px] md:pt-12">
      <div ref={animateRefs} className="mb-6 md:mb-[50px]">
        <div className="flex justify-center">
          <p className="mb-3 border border-[#CECECE] px-5 py-0.5 text-center text-[12px] uppercase tracking-[0.4em] md:text-[14px]">
            Services
          </p>
        </div>
        <h3 className="text-center font-zenkaku text-[20px] font-bold leading-[1.3] md:text-[40px]">
          次世代ドメインって <br />
          こんなに便利
        </h3>
      </div>
      <div
        ref={animateRefs}
        className="mb-5 flex gap-2.5 max-md:flex-col md:mb-[34px]"
      >
        <div className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-6 md:py-[45px]">
          <figure className="mb-3 md:mb-5">
            <img
              className="max-md:w-[50px]"
              src="/images/icon-service-01.png"
              alt="送受信をミスなく簡単に"
            />
          </figure>
          <p className="text-center font-zenkaku text-[16px] font-bold leading-[1.2] md:text-[20px]">
            送受信をミスなく簡単に
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-6 md:py-[45px]">
          <figure className="mb-3 md:mb-5">
            <img
              className="max-md:w-[50px]"
              src="/images/icon-service-02.png"
              alt="Web3.0サービスのユーザー名に"
            />
          </figure>
          <p className="text-center font-zenkaku text-[16px] font-bold leading-[1.2] md:text-[20px]">
            Web3.0サービスのユーザー名に
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-white px-5 py-6 md:py-[45px]">
          <figure className="mb-3 md:mb-5">
            <img
              className="max-md:w-[50px]"
              src="/images/icon-service-03.png"
              alt="日本円で決済可能"
            />
          </figure>
          <p className="text-center font-zenkaku text-[16px] font-bold leading-[1.2] md:text-[20px]">
            日本円で決済可能
          </p>
        </div>
      </div>
      <div ref={animateRefs} className="mb-5 flex justify-center md:mb-[42px]">
        <div className="flex h-[55px] w-full max-w-[320px] md:h-[74px] md:max-w-[703px]">
          <input
            type="text"
            className="h-full w-full flex-1 px-5 py-4 text-[12px] md:px-[33px] md:py-[23px] md:text-[20px]"
            placeholder="ドメインを検索(8文字以上22文字まで)"
          />
          <button
            type="submit"
            className="flex h-full w-[80px] items-center justify-center bg-[#0152A8] font-bold text-white duration-200 hover:opacity-75 md:w-[141px] md:text-[23px]"
          >
            検索
          </button>
        </div>
      </div>
      <div
        ref={animateRefs}
        className="mx-auto w-full max-w-[400px] rounded-[10px] bg-[#eee] p-4 text-[16px] leading-[1.3] tracking-[0.039em] text-[#111] md:max-w-[798px] md:rounded-[20px] md:p-[30px] md:text-[20px]"
      >
        .red / .orange / .yellow / .green / .blue / .indigo / .purple / .gold /
        .black / .web3 / .star / .hero / .king / .queen / .samurai / .sengoku /
        .ninja / .bushi / .player / .dreamer / .kitty / .fairy / .a / .b / .c /
        .d / .e / .f / .g / .h / .i / .j / .k / .l / .m / .n / .o / .p / .q / .r
        / .s / .t / .u / .v / .w / .x / .y / .z
      </div>
    </div>
  );
};
export default Services;
