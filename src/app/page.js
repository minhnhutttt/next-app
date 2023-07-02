import Link from "next/link";
import Title from "./components/title";
import Header from "./header/header";
import Step from "./components/step";
import Memo from "./components/meno";
import PageWrapper from "./page-wrapper";

export default function Home() {
  return (
    <main className="mb-[46%]">
      <Header>
        DIVER Wallet <br className="md:hidden" />
        登録方法
      </Header>
      <div className="px-5 py-16 md:py-[112px]">
        <div className="mb-6 flex justify-center md:mb-10">
          <img className=" max-md:w-[160px]" src="/ic-w.png" alt="" />
        </div>
        <Title>①ダイバーウォレットをダウンロード</Title>
        <div className="mx-auto mt-10 flex w-full max-w-[400px] justify-between max-md:flex-col max-md:space-y-[10%] md:mt-20 md:max-w-[970px]">
          <div className="flex max-w-[432px] flex-col items-center rounded-[20px] bg-white px-5 py-8 shadow-[1px_1px_28px_rgba(70,94,125,0.3)] md:w-[48%] md:rounded-[40px] md:py-16">
            <div className="mb-5 text-center text-xl font-bold md:mb-7 md:text-2xl">
              iOS版
            </div>
            <Link href="#">
              <img src="/apple.png" alt="" />
            </Link>
            <div className="mb-2 mt-5">
              <img src="/apple-qr.png" alt="" />
            </div>
          </div>
          <div className="flex max-w-[432px] flex-col items-center rounded-[20px] bg-white px-5 py-8 shadow-[1px_1px_28px_rgba(70,94,125,0.3)] md:w-[48%] md:rounded-[40px] md:py-16">
            <div className="mb-5 text-center text-xl font-bold md:mb-7 md:text-2xl">
              Android 版
            </div>
            <Link href="#">
              <img src="/google.png" alt="" />
            </Link>
            <div className="mt-2">
              <img src="/google-qr.png" alt="" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[60px] flex w-full max-w-[440px] md:mt-[96px] md:max-w-[950px]">
          <div className="flex w-full bg-[#d6e8ff] px-6 pb-3 pt-[42px] max-md:flex-col md:h-[200px] md:px-[60px]">
            <div className="flex gap-10 max-md:justify-center">
              <Link href="">
                <img src="/applestore.png" alt="" />
              </Link>
              <Link href="">
                <img src="/google-play.png" alt="" />
              </Link>
            </div>
            <div className="mt-6 md:ml-[50px] md:mt-2">
              <div className="shadow-[1px_1px_20px_rgba(70,94,125,0.2)]">
                <img src="/search.png" alt="" />
              </div>
              <div className="mt-4 text-lg font-bold">
                アプリを検索する時は「diver wallet」と入力してください。
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[60px] flex flex-col space-y-[10%] md:mt-[90px] md:space-y-[4.8%]">
          <Step
            title="②「新しいウォレットを作成する」をタップ"
            imgSrc="/step-2.png"
          ></Step>
          <Step title="③セキュリティパスワードを入力する" imgSrc="/step-3.png">
            <Memo>
              ● 8 文字以上
              <br />● 文字と数字を含む
            </Memo>
          </Step>
          <Step title="④ウォレット名を決めて次へ" imgSrc="/step-4.png">
            <Memo>● 1〜２０文字以内</Memo>
          </Step>
          <Step title="⑤確認内容をチェックして次へ" imgSrc="/step-5.png"></Step>
          <Step
            title={
              <>
                ⑥ウォレット復元用
                <br />
                リカバリーフレーズをスキップ
              </>
            }
            imgSrc="/step-6.png"
          >
            <Memo>
              ●
              ウォレット復元用リカバリーフレーズは「ウォレットの詳細」から確認できます。
            </Memo>
            <div className="flex h-10 w-full max-w-[290px] items-center justify-center rounded-[5px] bg-[#18539d] bg-[url('/arr.png')] bg-[center_right_16px] bg-no-repeat text-lg font-medium text-white md:h-[50px]">
              <Link href="/">後から確認する方法</Link>
            </div>
          </Step>
          <Step title="⑦アプリ内カメラを起動する" imgSrc="/step-7.png">
            <Memo>
              ● <img className="inline" src="/ic.png" alt="" />
              右上のアイコンをタップし、QRコード読み込み画面を表示させます。
            </Memo>
          </Step>
          <Step title="⑧QRコードを読み込む" imgSrc="/step-8.png"></Step>
          <Step title="⑨読み込んだNFTを受け取る" imgSrc="/step-9.png"></Step>
          <Step title="⑩位置情報をオンにする" imgSrc="/step-10.png">
            <Memo>●スマートフォンの位置情報を有効にしてください。</Memo>
          </Step>
          <Step
            title="⑩位置情報をオンにする"
            imgSrc="/step-11-1.png"
            imgSecondSrc="/step-11-2.png"
          ></Step>
          <Step title="⑪NFTタブで画像を確認する" imgSrc="/step-12.png"></Step>
        </div>
      </div>
    </main>
  );
}
