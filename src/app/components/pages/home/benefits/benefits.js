import Title from "@/app/components/common/title";
import BenefitsItem from "./benefitsItem";
import Button from "@/app/components/common/button";

export default function Benefits() {
    return (
      <>
      <div className="bg-[url('/bg-benefits.png')] bg-no-repeat bg-bottom bg-[length:100%_auto] pb-[47px]">
        <div className="w-full max-w-[1400px] mx-auto px-2.5">
          <Title>NFTクーポンの特典</Title>
          <div className="flex justify-center my-[3%]">
            <div className="text-[36px] font-bold leading-[1.75] tracking-wider">
              ① デジタルウォレット管理 <br />
              ② 環境にやさしい <br />
              ③ シャア(拡散)が簡単 <br />
              ④ 使う人もお店もお得
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-[24px] font-medium">
              最新NFTクーポンで、ショッピングやお出かけがもっと簡単に。<br />
              紙からNFTへ、未来のクーポンを楽しもう！
            </p>
          </div>
          <div className="grid grid-cols-2 mt-[5.8%]">
            <BenefitsItem imgSrc="/img-benefits-01.png" title="① デジタルウォレット管理" content="クーポンはスマートフォンやタブレットにデジタルに保存され、いつでもどこでもアクセスできます。" />
            <BenefitsItem imgSrc="/img-benefits-02.png" title="② 環境にやさしい" content="紙のクーポンの印刷や廃棄を減少させ、環境への配慮に貢献します。" />
            <BenefitsItem imgSrc="/img-benefits-03.png" title="③ シャア(拡散)が簡単" content="お友達や家族にもクーポンを簡単に送信・転送できます。" />
            <BenefitsItem imgSrc="/img-benefits-04.png" title="④ 使う人もお店もお得" content="スマホを見せるだけでお得にお買い物できるのと、使うためにお店に来店する為、結果集客効率がアップします。" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-47px]">
        <Button link="/">NFTクーポンを作る</Button>
      </div>
      </>
    );
  }
  