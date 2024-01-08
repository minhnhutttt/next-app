"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import QAItem from "./qaItem";

export default function QA() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="qa" className="px-5 py-10 md:py-[90px]">
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1240px]">
        <h3
          ref={animateRefs}
          className="text-center text-[24px] font-bold md:text-[42px]"
        >
          ネバーエンディングストレージについて
        </h3>
        <p
          ref={animateRefs}
          className="mt-2 text-center text-[18px] font-black tracking-[0.3em] md:text-[24px]"
        >
          NESを3分で知る！一問一答
        </p>
        <div className="mt-10 grid gap-8 md:mt-[74px] md:grid-cols-2 md:gap-x-10 md:gap-y-11">
          <QAItem
            question="オンラインストレージって何？"
            answer="PC/スマホに必要なだけ容量追加！オンラインだから場所を選ばず簡単接続。"
            imageSrc="/images/icon-about-01.png"
          />
          <QAItem
            question="何が保存できるの？"
            answer="写真・音楽・動画・資料・契約書…あらゆるファイルを簡単アップロード！"
            imageSrc="/images/icon-about-02.png"
          />
          <QAItem
            question="一番の用途は何？"
            answer="安全なファイルの持ち運びや保管に最適！複数デバイスで共有も便利。"
            imageSrc="/images/icon-about-03.png"
          />
          <QAItem
            question="大切な情報が流出したりしない？"
            answer="アンチクラウド（分散化技術）で完全なプライバシー保護を実現！"
            imageSrc="/images/icon-about-04.png"
          />
          <QAItem
            question="他のリスクへの対応は？"
            answer="最先端テクノロジーで情報漏洩をはじめとする7つのリスク（※）を完全に克服！"
            imageSrc="/images/icon-about-05.png"
          />
          <QAItem
            question="ファイルは誰が管理するの？"
            answer="あなた自身です。運営会社にファイルを管理されるリスクを負う必要がありません！"
            imageSrc="/images/icon-about-06.png"
          />
          <QAItem
            question="ファイルは無くならないの？"
            answer="あなた自身が削除しなければファイルは永遠に保存できます。復元力にも自信あり！"
            imageSrc="/images/icon-about-07.png"
          />
          <QAItem
            question="大手クラウドストレージの方が安心じゃないの？"
            answer="大手クラウドだからこそ安心してはいけません。ユーザーが真に安心できる条件は、誰にも干渉されずに使えることです！"
            imageSrc="/images/icon-about-08.png"
          />
          <QAItem
            question="どうせサブスクでしょ？"
            answer="買い切り型でサブスク脱却！あなたの生涯に寄り添い続けます。"
            imageSrc="/images/icon-about-09.png"
          />
          <QAItem
            question="でも高いんでしょ？"
            answer="サブスク型と比べても買い切り型と比べても低コストでご提供！"
            imageSrc="/images/icon-about-10.png"
          />
        </div>
        <div
          ref={animateRefs}
          className="mx-auto mt-8 flex w-full max-w-[736px] gap-2 text-[#666] md:mt-[60px]"
        >
          <p className="text-[13px] leading-loose md:text-[16px]">（※）</p>
          <p className="text-[11px] leading-loose md:text-[12px]">
            ●1. データ漏洩:
            機密情報が不正に外部に公開されること。これは外部の攻撃者によるハッキング、内部関係者による意図的な漏洩、または不注意による誤った情報共有により発生する可能性があります。●2.
            データ侵害:
            権限のない者がデータにアクセスすること。これにはサイバー攻撃やフィッシング、マルウェア、社内のセキュリティポリシーの違反などが含まれます。●3.
            データ改ざん:
            データ改竄とは、権限のない者によるデータの不正な変更や書き換えを指します。●4.
            データ損失:
            重要なデータが消失すること。ハードウェアの故障、ソフトウェアの不具合、人的ミス、自然災害などが原因で起こり得ます。●5.
            ランサムウェア攻撃:
            マルウェアによってデータが暗号化され、金銭を要求される攻撃。データのアクセスが制限されるため、業務に大きな影響を及ぼす可能性があります。●6.
            フィッシング攻撃:
            メールやウェブサイトを通じてユーザーの機密情報（パスワード、クレジットカード情報など）を詐取する詐欺行為。●7.
            内部脅威:
            組織内部の従業員や関係者が意図的または無意識のうちにセキュリティリスクを引き起こすこと。これには情報の誤用や不適切な取り扱いが含まれます。
          </p>
        </div>
      </div>
    </div>
  );
}
