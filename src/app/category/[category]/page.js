import Card from "@/app/components/card";

export default function category() {
  return (
    <main>
      <div className="mx-auto mb-[226px] w-full max-w-[1300px] px-8">
        <div className="flex justify-between border-b border-black py-2">
          <p className="text-[34px] font-semibold">ウオレット</p>
          <p className="text-[28px] font-semibold">8 Answers</p>
        </div>
        <div className="p-9">
          <div className="bg-[#F0F0F0] p-4 text-[20px] font-light">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストストテキストテキストストテキストテキストストテキストテキストストテキストテキスト
          </div>
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