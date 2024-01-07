import AboutItem from "./aboutItem";

export default function About() {
  return (
    <div className="px-5 py-10 md:py-[90px]">
        <div className="w-full md:max-w-[1240px] max-w-[440px] mx-auto">
            <h3 className="text-[24px] md:text-[42px] font-bold text-center">ネバーエンディングストレージについて</h3>
            <p className="text-center md:text-[24px] text-[18px] font-black mt-2 tracking-[0.3em]">NESを3分で知る！一問一答</p>
            <div className="grid md:grid-cols-2 md:gap-x-10 gap-8 md:gap-y-11 mt-10 md:mt-[74px]">
                <AboutItem question="オンラインストレージって何？" answer="PC/スマホに必要なだけ容量追加！オンラインだから場所を選ばず簡単接続。" imageSrc="/images/icon-about-01.png" />
                <AboutItem question="何が保存できるの？" answer="写真・音楽・動画・資料・契約書…あらゆるファイルを簡単アップロード！" imageSrc="/images/icon-about-02.png" />
                <AboutItem question="一番の用途は何？" answer="安全なファイルの持ち運びや保管に最適！複数デバイスで共有も便利。" imageSrc="/images/icon-about-03.png" />
                <AboutItem question="大切な情報が流出したりしない？" answer="アンチクラウド（分散化技術）で完全なプライバシー保護を実現！" imageSrc="/images/icon-about-04.png" />
                <AboutItem question="他のリスクへの対応は？" answer="最先端テクノロジーで情報漏洩をはじめとする7つのリスク（※）を完全に克服！" imageSrc="/images/icon-about-05.png" />
                <AboutItem question="ファイルは誰が管理するの？" answer="あなた自身です。運営会社にファイルを管理されるリスクを負う必要がありません！" imageSrc="/images/icon-about-06.png" />
                <AboutItem question="ファイルは無くならないの？" answer="あなた自身が削除しなければファイルは永遠に保存できます。復元力にも自信あり！" imageSrc="/images/icon-about-07.png" />
                <AboutItem question="大手クラウドストレージの方が安心じゃないの？" answer="大手クラウドだからこそ安心してはいけません。ユーザーが真に安心できる条件は、誰にも干渉されずに使えることです！" imageSrc="/images/icon-about-08.png" />
                <AboutItem question="どうせサブスクでしょ？" answer="買い切り型でサブスク脱却！あなたの生涯に寄り添い続けます。" imageSrc="/images/icon-about-09.png" />
                <AboutItem question="でも高いんでしょ？" answer="サブスク型と比べても買い切り型と比べても低コストでご提供！" imageSrc="/images/icon-about-10.png" />
            </div>
            <div className="flex text-[#666] w-full max-w-[736px] mx-auto gap-2 mt-8 md:mt-[60px]">
              <p className="md:text-[16px] text-[13px] leading-loose">（※）</p>
              <p className="md:text-[12px] text-[11px] leading-loose">
                ●1. データ漏洩: 機密情報が不正に外部に公開されること。これは外部の攻撃者によるハッキング、内部関係者による意図的な漏洩、または不注意による誤った情報共有により発生する可能性があります。●2. データ侵害: 権限のない者がデータにアクセスすること。これにはサイバー攻撃やフィッシング、マルウェア、社内のセキュリティポリシーの違反などが含まれます。●3. データ改ざん: データ改竄とは、権限のない者によるデータの不正な変更や書き換えを指します。●4. データ損失: 重要なデータが消失すること。ハードウェアの故障、ソフトウェアの不具合、人的ミス、自然災害などが原因で起こり得ます。●5. ランサムウェア攻撃: マルウェアによってデータが暗号化され、金銭を要求される攻撃。データのアクセスが制限されるため、業務に大きな影響を及ぼす可能性があります。●6. フィッシング攻撃: メールやウェブサイトを通じてユーザーの機密情報（パスワード、クレジットカード情報など）を詐取する詐欺行為。●7. 内部脅威: 組織内部の従業員や関係者が意図的または無意識のうちにセキュリティリスクを引き起こすこと。これには情報の誤用や不適切な取り扱いが含まれます。
              </p>
            </div>
        </div>
    </div>
  );
}
