"use client"
import useScrollAnimation from '@/app/hooks/useScrollAnimation';

const Services = () => {
    const animateRefs = useScrollAnimation('fadeUp');

    return (
        <div className="md:pt-12 pt-6 md:pb-[110px] pb-16 w-full md:max-w-[1260px] max-w-[480px] mx-auto px-5">
            <div ref={animateRefs} className="md:mb-[50px] mb-6">
                <div className="flex justify-center"><p className="text-center md:text-[14px] text-[12px] border border-[#CECECE] px-5 py-0.5 mb-3 tracking-[0.4em] uppercase">Services</p></div>
                <h3 className="text-center font-zenkaku font-bold md:text-[40px] text-[20px] leading-[1.3]">
                    次世代ドメインって <br />
                    こんなに便利
                </h3>
            </div>
            <div ref={animateRefs} className="flex max-md:flex-col gap-2.5 md:mb-[34px] mb-5">
                <div className="bg-white flex-1 flex items-center justify-center flex-col py-6 md:py-[45px] px-5">
                    <figure className="mb-3 md:mb-5">
                        <img className="max-md:w-[50px]" src="/images/icon-service-01.png" alt="送受信をミスなく簡単に" />
                    </figure>
                    <p className="font-bold font-zenkaku text-center md:text-[20px] text-[16px] leading-[1.2]">送受信をミスなく簡単に</p>
                </div>
                <div className="bg-white flex-1 flex items-center justify-center flex-col py-6 md:py-[45px] px-5">
                    <figure className="mb-3 md:mb-5">
                        <img className="max-md:w-[50px]" src="/images/icon-service-02.png" alt="Web3.0サービスのユーザー名に" />
                    </figure>
                    <p className="font-bold font-zenkaku text-center md:text-[20px] text-[16px] leading-[1.2]">Web3.0サービスのユーザー名に</p>
                </div>
                <div className="bg-white flex-1 flex items-center justify-center flex-col py-6 md:py-[45px] px-5">
                    <figure className="mb-3 md:mb-5">
                        <img className="max-md:w-[50px]" src="/images/icon-service-03.png" alt="日本円で決済可能" />
                    </figure>
                    <p className="font-bold font-zenkaku text-center md:text-[20px] text-[16px] leading-[1.2]">日本円で決済可能</p>
                </div>
            </div>
            <div ref={animateRefs} className="flex justify-center md:mb-[42px] mb-5">
                <div className="w-full max-w-[320px] md:max-w-[703px] h-[55px] md:h-[74px] flex">
                    <input type="text" className="w-full h-full py-4 md:py-[23px] px-5 md:px-[33px] md:text-[20px] text-[12px] flex-1" placeholder="ドメインを検索(8文字以上22文字まで)" />
                    <button type="submit" className="w-[80px] md:w-[141px] h-full flex items-center justify-center bg-[#0152A8] text-white md:text-[23px] font-bold duration-200 hover:opacity-75">検索</button>
                </div>
            </div>
            <div ref={animateRefs} className="w-full md:max-w-[798px] max-w-[400px] mx-auto bg-[#eee] md:rounded-[20px] rounded-[10px] md:text-[20px] text-[16px] tracking-[0.039em] text-[#111] leading-[1.3] md:p-[30px] p-4">
            .red / .orange / .yellow / .green / .blue / .indigo / .purple / .gold / .black / .web3 / .star / .hero / .king / .queen / .samurai / .sengoku / .ninja / .bushi / .player / .dreamer / .kitty / .fairy / .a / .b / .c / .d / .e / .f / .g / .h / .i / .j / .k / .l / .m / .n / .o / .p / .q / .r / .s / .t / .u / .v / .w / .x / .y / .z
            </div>
        </div>
    )
}
export default Services;