import Category from "./components/category";

export default function Home() {
  return (
    <main className="border-t border-black">
      <div className="w-full max-w-[1300px] mx-auto px-8">
        <div className="">
          <p className="text-[26px] font-semibold py-6">動画でWeb3.0を理解する新しい形のヘルプメディア</p>
        </div>
        <div className="space-y-9 mb-[188px]">
          <div className="flex justify-end items-start gap-8">
            <Category link="/category/test" imgSrc="/dummy.png" title="ウオレット" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" />
            <div className="flex flex-col gap-7">
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
            </div>
            <div className="flex flex-col gap-7">
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
            </div>
          </div>
          <div className="flex justify-end items-start gap-8">
            <div className="flex flex-col gap-7">
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
            </div>
            <Category link="/category/test" imgSrc="/dummy.png" title="ウオレット" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" />
            <div className="flex flex-col gap-7">
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
            </div>
          </div>
          <div className="flex justify-end items-start gap-8">
            <div className="flex flex-col gap-7">
              <Category link="/category/test" imgSrc="/dummy.png" title="タグ" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" sm />
            </div>
            <Category link="/category/test" imgSrc="/dummy.png" title="ウオレット" content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" answer="29" />
          </div>
        </div>
      </div>
    </main>
  )
}
