import Title from "@/app/components/common/title";
import StoresItem from "./storesItem";

export default function Stores() {
    return (
      <>
      <div className="md:pt-[9.5%] pt-[16%] px-5">
            <div className="w-full md:max-w-[1420px] max-w-[440px] mx-auto">
                <Title>こんなお店におすすめ</Title>
                <div className="grid grid-cols-3 gap-5 md:gap-[80px] mt-[6%]">
                    <StoresItem imgSrc="/img-stores-01.png">オフライン集客(来店数)を <br />増やしたい！</StoresItem>
                    <StoresItem imgSrc="/img-stores-02.png">高額な広告媒体を辞めたい！</StoresItem>
                    <StoresItem imgSrc="/img-stores-03.png">SNSを活用した <br />プロモーションを楽にしたい！</StoresItem>
                </div>
            </div>
      </div>
      </>
    );
  }
  