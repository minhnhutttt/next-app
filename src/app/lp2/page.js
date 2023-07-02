import Link from "next/link";
import Header from "../header/header";
import Step from "../components/step";

export default function LP2() {
  return (
    <main className="mb-[9%]">
      <Header small>
        ウォレット復元用リカバリーフレーズ
        <br className="max-md:hidden" />
        確認方法
      </Header>
      <div className="mt-[50px] flex flex-col space-y-[10%] px-5 md:mt-[115px] md:space-y-[4.5%]">
        <Step title="①マイウォレットを表示" imgSrc="/lp2-step-1.png"></Step>
        <Step
          title="②ウォレットの詳細ページへ移動"
          imgSrc="/lp2-step-2.png"
        ></Step>
        <Step
          title="③リカバリーフレーズページへ移動"
          imgSrc="/lp2-step-3.png"
        ></Step>
        <Step
          title="④リカバリーフレーズをオフラインで保存"
          imgSrc="/lp2-step-4.png"
        >
          <div className="min-h-[142px] w-full max-w-[390px] space-y-4 rounded-[10px] bg-[#c6ecff] p-4 text-sm font-medium leading-[2] md:w-[300px] md:space-y-6 md:rounded-[20px] md:px-6 md:py-7 md:text-[16px] xl:w-[390px] xl:text-[18px]">
            <p>
              必ずオフラインで安全に保管してください
              (これらの単語を正しい順序で書き留めるかコピーして、安全な場所に保管してください)。スクリーンショットを撮ったり、クリップボードにコピーしたりしないでください。
            </p>
            <p>
              リカバリーフレーズを紛失しダイバーウォレットにアクセスできなくなると、暗号資産にアクセスすることが不可能となり、復元ができないため資産を失います。リカバリーフレーズを失うことは暗号資産を失うことと同じ意味です。英単語のスペルも必ず確認してください。
            </p>
          </div>
        </Step>
      </div>
    </main>
  );
}
