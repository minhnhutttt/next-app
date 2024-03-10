"use client";
import FaqItem from "./faqItem";
import SectionTitle from "../components/sectionTitle";

const faq = [
  {
    id: 1,
    question: "オンラインストレージって何ですか？",
    awnser: (
      <>
        オンラインストレージは、画像や写真、音楽、書類などを保管するできる倉庫のようなものです。
      </>
    ),
  },
  {
    id: 2,
    question: "情報漏洩はしないの？",
    awnser: <>分散化技術で誰が何を保存しているか弊社でもわかりません</>,
  },
  {
    id: 3,
    question: "管理はどうすればいいの？",
    awnser: (
      <>
        運営会社はあなたのストレージへ干渉することができません。接続するDIVER
        Walletの
        <br />
        管理者のみがストレージを管理することができます。
      </>
    ),
  },
  {
    id: 4,
    question: "ログインしないと消えたりしますか？",
    awnser: (
      <>自身で消さない限り保存しているものは削除されることはありません。</>
    ),
  },
  {
    id: 5,
    question: "保存期間はありますか？",
    awnser: (
      <>
        100年を保存保証期間としております。100年経過するとデータは削除されます。
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="px-5 pb-10 pt-10 md:pb-[150px] md:pt-20">
      <div className="mx-auto w-full max-w-[920px]">
        <SectionTitle>FAQ</SectionTitle>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faq.map(({ id, question, awnser }) => (
            <FaqItem key={id} question={question} awnser={awnser} />
          ))}
        </div>
      </div>
    </div>
  );
}
