import Card from "@/app/components/card";
import Link from "next/link";

export default function Videos() {
  return (
    <main>
      <div className="mx-auto mb-[226px] w-full max-w-[1300px] px-8">
        <div className="flex justify-between items-center border-b border-black py-2">
          <p className="text-[20px] md:text-[34px] font-semibold">ウオレットの作り方</p>
          <p className="text-[16px] md:text-[28px] font-semibold">8 Answers</p>
        </div>
        <div className="pt-[105px] pb-[90px] px-5 flex justify-center">
            <div className="w-[482px]">
          <p className="text-[20px] font-semibold mb-2">何かお探しの動画はありますか？</p>
          <div className="mb-4">
            <input type="text" className="w-full h-[35px] border border-black" />
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-[11px] font-light min-w-[85px] h-[25px] rounded-[17px] bg-[#ECECEC] border border-[#606060] px-2 flex justify-center items-center">
            NFTについて
            </Link>
            <Link href="/" className="text-[11px] font-light min-w-[85px] h-[25px] rounded-[17px] bg-[#ECECEC] border border-[#606060] px-2 flex justify-center items-center">
            NFTについて
            </Link>
            <Link href="/" className="text-[11px] font-light min-w-[85px] h-[25px] rounded-[17px] bg-[#ECECEC] border border-[#606060] px-2 flex justify-center items-center">
            NFTについて
            </Link>
          </div></div>
        </div>
        <div className="mb-3">
            <p className="text-[25px] font-semibold">アクセスの多い動画</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
        </div>
      </div>
    </main>
  );
}
