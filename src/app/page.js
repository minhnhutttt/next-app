import Link from "next/link";
import Title from "./components/title";
import Header from "./header/header";
import Step from "./components/step";
import Memo from "./components/meno";

export default function Home() {
  return (
    <main className="mb-[46%]">
        <Header>DIVER Wallet <br className="md:hidden" />登録方法</Header>
        <div className="py-16 md:py-[112px] px-5">
          <div className="flex justify-center md:mb-10 mb-6">
            <img className=" max-md:w-[160px]" src="/ic-w.png" alt="" />
          </div>
          <Title>①ダイバーウォレットをダウンロード</Title>
          <div className="flex w-full max-w-[400px] max-md:space-y-[10%] md:max-w-[970px] max-md:flex-col mx-auto md:mt-20 mt-10 justify-between">
            <div className="md:w-[48%] max-w-[432px] bg-white md:rounded-[40px] rounded-[20px] shadow-[1px_1px_28px_rgba(70,94,125,0.3)] flex flex-col items-center px-5 py-8 md:py-16">
              <div className="text-center text-xl md:text-2xl font-bold md:mb-7 mb-5">iOS版</div>
              <Link href="#">
                <img src="/apple.png" alt="" />
              </Link>
              <div className="mt-5 mb-2">
                <img src="/apple-qr.png" alt="" />
              </div>
            </div>
            <div className="md:w-[48%] max-w-[432px] bg-white md:rounded-[40px] rounded-[20px] shadow-[1px_1px_28px_rgba(70,94,125,0.3)] flex flex-col items-center px-5 py-8 md:py-16">
              <div className="text-center text-xl md:text-2xl font-bold md:mb-7 mb-5">Android 版</div>
              <Link href="#">
                <img src="/google.png" alt="" />
              </Link>
              <div className="mt-2">
                <img src="/google-qr.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex w-full md:max-w-[950px] max-w-[440px] mx-auto md:mt-[96px] mt-[60px]">
            <div className="bg-[#d6e8ff] md:h-[200px] max-md:flex-col flex pt-[42px] px-6 md:px-[60px] pb-3 w-full">
              <div className="flex max-md:justify-center gap-10">
              <Link href="">
                <img src="/applestore.png" alt="" />
              </Link>
              <Link href="">
                <img src="/google-play.png" alt="" />
              </Link>
              </div>
              <div className="md:ml-[50px] mt-6 md:mt-2">
                <div className="shadow-[1px_1px_20px_rgba(70,94,125,0.2)]">
                  <img src="/search.png" alt="" />
                </div>
                <div className="text-lg font-bold mt-4">アプリを検索する時は「diver wallet」と入力してください。</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:mt-[90px] mt-[60px] md:space-y-[4.8%] space-y-[10%]">
            <Step title="②「新しいウォレットを作成する」をタップ" imgSrc="/step-2.png"></Step>
            <Step title="③セキュリティパスワードを入力する" imgSrc="/step-3.png">
              <Memo>
              ● 8 文字以上<br />
                  ● 文字と数字を含む
              </Memo>
            </Step>
            <Step title="④ウォレット名を決めて次へ" imgSrc="/step-4.png">
              <Memo>
              ● 1〜２０文字以内
              </Memo>
            </Step>
            <Step title="⑤確認内容をチェックして次へ" imgSrc="/step-5.png"></Step>
            <Step title={<>⑥ウォレット復元用<br />リカバリーフレーズをスキップ</>} imgSrc="/step-6.png">
              <Memo>
              ● ウォレット復元用リカバリーフレーズは「ウォレットの詳細」から確認できます。
              </Memo>
              <div className="bg-[url('/arr.png')] bg-no-repeat bg-[center_right_16px] flex items-center justify-center bg-[#18539d] w-full max-w-[290px] h-10 md:h-[50px] text-white text-lg font-medium rounded-[5px]">
                <Link href="/">後から確認する方法</Link>
              </div>
            </Step>
            <Step title="⑦アプリ内カメラを起動する" imgSrc="/step-7.png">
              <Memo>
              ● <img className="inline" src="/ic.png" alt="" />右上のアイコンをタップし、QRコード読み込み画面を表示させます。
              </Memo>
            </Step>
            <Step title="⑧QRコードを読み込む" imgSrc="/step-8.png">
            </Step>
            <Step title="⑨読み込んだNFTを受け取る" imgSrc="/step-9.png">
            </Step>
            <Step title="⑩位置情報をオンにする" imgSrc="/step-10.png">
            <Memo>
            ●スマートフォンの位置情報を有効にしてください。
              </Memo>
            </Step>
            <Step title="⑩位置情報をオンにする" imgSrc="/step-11-1.png" imgSecondSrc="/step-11-2.png">
            </Step>
            <Step title="⑪NFTタブで画像を確認する" imgSrc="/step-12.png">
            </Step>
          </div>
        </div>
    </main>
  )
}
