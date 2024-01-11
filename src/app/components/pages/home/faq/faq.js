"use client";
import FaqItem from "./faqItem";
import SectionTitle from "../components/sectionTitle";

const faq = [
  {
      id: 1,
      question: '「ギガ二刀流Wi-Fi 武将プラン」って何ですか？',
      awnser: <>「ギガ二刀流Wi-Fi 武将プラン」は、高速な通信速度と大容量のストレージを提供するサービスです。このサービスを利用することで、快適なインターネット環境を楽しむだけでなく、豊富なデータをオンラインストレージに保存することができます。日々の生活をより充実させるためのサービスです。</>
  },
  {
    id: 2,
    question: 'ギガ二刀流Wi-Fiは、どこで入手できますか？',
    awnser: <>商品購入専用ページから支払い方法と発送先をご入力いただきご注文ください。'</>
  },
  {
    id: 3,
    question: '利用料金はどれくらいかかりますか？',
    awnser: <>
    端末ご購入時は、100GB付きモデルになっています。それを使い切るまでは、追加費用はかかりません。<br />初回にご購入いただいた端末のGBが無くなりましたら、追加GBチャージをご購入いただくシステムですので、追加チャージされる場合は、別途費用が発生いたします。</>
  },
  {
    id: 4,
    question: '契約や縛りはありますか？',
    awnser: <>
      ご契約は必要ありません。<br />
      お手元にWiFiルーターが届き次第、インターネットのご利用ができます。
    </>
  },
  {
    id: 5,
    question: 'ポケットWi-Fiはどのくらいのデバイスに接続できますか？',
    awnser: <>
      通常、同時接続台数は10台です。
    </>
  },
  {
    id: 6,
    question: '通信ギガやストレージを使い切った後はどうなりますか？',
    awnser: <>
      通信ギガやストレージを使い切ると、インターネット・ストレージがご利用できなくなります。<br />
      追加データをご購入いただきますと再度インターネット・ストレージがご利用いただけます。
    </>
  },
  {
    id: 7,
    question: 'バッテリーの持続時間はどれくらいですか？',
    awnser: <>
      連続使用可能時間は、約20時間です。
    </>
  },
  {
    id: 8,
    question: 'ポケットWi-Fiを使うためにSIMカードは必要ですか？',
    awnser: <>
      一部のポケットWi-Fiは内蔵のSIMカードを使用しますが、他のものは外部のSIMカードが必要です。
    </>
  },
  {
    id: 9,
    question: 'セキュリティはどうなっていますか？',
    awnser: <>
      ポケットWi-Fiはパスワードで保護され、安全な接続を提供します。
    </>
  },
  {
    id: 10,
    question: '有効期間1年間は、いつからですか？',
    awnser: <>
      ルーターの電源を入れ、初期設定をしてから有効期間１年間ご利用いただけます。
    </>
  },
  {
    id: 11,
    question: 'IMEI番号はどこにありますか？',
    awnser: <>
      IMEI番号は『端末の裏面』もしくは端末画面内にある『本機について』に記載されています。
    </>
  },
  {
    id: 12,
    question: '海外でも利用できますか？',
    awnser: <>
      海外でのご利用はできません。
    </>
  },
  {
    id: 13,
    question: '間違えて注文した場合返品や交換はできますか？',
    awnser: <>
      返品や交換はできません。<br />
      お届け日より7日以内（到着日を含む）に初期不良とみられる不具合が発生した場合、 弊社にて交換させて頂きますので、症状など詳細をご連絡ください。
    </>
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="px-5 pb-10 md:pb-[150px] md:pt-20 pt-10">
      <div className="mx-auto w-full max-w-[920px]">
        <SectionTitle>FAQ</SectionTitle>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[30px]">
          {faq.map(({ id, question, awnser }) => (
            <FaqItem
            key={id}
              question={question}
              awnser={awnser}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
