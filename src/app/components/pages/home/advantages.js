import SectionSupport from "./components/sectionSupport";
import SectionTitle from "./components/sectionTitle";

export default function Advantages() {
    return (
        <div className="px-5 relative md:pb-[82px] pb-12 md:pt-[100px] pt-[60px]">
            <figure className="max-md:w-[180px] max-[1440px]:w-[29.514vw] absolute bottom-0 right-0 z-10">
                <img src="/images/image-advantages.png" alt="" />
            </figure>
            <div className="w-full max-w-[1280px] mx-auto bg-[#FFF9F2]/[0.8] rounded-[10px] pt-10 pb-[120px] md:pt-20 md:pb-8 px-5 relative">
                <SectionTitle>ギガ二刀流Wi-Fiのメリット</SectionTitle>
                <div className="w-full md:max-w-[1006px] max-w-[440px] mx-auto mt-8 md:mt-16">
                    <div className="flex md:gap-[50px] max-md:items-center max-md:flex-col gap-7">
                        <div className="w-full md:w-[296px] rounded-[20px] overflow-hidden">
                            <p className="md:text-[24px] text-[16px] font-bold text-white md:h-[84px] h-[60px] flex items-center justify-center bg-[#848199]">従来のWi-Fi契約</p>
                            <div className="md:text-[20px] text-[14px] font-medium text-center space-y-5 pb-6 md:pb-9 pt-2.5 md:pt-3.5 bg-white">
                                <p>長期契約の縛り</p>
                                <p>高価な月額料金</p>
                                <p>制限されたデータ帯域幅</p>
                                <p>バッテリー寿命の短さ</p>
                                <p>契約の解除が困難</p>
                            </div>
                        </div>
                        <div className="rounded-[20px] flex-1 overflow-hidden flex flex-col">
                            <p className="md:text-[32px] text-[20px] font-bold text-white md:h-[84px] h-[60px] bg-black text-center flex items-center justify-center">ギガ二刀流Wi-Fi契約</p>
                            <div className="bg-[#D80000] flex-1 py-6 md:py-10 px-2 md:px-5">
                                <div className="flex flex-wrap justify-center gap-3 md:gap-5 w-full max-w-[455px] mx-auto">
                                    <p className="bg-white py-1.5 md:py-2.5 px-3 md:px-5 font-bold md:text-[20px] text-[14px] rounded-[5px] tracking-[0.18em]">契約不要</p>
                                    <p className="bg-white py-1.5 md:py-2.5 px-3 md:px-5 font-bold md:text-[20px] text-[14px] rounded-[5px] tracking-[0.18em]">審査無し</p>
                                    <p className="bg-white py-1.5 md:py-2.5 px-3 md:px-5 font-bold md:text-[20px] text-[14px] rounded-[5px] tracking-[0.18em]">月額0円</p>
                                    <p className="bg-white py-1.5 md:py-2.5 px-3 md:px-5 font-bold md:text-[20px] text-[14px] rounded-[5px] tracking-[0.18em]">契約期間無し</p>
                                    <p className="bg-white py-1.5 md:py-2.5 px-3 md:px-5 font-bold md:text-[20px] text-[14px] rounded-[5px] tracking-[0.18em]">365日有効</p>
                                    <p className="bg-white py-1.5 md:py-2.5 px-3 md:px-5 font-bold md:text-[20px] text-[14px] rounded-[5px] tracking-[0.18em]">バッテリー大容量</p>
                                    <p className="bg-white py-1.5 md:py-2.5 px-3 md:px-5 font-bold md:text-[20px] text-[14px] rounded-[5px] tracking-[0.18em]">ストレージ付き</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-16 mt-8 border-b border-black md:pb-10 pb-6">
                        <SectionSupport />
                    </div>
                    <div className="py-10 relative z-10">
                        <div className="flex justify-center items-center gap-8 md:gap-24">
                            <figure>
                                <img src="/images/image-expiration-date.png" alt="買取ギガ有効期限" />
                            </figure>
                            <figure>
                                <img src="/images/image-model.png" alt="" />
                            </figure>
                        </div>
                        <div className="mt-12 min-[1441px]:w-full w-[70vw] md:w-[50vw] min-[1441px]:max-w-[757px] mx-auto">
                            <h5 className="text-center md:text-[24px] text-[16px] font-bold">ご契約開始日から１年間(365日)ご利用いただけます。</h5>
                            <div className="flex justify-center">
                            <p className="md:text-[18px] text-[13px] font-medium mt-6 leading-[1.6] md:left-[-16px] relative">
                                従来のポケットWi-Fiは、1ヶ月でギガは消滅し翌月繰越ができず、余りギガ数が無駄になってしまいますが、ギガ二刀流Wi-Fiの場合、チャージ制ですので、未使用のデータ容量は、次の月に持ち越すことができます。そのため、月々大量のデータを使用しない方にとって、ギガ二刀流WiFiは、使いたい時に使用でき色々なシーンでご利用いただけます。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  