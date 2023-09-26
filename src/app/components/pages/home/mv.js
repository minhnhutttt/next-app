import Button from "../../common/button";

export default function MV() {
    return (
        <div className="px-4 max-md:flex-col flex items-start pt-[4.6%] max-md:max-w-[440px] max-md:w-full max-md:mx-auto">
        <div className="md:w-1/2 flex justify-end pr-[3.8%]">
          <img src="/mv-img.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="max-w-[840px] w-full md:ml-[-12%] pt-[12%] md:pt-[20%]">
            <h1 className="text-[36px] lg:text-[96px] font-bold leading-tight tracking-tighter">
            「集客」を <br />
              もっとデジタルに。
            </h1>
            <div className="md:ml-[3.5%]">
              <p className="text-[20px] lg:text-[30px] font-bold mt-[7%] leading-snug">
              紙のクーポンからNFTクーポンへ<br />新しい時代のクーポン体験！
              </p>
              <p className="text-[14px] lg:text-[16px] font-medium max-w-[608px] mt-[3%] leading-[1.8]">
                私たちは、より便利で魅力的なクーポン体験を提供するために進化しました。<br />
                紙のクーポンが過去のものとなり、今やNFTクーポンが最先端登場しました。これからは、あなたのお気に入りの商品やサービスを手に入れるためのクーポンが、デジタルな世界でより簡単に、よりエキサイティングに利用できるようになります。
              </p>
            </div>
            <div className="flex justify-center md:justify-end py-[5%] px-[3%]">
              <Button link="/">NFTクーポンを作る</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  