"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import DomainItem from "./domainItem";

export default function Domain() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="overflow-hidden pt-12 md:pt-[87px]">
      <div className="relative px-5">
        <h4
          ref={animateRefs}
          className="text-center font-dela text-[36px] capitalize leading-[1.13] text-[#F3F5F4] [text-shadow:_2px_2px_0_#98FE01,_-2px_-2px_0_#98FE01,_2px_-2px_0_#98FE01,_-2px_2px_0_#98FE01,_2px_2px_0_#98FE01] md:text-[70px] lg:text-[110px]"
        >
          NEXT
          <br className="md:hidden" /> GENERATION <br />
          DOMAIN
        </h4>
        <h5
          ref={animateRefs}
          className="absolute left-0 top-1/2 mt-3 w-full -translate-y-1/2 text-center font-dela text-[26px] leading-[1.1875] text-black md:text-[44px] lg:text-[64px]"
        >
          次世代ドメイン <br />
          それは、SNSで言う
          <br className="md:hidden" />
          「ユーザー名」
        </h5>
      </div>
      <div className="-md:mt-3 bg-white pt-2">
        <div className="mx-auto w-full max-w-[1256px] px-5">
          <DomainItem
            title={
              <>
                <span className="font-noto text-[12px] font-bold md:text-[16px] lg:text-[20px]">
                  0xc142F69A269e3fa2D000F2f55D27EB8984B123F0
                </span>
                <svg
                  className="mx-auto my-1 max-md:w-6 md:my-3"
                  width="46"
                  height="34"
                  viewBox="0 0 46 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.6986 7.4282e-06L2.29744 3.8088e-06C1.87827 0.0013011 1.4674 0.115435 1.10905 0.330116C0.750699 0.544798 0.458441 0.851896 0.263732 1.21836C0.0690224 1.58483 -0.0207669 1.99678 0.0040349 2.40988C0.0288367 2.82297 0.167286 3.22157 0.404483 3.56276L21.1051 33.0821C21.963 34.306 24.0285 34.306 24.8887 33.0821L45.5893 3.56276C45.8289 3.22228 45.9694 2.82349 45.9955 2.4097C46.0217 1.99592 45.9325 1.58297 45.7376 1.21573C45.5427 0.848491 45.2496 0.540997 44.8901 0.326664C44.5307 0.112331 44.1186 -0.000645556 43.6986 7.4282e-06Z"
                    fill="#111111"
                  />
                </svg>
                <span>yamada.king</span>
              </>
            }
            imageSrc="/images/img-domain-01.png"
          >
            初期アイコンを好みの画像に変更するように、あなただけのWeb3.0アカウントの名前を自由に設定しよう！
            <br />
            <br />
            取得した次世代ドメイン名はNFT化され、ダイバーウォレットに保管されます。NFTなので、譲渡や売買も可能です。
            <br />
            <br />
            Web3.0の世界では、自分自身でIDを所持することができます。
            <br />
            企業によるアカウントの停止や禁止(垢BAN)などはありません。
          </DomainItem>
          <DomainItem
            title={
              <span>
                NFTの無料送信
                <br />
                を簡単に
              </span>
            }
            imageSrc="/images/img-domain-02.png"
          >
            ダイバーウォレットはNFTの受信だけではなく、送信が永年無料。長くて複雑なウォレットアドレスを覚えやすい名前に置き換えて、送り間違いともおさらば。
            <br />
            NFTを交換しまくりましょう。
          </DomainItem>
          <DomainItem
            title={
              <span>
                デジタル世界の
                <br />
                プロフィールの名前
              </span>
            }
            imageSrc="/images/img-domain-03.png"
          >
            SNSのユーザー名を、初期設定のまま使う人はいないですよね。次世代ドメインを取得して、デジタル世界であなただけの名前を手に入れましょう。デジタル世界で本物のあなたかどうかを識別する簡単な方法です。
          </DomainItem>
          <DomainItem
            title={
              <span>
                多彩なドメイン名で
                <br />
                自分を表現
              </span>
            }
            imageSrc="/images/img-domain-04.png"
          >
            お好きな名前の後には.red、.black、.yellowのカラフルなものや、.king、.samuraiのクールなもの、.a、.b等のシンプルなものなど、あなたのイメージにあったドメインの取得が可能です。
          </DomainItem>
          <DomainItem
            title={<span>リーズナブル</span>}
            imageSrc="/images/img-domain-05.png"
          >
            わずか250円から取得できます。※文字数や種類、又は為替によって変動します。
          </DomainItem>
          <DomainItem
            title={
              <span>
                様々なサービスで
                <br />
                利用可
              </span>
            }
            imageSrc="/images/img-domain-06.png"
          >
            暗号資産の管理やNFTを無料で送受信できる「DIVER
            Wallet」をはじめ、次世代型メッセージアプリ「DIVER
            Knock」、次世代のトレカ&クーポンサービス「トレクー」、NFTと位置情報をQRコードにセットできる「ChainPin」などのサービスでご利用頂けます。
          </DomainItem>
        </div>
      </div>
    </div>
  );
}
