import Link from "next/link";

export default function Contact() {
    return (
      <div className="px-5 py-10 md:py-[100px] bg-black/20">
        <div className="w-full flex max-md:flex-col md:justify-between md:max-w-[1530px] max-w-[440px] mx-auto md:space-x-5 pb-3">
            <div className="md:w-1/2 max-w-[755px] flex justify-end">
                <div className="w-full max-w-[680px] bg-white pt-5 pb-5 md:pb-10 px-5">
                <p className="text-center text-[24px] md:text-[44px] font-bold tracking-widest text-[#303234]">CONTACT</p>
                    <div className="w-full mx-auto max-w-[555px] mt-3">
                        <div className="flex gap-3 md:gap-[30px] py-3">
                            <div className="flex-1">
                                <p className="text-[16px] md:text-[18px] font-medium text-[#303234]/[.5] tracking-widest mb-0.5">名前<span className="text-[#f1001c]">*</span></p>
                                <div className="">
                                    <input type="text" className="w-full border-0 bg-[#f3f3f3] rounded-[5px] md:h-[50px] h-[40px]" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-[16px] md:text-[18px] font-medium text-[#303234]/[.5] tracking-widest mb-0.5">E-メール<span className="text-[#f1001c]">*</span></p>
                                <div className="">
                                    <input type="text" className="w-full border-0 bg-[#f3f3f3] rounded-[5px] md:h-[50px] h-[40px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 md:gap-[30px] py-3">
                            <div className="flex-1">
                                <p className="text-[16px] md:text-[18px] font-medium text-[#303234]/[.5] tracking-widest mb-0.5">電話番号<span className="text-[#f1001c]">*</span></p>
                                <div className="">
                                    <input type="text" className="w-full border-0 bg-[#f3f3f3] rounded-[5px] md:h-[50px] h-[40px]" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-[16px] md:text-[18px] font-medium text-[#303234]/[.5] tracking-widest mb-0.5">サービス名</p>
                                <div className="">
                                    <input type="text" className="w-full border-0 bg-[#f3f3f3] rounded-[5px] md:h-[50px] h-[40px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[30px] py-2">
                            <div className="flex-1">
                                <p className="text-[16px] md:text-[18px] font-medium text-[#303234]/[.5] tracking-widest mb-0.5">お問い合わせ内容</p>
                                <div className="">
                                    <textarea className="w-full border-0 bg-[#f3f3f3] rounded-[5px] h-20 md:h-[100px]"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="py-5">
                            <Link href="#" className="flex items-center justify-center text-base md:text-lg font-medium bg-[#060606] rounded-[10px] w-[220px] h-11 md:w-[225px] md:h-[50px]">メールを送信</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 max-w-[755px] flex items-center justify-center flex-col max-md:pt-10">
                <div className="md:mb-9 mb-6">
                    <img className="max-md:w-[140px]" src="/wsp-logo.png" alt="" />
                </div>
                <div className="text-center text-sm md:text-[18px] leading-[1.7]">
                株式会社ワールドスキャンプロジェクト<br />
東京都新宿区西早稲田2-18-23<br />
スカイエスタ西早稲田 2F 
                </div>
            </div>
        </div>
        <div className="w-full max-w-[1800px] text-right text-xs md:text-sm py-6 md:py-9">© 2023 WORLD SCAN PROJECT</div>
      </div>
    );
  }
  