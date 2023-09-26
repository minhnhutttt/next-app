import Title from "@/app/components/common/title";
import StepsItem from "./stepsItem";

export default function Steps() {
    return (
      <>
      <div className="md:pt-[9.5%] pt-[16%] md:pb-[47px] px-5">
            <div className="w-full md:max-w-[1400px] max-w-[440px] mx-auto">
                <Title>NFTクーポンの使い方</Title>
                <div className="flex max-md:flex-col justify-between gap-2 mt-[7.5%]">
                    <StepsItem imgSrc="/img-step-01.png" step="①" content={<>DIVER Wallet <br />ダウンロード</>} />
                    <div className="flex items-center justify-center max-md:p-8 md:pt-[10%]">
                        <img className="max-md:w-12 rotate-90" src="/ic-arr.png" alt="" />
                    </div>
                    <StepsItem imgSrc="/img-step-02.png" step="②" content={<>NFTクーポンを<br />GET!&確認</>} />
                    <div className="flex items-center justify-center max-md:p-8 md:pt-[10%]">
                        <img className="max-md:w-12 rotate-90" src="/ic-arr.png" alt="" />
                    </div>
                    <StepsItem imgSrc="/img-step-03.png" step="③" content={<>お店で <br />クーポンを使う</>} />
                </div>
            </div>
      </div>
      </>
    );
  }
  