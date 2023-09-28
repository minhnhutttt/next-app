import Card from "@/app/components/card";

export default function category() {
  return (
    <main>
      <div className="w-full max-w-[1300px] mx-auto px-8 mb-[226px]">
        <div className="flex justify-between py-2 border-b border-black">
          <p className="text-[34px] font-semibold">ウオレット</p>
          <p className="text-[28px] font-semibold">8 Answers</p>
        </div>
        <div className="p-9">
            <div className="text-[20px] font-light bg-[#F0F0F0] p-4">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストストテキストテキストストテキストテキストストテキストテキストストテキストテキスト
            </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        <Card link="/category/test/1" imgSrc="/dummy-2.png" tags={['タブレット','NFT']} title="〇〇の作り方" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="7" />
        </div>
      </div>
    </main>
  )
}
