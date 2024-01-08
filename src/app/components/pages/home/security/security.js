"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SecurityItem from "./securityItem";

export default function Security() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="md:px-[30px] px-5 mt-20">
            <div className="w-full max-w-[1380px] mx-auto relative after:content-[''] after:absolute after:w-full after:h-[660px] after:bg-[#001626] after:top-0 after:rounded-[50px]">
                <div className="relative z-10 bg-[url('/images/bg-security.png')] bg-no-repeat max-md:bg-[length:200px_auto] bg-top px-5 pt-[18px]">
                    <div className="pt-10 w-full md:max-w-[1190px] max-w-[440px] mx-auto">
                        <h4 ref={animateRefs} className="text-center md:text-[40px] text-[24px] font-black text-white leading-snug">
                            あなたの安心のために <br />
                            セキュリティとプライバシーへの対策
                        </h4>
                        <div ref={animateRefs} className="flex justify-center mt-3">
                            <p className="w-full max-w-[570px] md:text-[16px] text-[14px] text-white">
                            隠し事がなくても、監視されたり、追跡されたりするのは嫌なもの。ノックは、監視や追跡の世界からあなたを解放します！
                            </p>
                        </div>
                        <div className="flex max-md:items-center max-md:flex-col items-start mt-8 md:mt-12 gap-[25px]">
                            <SecurityItem title="安全第一" imageSrc="/images/image-security-01.jpg">
                                <p>
                                私たちは、あなたの安全を最も大切にしています。あなたの情報が安全な環境で保護されるように、最先端の技術を使っています。
                                </p>
                                <div className="mt-4">
                                    <p className="flex items-center gap-1"><span className="block w-5 h-[3px] bg-[#2157E3]"></span>最先端の技術</p>
                                    <p className="md:text-[13px] text-[11px]">
                                    ブロックチェーンを活用した分散化技術をベースに最高レベルのセキュリティを構築しています。
                                    </p>
                                </div>
                            </SecurityItem>
                            <SecurityItem title="秘密は秘密のまま" imageSrc="/images/image-security-02.jpg">
                                <p>
                                あなたが送るメッセージや情報は、エンドツーエンド暗号化によって保護されています。これは、あなたが送信する内容があなたと受信者だけに読まれることを意味します。中間で誰も見ることはできません。
                                </p>
                                <div className="mt-4">
                                    <p className="flex items-center gap-1"><span className="block w-5 h-[3px] bg-[#2157E3]"></span>エンドツーエンド暗号化</p>
                                    <p className="md:text-[13px] text-[11px]">
                                    送信者の端末でメッセージやデータが暗号化され、受信者の端末でのみ暗号化されたメッセージやデータがもとの読み取り可能な形式に戻される方式です。この間、データは暗号化状態を保持し、途中のサーバーやその他の第三者によって読まれることがありません。
                                    </p>
                                </div>
                            </SecurityItem>
                            <SecurityItem title="プライバシーを守るためのお約束" imageSrc="/images/image-security-03.jpg">
                                <p>
                                あなたのプライバシー保護は、私たちにとっても重要です。チャット内容の漏洩や不正利用を防ぐため、最高レベルのセキュリティ対策を施しています。
                                </p>
                            </SecurityItem>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1084px] mx-auto mt-12 md:mt-[80px]">
                <div className="px-4 md:px-[42px]">
                    <div className="bg-[url('/images/bg-download.png')] md:bg-[length:100%_100%] bg-center pt-20 md:pt-[165px] pb-16 md:pb-[126px] px-5 md:rounded-[60px] rounded-[30px]">
                        <div ref={animateRefs} className="w-full max-w-[614px] mx-auto">
                            <p className="md:p-[30px] p-5 bg-white/90 rounded-[20px] text-center md:text-[15px] text-[13px] font-medium leading-[1.4]">
                                友達との秘密の話題、仕事の大切な話、心温まる家族の会話。<br />
                                ノックなら、すべてを安心して楽しめます。<br />
                                <br />
                                誰にも見られることなく、匿名で自由に話せる安全な場所です。<br />
                                気持ちの悪い個人情報の収集も、わずらわしい広告のトラッキングもありません。<br />
                                <br />
                                完全無料。匿名で安全なチャットルームを今すぐノックしてください。
                            </p>
                        </div>
                        <div ref={animateRefs} className="w-full relative max-w-[710px] mx-auto bg-[#0055A3]/[0.96] [box-shadow:0px_4px_24px_0px_rgba(1,_31,_104,_0.30)] px-4 md:px-10 py-5 md:py-6 rounded-[40px] mt-10">
                            <div className="text-center md:text-[18px] text-[14px] font-black text-white underline md:absolute md:left-1/2 md:-translate-x-1/2 top-2 lg:top-4">今すぐ無料ダウンロード</div>
                            <div className="flex max-md:flex-col items-center justify-between gap-5 max-md:mt-3">
                                <div className="flex items-center gap-3 md:gap-6">
                                    <figure>
                                        <img className="max-md:w-[80px]" src="/images/logo-knock-2.png" alt="" />
                                    </figure>
                                    <p className="lg:text-[42px] md:text-[32px] text-[24px] font-bold text-white font-roboto">Knock</p>
                                </div>
                                <div className="flex justify-center gap-4 md:gap-5">
                                    <a href="https://apps.apple.com/jp/app/diver-knock/id6450264436" target="_blank">
                                        <img className="md:w-[160px]" src="/images/btn-app-store.png" alt="App Store" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.talk.flutter_project&pcampaignid=web_share" target="_blank">
                                        <img className="md:w-[160px]" src="/images/btn-google-play.png" alt="App Store" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={animateRefs} className="flex mt-[-30px] md:mt-[-75px]">
                    <img src="/images/photo.png" alt="" />
                </div>
            </div>
        </div>
    );
}
