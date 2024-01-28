"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PageTitle from "../components/common/pageTitle";
import TextBlock from "../components/common/textBlock";

export default function PrivacyPolicy() {
    const animateRefs = useScrollAnimation("fadeUp");
  return (
    <>
      <PageTitle>プライバシーポリシー</PageTitle>
      <div className="px-5">
        <div ref={animateRefs} className="w-full max-w-[1190px] mx-auto opacity-0 font-worksans">
            <div className="flex justify-end">
                <p className="text-black md:text-[15px] text-[12px] font-bold">
                    制定　2023.01.26 <br />
                    株式会社ワールドスキャンプロジェクト
                </p>
            </div>
        </div>
        <div className="mx-auto mb-16 mt-5 w-full max-w-[1000px] space-y-9 md:mb-20 md:mt-11">
            <div className="md:mb-14">
                <TextBlock>
                    当社は、お客様の個人情報の保護について、次のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定め、本ポリシーに基づき適正に個人情報を取り扱います。<br />
                    なお、本ポリシーで使用する用語の意味は、個人情報の保護に関する法律（以下、「個人情報保護法」といいます。）に準拠するものとします。
                </TextBlock>
            </div>
            <TextBlock title="1. 取得する個人情報の項目">
                当社は、お客様に関する次に掲げる個人情報を取得します。 <br />
                （1）本人確認に関する情報 <br />
                氏名、住所、郵便番号、性別、生年月日、電話番号、メールアドレス、アカウントID及びパスワード、SNSアカウント情報、免許証・住民票等の公的証明書に関する情報等 <br />
                （2）お取引に関する情報 <br />
                お取引内容及び購入履歴に関する情報等 <br />
                （3）決裁に関する情報 <br />
                　 金融機関口座に関する情報、決済及びその方法に関する情報等 <br />
                （4）サービスのご利用に際して取得する情報 <br />
                　クッキー（Cookie）ID等のオンライン上の識別子、ご利用の端末情報、位置情報、閲覧履歴その他のサービスの利用状況（アクセスログ、IPアドレス、ブラウザ情報、ブラウザの言語設定等を含みます。） <br />
                （5）その他の情報 <br />
                お客様から当社へのお問い合せ・ご連絡等に関する情報等
            </TextBlock>
            <TextBlock title="2. 利用目的">
                当社は、お客様の個人情報を、次に掲げる利用目的（以下、「本利用目的」といいます。）の範囲内において、取得及び利用いたします。
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">1.</span>サービスへの登録及びサービス利用時の本人確認並びにお客様の管理のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">2.</span>商品等のお届け、ご提供、アフターサービスのため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">3.</span>商品等及びサービスの対価のご請求のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">4.</span>不正行為等の防止及び対応のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">5.</span>サービスの保守、管理のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">6.</span>マーケティングデータの調査及び分析、並びに、マーケティング施策の検討及び実施のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">7.</span>当社又は第三者の媒体において、お客様の属性・行動履歴の分析に基づく興味及び関心等に合わせ、当社又は第三者の商品等及びサービスの提供、勧誘、広告その他のマーケティングをするため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">8.</span>キャンペーン、懸賞企画、アンケートの実施のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">9.</span>商品等及びサービスの改善のため、並びに、新たな商品等及びサービスの企画、研究及び開発のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">10.</span>お問い合わせ対応及びお客様へのご連絡のため</p>
                    <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">11.</span>本ポリシー記載の方法による、第三者に対する提供</p>
            </TextBlock>
            <TextBlock title="3. 第三者提供">
                （1）当社は、次に掲げる場合を除き、当社が取り扱う個人情報を、あらかじめお客様の同意を得ないで、第三者に提供いたしません。
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">1.</span>法令に基づく場合</p>
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">2.</span>人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</p>
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">3.</span>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき</p>
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">4.</span>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</p>
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">5.</span>その他法令で認められる場合</p>
                （2）上記（1）にかかわらず、当社は、次に掲げる場合には、当社が取り扱う個人情報を第三者に提供することがあります。
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">1.</span>お客様の興味・関心等に合わせた広告の配信及びその成果確認並びにサービスの提供のために、それ自体では特定の個人を識別できないようにした情報を当社と提携している広告配信事業者に提供する場合</p>
            </TextBlock>
            <TextBlock title="4. 安全管理措置">
                当社は、その取り扱う個人情報の漏洩、滅失又は毀損の防止その他個人情報の安全管理のために、必要かつ適切な措置を講じます。当社が講じる安全管理措置については、第１０項記載のお問い合わせ窓口までお問い合わせください。
            </TextBlock>
            <TextBlock title="5. 開示等の請求">
                当社は、次に定めるとおり開示後の請求（利用目的の通知、個人情報又は第三者提供記録の開示、訂正・追加・削除、利用の停止・第三者提供の停止の請求をいいます。）に対応します。<br />
                （1）利用目的の通知又は個人情報若しくは第三者提供記録の開示<br />
                お客様は、当社に対し、下記（4）に定める手続に従って、個人情報保護法において認められる範囲内において、利用目的の通知を求め、又は、個人情報若しくは第三者提供記録の開示を請求することができます。ただし、当社は、次の各号のいずれかに該当する場合は、閉示を行わないことがあります。
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">1.</span>開示することでご本人様又は第三者の生命、身体、財産その他の権利利益を書するおそれがある場合</p>
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">2.</span>開示することで当社の業務の適正な実施に著しい支障を及ほすおそれがある場合</p>
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">3.</span>開示することが法令に違反することとなる場合</p>
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">4.</span>開示の請求がご本人様からであることが確認できない場合</p>
                なお、利用目的の通知又は個人情報若しくは第三者提供記録の開示を請求される場合には、下記（4）に定める開示手数料をいただきます。<br />
                （2）訂正・追加・削除<br />
                お客様は、下記（4）に定める手続に従って、個人情報の訂正・追加・削除を請求することができます。その場合、当社は、利用目的の達成に必要な範囲内で遅滞なく調査を行い、その結果に基づき、個人情報保護法において認められる範囲内において、当該個人情報の訂正・追加・削除を行います。<br />
                （3）利用の停止又は第三者提供の停止<br />
                お客様は、下記（4）に定める手続に従って、個人情報の利用の停止又は第三者提供の停止を請求することができます。その場合、当社は、個人情報保護法に従って適切に対応いたします。<br />
                （4）手続<br />
                お客様は、開示等の請求を行う場合には、当社所定の請求書（下記ア）に所定事項を記入の上、本人確認書類（下記イ）を同封の上、当社の指定する送付先（下記ウ）までご郵送ください。また、利用目的の通知及び個人情報又は第三者提供記録の開示については、1回の請求につき1,000円の手数料をいただきます。請求書記載の振込先までお振込みください。なお、不開示及び利用目的の非通知の場合についても、所定の手数料をいただきます。<br />
                ア　請求書<br />
                請求書については、末尾の連絡先よりお問い合わせください。<br />
                イ　本人確認書類<br />
                ■お客様ご本人による請求の場合<br />
                ・お客様ご本人の本人確認書類（個人番号カード（表面）、運転免許証、健康保険被保険者証、又はパスポートの写し(いずれか一つ))<br />
                ■任意代理人による請求の場合<br />
                上記の「お客様ご本人による請求の場合」に記載されている書類に加え、下記の書類<br />
                ・委任状<br />
                ・任意代理人の本人確認書類（個人番号カード（表面）、運転免許証、健康保険被保険者証、又はパスポートの写し（いずれか一つ））<br />
                ■法定代理人による請求の場合<br />
                上記の「お客様ご本人による請求の場合」に記載されている書類に加え、下記の書類<br />
                ・法定代理権の存在を確認できる書類（戸籍謄本又は成年後見登記事項証明書）<br />
                ・法定代理人の本人確認事類 （個人番号カード（表面）、運転免許証、健康保険被保険者証、又はパスポートの写し（いずれか一つ））<br />
                ウ　送付先<br />
                〒169-0051 <br />
                　　　　住所　東京都新宿区西早稲田２丁目１８−２３ SKY esta 2F<br />
                株式会社ワールドスキャンプロジェクト　個人情報開示請求窓口
            </TextBlock>
            <TextBlock title="6. Cookie の取扱い">
            （1）Cookieの利用について<br />
                当社のウェブサイトでは、お客様により適切なサービスをご提供するためCookie（クッキー）その他のトラッキング又は解析を行うための類似技術（以下、総称して「Cookie」といいます。）を使用しております。<br />
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">1.</span>Cookieの概要</p>
                Cookieとは、任意の文字が書かれた小さなファイルのことで、お客様がウェブサイトを関覧した際に、ウェブサーバとお客様のインターネット関覧ソフト（ブラウザ）との間でやりとりされ、お客様の端末に保存されるものです。これを利用することにより、お客様の閲覧履歴、サービス利用履歴、位置情報等、個人が特定できない属性情報を取得することがあります。<br />
                お客様は、ブラウザの設定により、事前に、Cookieを使用しているサイトであることを表示したり、Cookieの無効化及び保存済みのCookieの削除をしたりすることができます。Cookieの利用を拒否し又はCookieを削除した場合、ウェブサイトでご利用いただくことができる機能が制限される可能性がありますのでご了承ください。<br />
                <p className="flex"><span className="flex-[0_0_20px] break-keep mr-1 text-right">2.</span>第三者が提供する閲覧履歴等の収集・分析サービスの利用について</p>
                当社は、Googleが提供するGoogleアナリティクス、Metaが提供するFacebookの分析ツール（Metaピクセルを含みますが、これに限られません。）、株式会社Faber Companyが提供するミエルカ（ミエルカSEO、ミエルカヒートアップを含みますが、これらに限られません。）を利用しています。<br />
                当社は、上記第三者が当社又は当該第三者の設定するCookieをもとにしてお客様の閲覧履歴を収集し、分析した結果を受け取り、お客様の利用状況の把握や、当社のサービスに利用する場合があります。上記第三者によるデータの取扱い等については、以下の各社のウェブサイトをご確認ください。<br />
                GOOGLE：<a href="https://policies.google.com/technologies/partner-sites" target="_blank">https://policies.google.com/technologies/partner-sites</a><br />
                Meta：<a href="https://www.facebook.com/legal/technology_terms" target="_blank">https://www.facebook.com/legal/technology_terms　</a><br />
                株式会社Faber Company：<a href="https://mieru-ca.com/privacy-policy/" target="_blank">https://mieru-ca.com/privacy-policy/　</a><br />
            </TextBlock>
            <TextBlock title="7. お問い合わせ窓口">
                ご意見、ご質問、苦情のお申出その他個人情報の取扱いに関するお問い合わせは、下記の窓口までご連絡ください。<br />
                　住所：東京都新宿区西早稲田２丁目１８−２３ SKY esta 2F<br />
                　E-mail：info@world-scan-project.com
            </TextBlock>
        </div>
      </div>
    </>
  );
}