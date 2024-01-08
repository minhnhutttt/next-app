"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function FV() {
    const animateRefs = useScrollAnimation("fadeUp");
    const animate3Refs = useScrollAnimation("fadeUp", 0.3);
    return (
        <div className="md:px-[30px] px-5 mt-6">
            <div className="w-full max-w-[1380px] mx-auto  bg-white rounded-[20px] px-5 lg:py-[85px] py-5 md:py-[40px]">
                <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center max-md:flex-col-reverse">
                    <div className="md:space-y-7 space-y-5 max-md:py-6 xl:mt-[-50px]">
                        <div ref={animateRefs} className="font-black">
                            <p className="px-3 text-[18px] md:text-[24px] leading-none">プライバシー</p>
                            <h1 className="inline-block break-keep px-3 tracking-widest md:text-[50px] xl:text-[80px] text-[30px] leading-tight bg-[linear-gradient(to_top,_#FBC02D_40%,_transparent_40%)]">秘密<span className="md:text-[40px] text-[32px] xl:text-[66px]">が</span>守<span className="md:text-[40px] text-[32px] xl:text-[66px]">られる</span></h1>
                        </div>
                        <div ref={animate3Refs} className="font-black lg:ml-16 md:ml-10 ml-6">
                            <p className="px-3 text-[18px] md:text-[24px] leading-none">チャットルーム</p>
                            <h1 className="inline-block break-keep px-3 tracking-widest md:text-[50px] xl:text-[80px] text-[30px] leading-tight">部屋へようこそ</h1>
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
