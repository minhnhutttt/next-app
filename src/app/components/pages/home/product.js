import SectionSupport from "./components/sectionSupport";
import SectionTitle from "./components/sectionTitle";

export default function Product() {
    return (
        <div className="pb-6 pt-10 md:pt-20 md:pb-[95px] px-5">
            <div className="w-full max-w-[1280px] mx-auto">
                <SectionTitle>商品詳細</SectionTitle>
                <div className="mt-10 md:mt-20 bg-white/90 rounded-[20px] pt-8 md:pt-[50px] pb-10 md:pb-[80px] px-5 md:px-11">
                    <h4 className="text-center md:text-[36px] text-[24px] font-bold tracking-widest">ポケットWi-Fi業界トップクラスの性能！</h4>
                    <div className="flex max-lg:justify-center max-lg:flex-wrap mt-[54px] gap-3">
                        <div className="max-md:max-w-[70%]" >
                            <figure>
                                <img src="/images/product-freebot.png" alt="" />
                            </figure>
                            <div className="mt-2">
                                <div className="flex justify-center items-center gap-1.5 md:text-[24px] text-[16px] font-bold">
                                    <svg className="max-md:w-8" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                        <path d="M40.7 16.4998H38.5C37.8925 16.4998 37.4 16.9922 37.4 17.5998V26.3998C37.4 27.0073 37.8925 27.4998 38.5 27.4998H40.7C41.3075 27.4998 41.8 27.0073 41.8 26.3998V17.5998C41.8 16.9922 41.3075 16.4998 40.7 16.4998Z" fill="black"/>
                                        <path d="M8.80002 16.4998H15.4V27.4998H8.80002V16.4998ZM16.5 16.4998H23.1V27.4998H16.5V16.4998ZM24.2 16.4998H30.8V27.4998H24.2V16.4998Z" fill="black"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M30.8 9.8999H8.80001C7.04958 9.8999 5.37085 10.5953 4.13311 11.833C2.89537 13.0707 2.20001 14.7495 2.20001 16.4999V27.4999C2.20001 29.2503 2.89537 30.9291 4.13311 32.1668C5.37085 33.4045 7.04958 34.0999 8.80001 34.0999H30.8C32.5504 34.0999 34.2292 33.4045 35.4669 32.1668C36.7047 30.9291 37.4 29.2503 37.4 27.4999V16.4999C37.4 14.7495 36.7047 13.0707 35.4669 11.833C34.2292 10.5953 32.5504 9.8999 30.8 9.8999ZM6.60001 16.4999C6.60001 15.9164 6.8318 15.3568 7.24438 14.9443C7.65696 14.5317 8.21654 14.2999 8.80001 14.2999H30.8C31.3835 14.2999 31.9431 14.5317 32.3556 14.9443C32.7682 15.3568 33 15.9164 33 16.4999V27.4999C33 28.0834 32.7682 28.643 32.3556 29.0555C31.9431 29.4681 31.3835 29.6999 30.8 29.6999H8.80001C8.21654 29.6999 7.65696 29.4681 7.24438 29.0555C6.8318 28.643 6.60001 28.0834 6.60001 27.4999V16.4999Z" fill="black"/>
                                    </svg>
                                    <span>大容量！</span>
                                </div>
                                <p className="text-center md:text-[32px] text-[20px] font-bold tracking-wider">バッテリー4000mAh</p>
                            </div>
                        </div>
                        <div className="md:flex-1">
                            <div className="border-y border-black pb-6">
                                <div className="flex justify-center">
                                    <div className="md:pt-9 pt-6 md:pb-8 pb-5 space-y-3">
                                        <div className="flex md:gap-11 gap-5">
                                            <p className="md:w-[206px] w-[130px] text-right md:text-[24px] text-[16px] font-bold">連続使用可能時間</p>
                                            <p className="md:w-[295px] flex-1 md:text-[20px] text-[13px] font-medium">約20時間</p>
                                        </div>
                                        <div className="flex md:gap-11 gap-5">
                                            <p className="md:w-[206px] w-[130px] text-right md:text-[24px] text-[16px] font-bold">同時接続台数</p>
                                            <p className="md:w-[295px] flex-1 md:text-[20px] text-[13px] font-medium">10台</p>
                                        </div>
                                        <div className="flex md:gap-11 gap-5">
                                            <p className="md:w-[206px] w-[130px] text-right md:text-[24px] text-[16px] font-bold">サイズ</p>
                                            <p className="md:w-[295px] flex-1 md:text-[20px] text-[13px] font-medium">85mm 85mm 20.6mm</p>
                                        </div>
                                        <div className="flex md:gap-11 gap-5">
                                            <p className="md:w-[206px] w-[130px] text-right md:text-[24px] text-[16px] font-bold">重量</p>
                                            <p className="md:w-[295px] flex-1 md:text-[20px] text-[13px] font-medium">125g</p>
                                        </div>
                                        <div className="flex md:gap-11 gap-5">
                                            <p className="md:w-[206px] w-[130px] text-right md:text-[24px] text-[16px] font-bold">最大速度</p>
                                            <p className="md:w-[295px] flex-1 md:text-[20px] text-[13px] font-medium">上り50Mbps / 下り150Mbps</p>
                                        </div>
                                        <div className="flex md:gap-11 gap-5">
                                            <p className="md:w-[206px] w-[130px] text-right md:text-[24px] text-[16px] font-bold">充電ケーブル</p>
                                            <p className="md:w-[295px] flex-1 md:text-[20px] text-[13px] font-medium">USB-Type-C</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center md:text-[20px] text-[13px]">商品到着後[IMEI番号]を入力だけでご利用いただけます。</p>
                            </div>
                            <div className="mt-8">
                                <SectionSupport />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  