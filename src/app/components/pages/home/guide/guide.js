import ButtonContact from "@/app/components/common/buttonContact";
import GuideItem from "./guideItem";
import ButtonLine from "@/app/components/common/buttonLine";

export default function Guide() {

    return (
      <div className="bg-[url(/images/image-howto.jpg)] bg-cover px-5 pt-10 md:pt-[84px] pb-8 md:pb-[68px]">
          <div className="w-full md:max-w-[1180px] max-w-[400px] mx-auto bg-white/30 rounded-[30px] py-6 md:py-10">
              <h5 className="md:text-[42px] text-[20px] text-center font-bold">購入方法</h5>
              <div className="flex max-md:flex-col max-md:items-center justify-center px-5 lg:px-10 mt-10">
                <GuideItem imageSrc="/images/image-guide-01.png" step="容量を決める">
                    ご希望の容量を決めてください。<br />
                    ※容量は後から追加も可能です
                </GuideItem>
                <figure className="px-2 lg:px-4 xl:px-10 max-md:my-4 md:mt-[14%]">
                    <img className="max-lg:w-5 max-md:rotate-90" src="/images/icon-arrow.svg" alt="" />
                </figure>
                <GuideItem imageSrc="/images/image-guide-02.png" step="購入申請">
                    <span>購入サポートセンターよりご購入ください</span>
                    <div className="flex flex-col justify-center items-center mt-3 gap-2 md:gap-4">
                        <ButtonContact />
                        <ButtonLine />
                    </div>
                </GuideItem>
                <figure className="px-2 lg:px-4 xl:px-10 max-md:my-4 md:mt-[14%]">
                    <img className="max-lg:w-5 max-md:rotate-90" src="/images/icon-arrow.svg" alt="" />
                </figure>
                <GuideItem imageSrc="/images/image-guide-03.png" step="支払う">
                決済後、購入時に入力したメールアドレス宛に【購入明細と初期設定に関するご案内】というタイトルのメールが自動送信されますので、メールをご確認いただき初期設定を完了させてください。
                </GuideItem>
              </div>
          </div>
      </div>
    );
  }
  