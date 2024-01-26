"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";
import FaqItem from "./components/faqItem";

const faq = [
  {
    id: 1,
    question: "次世代アカウントはどうやって作りますか？",
    awnser: (
      <>
        <span>
          下記から対応するOSを選びインストール後、案内に従って作成して下さい。
        </span>
        <div className="mt-3 flex flex-wrap gap-3 md:mt-6 md:gap-5">
          <Link href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank">
            <img
              className="max-md:w-[120px]"
              src="/images/btn-app-store.png"
              alt=""
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&pli=1" target="_blank">
            <img
              className="max-md:w-[120px]"
              src="/images/btn-google-play.png"
              alt=""
            />
          </Link>
          <Link href="https://chrome.google.com/webstore/detail/diver-wallet/pdlocjdlejekdbpghdcmedeacpkfiiof/related?utm_source=ext_app_menu" target="_blank">
            <img
              className="max-md:w-[120px]"
              src="/images/btn-chrome-web-store.png"
              alt=""
            />
          </Link>
        </div>
      </>
    ),
  },
  {
    id: 2,
    question: "次世代アカウントの作成に必要な情報はありますか？",
    awnser: (
      <>
        いいえ、ありません。
        <br />
        個人情報の提出を一切必要とせず、アカウントを作成いただけます。
      </>
    ),
  },
  {
    id: 3,
    question: "取得する際にお金はかかりますか？",
    awnser: (
      <>
        いいえ、かかりません。
        <br />
        永年無料でお使い頂けます。
      </>
    ),
  },
  {
    id: 4,
    question: "対応しているウォレットは何ですか？",
    awnser: (
      <>
        DIVER
        Walletに対応しています。暗号資産の管理やNFTを無料で送受信できる「DIVER
        Wallet」をはじめ、Web3.0型チャットアプリ「Knock(ノック)」、次世代のトレカ&クーポンサービス「トレクー」、NFTと位置情報をQRコードにセットできる「ChainPin（チェインピン)」などのサービスでご利用頂けます。
      </>
    ),
  },
  {
    id: 5,
    question: "管理できる暗号資産は何ですか？",
    awnser: (
      <>
        ビットコイン(BTC)、イーサリアム(ETH)、ダイバー(DIV)です。
        <br />
        ※2024年1月現在
      </>
    ),
  },
  {
    id: 6,
    question: "NFTの受信が無料なのはよく聞きますが、送信もずっと無料ですか？",
    awnser: (
      <>
        はい、無料でご利用いただけます。
        <br />
        NFTを送受信するために使用されるブロックチェーンであるダイバーチェーンは、NFT
        <br />
        の送受信に関して永久に無料です。
      </>
    ),
  },
];

export default function FAQ() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="faq" className="px-5 pb-10 pt-10 md:pb-[100px] md:pt-20">
      <div className="mx-auto w-full max-w-[920px]">
        <h3
          ref={animateRefs}
          className="text-center font-noto text-[24px] font-bold text-white md:text-[48px]"
        >
          FAQ
        </h3>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[36px] md:space-y-[40px]">
          {faq.map(({ id, question, awnser }) => (
            <FaqItem key={id} question={question} awnser={awnser} />
          ))}
        </div>
      </div>
    </div>
  );
}
