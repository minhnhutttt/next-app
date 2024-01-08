"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SecurityItem from "./securityItem";

export default function Security() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="mt-20 px-5 md:px-[30px]">
      <div className="relative mx-auto w-full max-w-[1380px] after:absolute after:top-0 after:h-[660px] after:w-full after:rounded-[50px] after:bg-[#001626] after:content-['']">
        <div className="relative z-10 bg-[url('/images/bg-security.png')] bg-top bg-no-repeat px-5 pt-[18px] max-md:bg-[length:200px_auto]">
          <div className="mx-auto w-full max-w-[440px] pt-10 md:max-w-[1190px]">
            <h4
              ref={animateRefs}
              className="text-center text-[24px] font-black leading-snug text-white md:text-[40px]"
            >
              あなたの安心のために <br />
              セキュリティとプライバシーへの対策
            </h4>
            <div ref={animateRefs} className="mt-3 flex justify-center">
              <p className="w-full max-w-[570px] text-[14px] text-white md:text-[16px]">
                隠し事がなくても、監視されたり、追跡されたりするのは嫌なもの。ノックは、監視や追跡の世界からあなたを解放します！
              </p>
            </div>
            <div className="mt-8 flex items-start gap-[25px] max-md:flex-col max-md:items-center md:mt-12">
              <SecurityItem
                title="安全第一"
                imageSrc="/images/image-security-01.jpg"
              >
                <p>
                  私たちは、あなたの安全を最も大切にしています。あなたの情報が安全な環境で保護されるように、最先端の技術を使っています。
                </p>
                <div className="mt-4">
                  <p className="flex items-center gap-1">
                    <span className="block h-[3px] w-5 bg-[#2157E3]"></span>
                    最先端の技術
                  </p>
                  <p className="text-[11px] md:text-[13px]">
                    ブロックチェーンを活用した分散化技術をベースに最高レベルのセキュリティを構築しています。
                  </p>
                </div>
              </SecurityItem>
              <SecurityItem
                title="秘密は秘密のまま"
                imageSrc="/images/image-security-02.jpg"
              >
                <p>
                  あなたが送るメッセージや情報は、エンドツーエンド暗号化によって保護されています。これは、あなたが送信する内容があなたと受信者だけに読まれることを意味します。中間で誰も見ることはできません。
                </p>
                <div className="mt-4">
                  <p className="flex items-center gap-1">
                    <span className="block h-[3px] w-5 bg-[#2157E3]"></span>
                    エンドツーエンド暗号化
                  </p>
                  <p className="text-[11px] md:text-[13px]">
                    送信者の端末でメッセージやデータが暗号化され、受信者の端末でのみ暗号化されたメッセージやデータがもとの読み取り可能な形式に戻される方式です。この間、データは暗号化状態を保持し、途中のサーバーやその他の第三者によって読まれることがありません。
                  </p>
                </div>
              </SecurityItem>
              <SecurityItem
                title="プライバシーを守るためのお約束"
                imageSrc="/images/image-security-03.jpg"
              >
                <p>
                  あなたのプライバシー保護は、私たちにとっても重要です。チャット内容の漏洩や不正利用を防ぐため、最高レベルのセキュリティ対策を施しています。
                </p>
              </SecurityItem>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 w-full max-w-[1084px] md:mt-[80px]">
        <div className="px-4 md:px-[42px]">
          <div className="rounded-[30px] bg-[url('/images/bg-download.png')] bg-center px-5 pb-16 pt-20 md:rounded-[60px] md:bg-[length:100%_100%] md:pb-[126px] md:pt-[165px]">
            <div ref={animateRefs} className="mx-auto w-full max-w-[614px]">
              <p className="rounded-[20px] bg-white/90 p-5 text-center text-[13px] font-medium leading-[1.4] md:p-[30px] md:text-[15px]">
                友達との秘密の話題、仕事の大切な話、心温まる家族の会話。
                <br />
                ノックなら、すべてを安心して楽しめます。
                <br />
                <br />
                誰にも見られることなく、匿名で自由に話せる安全な場所です。
                <br />
                気持ちの悪い個人情報の収集も、わずらわしい広告のトラッキングもありません。
                <br />
                <br />
                完全無料。匿名で安全なチャットルームを今すぐノックしてください。
              </p>
            </div>
            <div
              ref={animateRefs}
              className="relative mx-auto mt-10 w-full max-w-[710px] rounded-[40px] bg-[#0055A3]/[0.96] px-4 py-5 [box-shadow:0px_4px_24px_0px_rgba(1,_31,_104,_0.30)] md:px-10 md:py-6"
            >
              <div className="top-2 text-center text-[14px] font-black text-white underline md:absolute md:left-1/2 md:-translate-x-1/2 md:text-[18px] lg:top-4">
                今すぐ無料ダウンロード
              </div>
              <div className="flex items-center justify-between gap-5 max-md:mt-3 max-md:flex-col">
                <div className="flex items-center gap-3 md:gap-6">
                  <figure>
                    <img
                      className="max-md:w-[80px]"
                      src="/images/logo-knock-2.png"
                      alt=""
                    />
                  </figure>
                  <p className="font-roboto text-[24px] font-bold text-white md:text-[32px] lg:text-[42px]">
                    Knock
                  </p>
                </div>
                <div className="flex justify-center gap-4 md:gap-5">
                  <a
                    href="https://apps.apple.com/jp/app/diver-knock/id6450264436"
                    target="_blank"
                  >
                    <img
                      className="md:w-[160px]"
                      src="/images/btn-app-store.png"
                      alt="App Store"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.talk.flutter_project&pcampaignid=web_share"
                    target="_blank"
                  >
                    <img
                      className="md:w-[160px]"
                      src="/images/btn-google-play.png"
                      alt="App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={animateRefs} className="mt-[-30px] flex md:mt-[-75px]">
          <img src="/images/photo.png" alt="" />
        </div>
      </div>
    </div>
  );
}
