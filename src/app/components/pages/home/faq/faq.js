"use client";
import FaqItem from "./faqItem";

const faq = [
  {
    id: 1,
    question: "次世代アプリとはなんですか？",
    awnser: (
      <>
        次世代アプリとは、ブロックチェーン技術を活用して開発されたDIVER（ダイバー）というプロジェクトから生まれたアプリの総称のことです。
        <br />
        <br />
        全ての次世代アプリに共通する特徴としては、セキュリティが高く、プライバシーが完全に守られた状態で各アプリの機能を利用できる点が特徴的です。
        <br />
        <br />
        一般的なアプリの場合、利用者の個人情報や利用履歴などが運営会社のサーバーに蓄積されるため、なんらかの事情で情報が流出したり、盗み見られたりするリスクと隣り合わせです。
        <br />
        <br />
        次世代アプリはそのようなリスクとは無縁です。安心して利用ができます。
      </>
    ),
  },
  {
    id: 2,
    question: "次世代アプリにはどんなものがありますか？",
    awnser: (
      <>
        2024年1月時点では、次世代スキャンのほかに
        <br />
        次世代アドレス
        <br />
        次世代チャット
        <br />
        次世代ドメイン
        <br />
        次世代タグ
        <br />
        がリリース済みです。
        <br />
        今後も新しい次世代アプリが続々とリリースされていく予定です。次世代アプリをまとめたポータルサイト「次世代アプリ大集合」に定期的に訪れていただけますと、新しい次世代アプリをもれなくチェックすることができます。
      </>
    ),
  },
  {
    id: 3,
    question:
      "次世代アプリのすべての活動ログが次世代スキャンで確認できるのですか？",
    awnser: (
      <>
        はい、次世代スキャンで確認できる項目であれば、すべての次世代アプリと連携して活動ログを確認することが可能です。
      </>
    ),
  },
  {
    id: 4,
    question: "次世代スキャンで確認するために何か必要なものはありますか？",
    awnser: (
      <>
        次世代スキャンで何か確認するためには、確認したいアドレスのアドレスが必要です。アドレスのアドレスを検索窓に貼り付けて検索することで確認が可能です。
      </>
    ),
  },
  {
    id: 5,
    question: "次世代アドレスとはなんですか？",
    awnser: (
      <>
        次世代アドレスとは、アプリDIVER
        Wallet（ダイバーウォレット）のことです。<br />
        <br />
        ダイバーウォレットは、暗号通貨（※）やNFTの送受信や管理ができるお財布機能と、ほかの次世代アプリへのログインアドレスとして展開利用できるログイン機能がメイン機能で、一つのアドレスで次世代アプリを利用するための重要な役割を担っています。<br />
        <br />
        ※ダイバーウォレットではDIV（ダイバーコイン）、BTC（ビットコイン）、ETH（イーサリアム））の3種類の暗号通貨に対応しています。
      </>
    ),
  },
  {
    id: 6,
    question: " DIV（ダイバーコイン）とはなんですか？",
    awnser: (
      <>
        次世代アプリを生み出しているプロジェクト「DIVER（ダイバー）」で流通している暗号通貨です。DIV（ダイバーコイン）は、次世代アプリのユーザー間での送受信や、次世代アプリのサービス拡張時の決済などに利用されています。
      </>
    ),
  },
  {
    id: 7,
    question: "NFTとはなんですか？",
    awnser: (
      <>
        NFTとは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に`&quot;ひとつだけ`&quot;であることを証明するために使われています。
      </>
    ),
  },
  {
    id: 8,
    question: "トランザクションとはなんですか？",
    awnser: (
      <>
        トランザクションとは取引のことです。次世代スキャンではよくトランザクション（transaction）という言葉がよく出てきますが、一つ一つの取引または取引群のことを指していることがほとんどです。覚えておいてくださいね。
      </>
    ),
  },
  {
    id: 9,
    question: "使い方がわからない時はどうしたらいいですか？",
    awnser: (
      <>
        次世代アプリのサポート専用の公式LINEがありますので、どうしてもわからない時などは公式LINEを友だち追加してメッセージをお送りください。サポートいたします。
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="px-5 pb-20 pt-10 md:pb-[150px] md:pt-20">
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="text-center font-roboto text-[28px] font-bold md:text-[48px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faq.map(({ id, question, awnser }) => (
            <FaqItem key={id} question={question} awnser={awnser} />
          ))}
        </div>
      </div>
    </div>
  );
}
