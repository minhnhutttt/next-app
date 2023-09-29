import Category from "./components/category";

export default function Home() {
  return (
    <main className="border-t border-black">
      <div className="mx-auto w-full max-w-[1324px] px-5 md:px-[30px]">
        <p className="py-6 text-[18px] md:text-[26px] font-semibold px-3">
          動画でWeb3.0を理解する新しい形のヘルプメディア
        </p>
        <div className="mb-[188px] space-y-9">
          <div className="flex max-md:flex-col max-md:gap-4 items-start">
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="ウオレット"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
              />
              <div className="flex md:flex-col md:gap-6">
                <Category
                  link="/category/test"
                  imgSrc="/dummy.png"
                  title="タグ"
                  content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                  answer="29"
                  sm
                />
                <Category
                  link="/category/test"
                  imgSrc="/dummy.png"
                  title="タグ"
                  content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                  answer="29"
                  sm
                />
              </div>
              <div className="flex md:flex-col md:gap-6">
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="タグ"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
                sm
              />
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="タグ"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
                sm
              />
              </div>
          </div>
          <div className="flex items-start justify-end">
            <div className="flex flex-col gap-6">
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="タグ"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
                sm
              />
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="タグ"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
                sm
              />
            </div>
            <Category
              link="/category/test"
              imgSrc="/dummy.png"
              title="ウオレット"
              content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              answer="29"
            />
            <div className="flex flex-col gap-6">
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="タグ"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
                sm
              />
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="タグ"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
                sm
              />
            </div>
          </div>
          <div className="flex items-start justify-end">
            <div className="flex flex-col gap-6">
              <Category
                link="/category/test"
                imgSrc="/dummy.png"
                title="タグ"
                content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
                answer="29"
                sm
              />
            </div>
            <Category
              link="/category/test"
              imgSrc="/dummy.png"
              title="ウオレット"
              content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
              answer="29"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
