import FaqItem from "./faqItem";

const data = [
    {
      id: "01",
      question: "名前の購入方法は？",
      awsner:
        "LINEにて友達登録後に、購入希望ボタンからご連絡ください。",
    },
    {
      id: "02",
      question:
        "名前を複数購入することはできますか？",
      awsner:
        "検索窓に希望の名前を入力して検索を行ってください。検索結果のうち、「購入可能」と表示のある名前のみ購入できます。",
    },
    {
      id: "03",
      question: "どのような支払いに対応していますか？",
      awsner:
        "銀行振込での日本円決済が可能です。",
    },
    {
      id: "04",
      question: "対応しているウォレットはどれですか？",
      awsner:
        "DIVER Walletに対応しています。",
    },
    {
      id: "05",
      question: "詳しい料金を教えてください",
      awsner: <>
        文字数やドメインの種類によって異なります。<br/>
        <br/>
        TECHNOLOGY(.web3)<br/>3文字 $40、4文字 $20、5文字 $10、6文字 $5、7文字 $2、8文字以上 $3.2<br/><br/>COLOR(.red、.orange、.yellow、.green、.blue、.indigo、.purple、.gold、.black)
        3文字 $200、4文字 $100、5文字 $50、6文字 $25、7文字 $10、8文字以上 $1.6<br/>
        <br/>ENTERTAINMENT/DREAMS(.player、.dreamer、.kitty、.faily)<br/>3文字 $400、4文字 $200、5文字 $100、6文字 $50、7文字 $20、8文字以上 $3.2<br/><br/>JAPANESE HISTORY(.samurai、.sengoku、.ninja、.bushi)<br/>
        3文字 $1000、4文字 $500、5文字 $250、6文字 $125、7文字 $50、8文字以上 $8<br/><br/>SPACE/HEROES(.star、.hero、.king、.queen)<br/>
        3文字 $2000、4文字 $1000、5文字 $500、6文字 $250、7文字 $100、8文字以上 $16<br/><br/>A-Z(.a、.b、.c、.d、.e、.f、.g、.h、.i、.j、.k、.l、.m、.n、.o、.p、.q、.r、.s、.t、.u、.i
        、.v、.w、.x、.y、.z)<br/>
        3文字 $4000、4文字 $2000、5文字 $1000、6文字 $500、7文字 $200、8文字以上 $32
            </>,
    },
    {
      id: "06",
      question: "更新は必要ですか？",
      awsner: <>
        はい、必要です。 <br />
        1年毎に$1.88の更新料が掛かります<br />
        ※2024年1月時点
      </>,
    },
    {
      id: "07",
      question: "購入後、別のアカウントに名前を割り当てることはできますか？",
      awsner: <>
        はい、可能です。 <br />
        購入後NFTとして次世代ドメインが届きますので、そちらを別のアカウントに送信してください
      </>
    },
    {
      id: "08",
      question: <>
        通常のドメインの「Who is」情報のように <br />
        Web3.0ドメインを購入すると個人情報が公になりますか？
      </>,
      awsner: <>
        いいえ、なりません。<br />
        ブロックチェーン上で管理されるため、所有者は匿名でいることができます。<br />
        但し、ドメインの取引履歴やウォレットアドレスなどは公開され、誰でもアクセスすることができます。
      </>
    },
  ];
export default function Faq() {
    return (
        <div className="md:pt-[106px] pt-10 px-5">
            <h4 className="font-bold text-center font-roboto md:text-[64px] text-[32px] leading-[1.36] mb-5">FAQ</h4>
            <div className="w-full mx-auto max-w-[900px] mt-5 border-t border-black md:mt-4">
                {data.map((data) => {
                    return (
                    <FaqItem
                        question={data.question}
                        awnser={data.awsner}
                        id={data.id}
                        key={data.id}
                    />
                    );
                })}
            </div>

        </div>
    )
}