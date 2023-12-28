"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PageTitle from "../components/common/pageTitle";

export default function Company() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <>
            <PageTitle>会社概要</PageTitle>
            <div className="px-5 md:mb-[120px] mb-[70px]">
                <div ref={animateRefs} className="opacity-0 w-full max-w-[1350px] mx-auto bg-[url('/images/company-bg.jpg')] bg-cover md:py-16 py-12 px-5">
                    <div className="flex justify-center">
                        <img className="max-md:w-[130px]" src="/images/logo-wsp.png" alt="WORLD SCAN PROJECT" />
                    </div>
                    <div className="font-zenkaku text-white md:text-[16px] text-[14px] w-full max-w-[506px] mx-auto md:mt-12 mt-8 space-y-7 mb-2">
                        <div className="flex gap-3 py-2 border-b border-white md:gap-8">
                            <p className="px-2 w-[60px] md:w-[70px]">会社名</p>
                            <p className="flex-1">株式会社ワールドスキャンプロジェクト</p>
                        </div>
                        <div className="flex gap-3 py-2 border-b border-white md:gap-8">
                            <p className="px-2 w-[60px] md:w-[70px]">所在地</p>
                            <p className="flex-1">東京都新宿区西早稲田2-18-23 スカイエスタ西早稲田 2F</p>
                        </div>
                        <div className="flex gap-3 py-2 border-b border-white md:gap-8">
                            <p className="px-2 w-[60px] md:w-[70px]">設立</p>
                            <p className="flex-1">2020年1月22日</p>
                        </div>
                        <div className="flex gap-3 py-2 border-b border-white md:gap-8">
                            <p className="px-2 w-[60px] md:w-[70px]">Website</p>
                            <p className="flex-1">https://world-scan-project.com/</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}