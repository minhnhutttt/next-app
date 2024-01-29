"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "@/app/components/common/sectionTitle";
import GenerationContainer from "./generationContainer";
import GenerationTitle from "./generationTitle";
import GenerationCheck from "./generationCheck";

export default function Generation() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <section>
            <div className="px-5">
                <SectionTitle>
                    こんな時に使うべし！<br />
                    次世代スキャンの利用例
                </SectionTitle>
                <div className="md:mt-[72px] mt-8 md:mb-[180px] mb-[100px]">
                    <div ref={animateRefs} className="flex items-center justify-center py-5 bg-white md:py-7">
                        <div className="w-full max-w-[670px] mx-auto flex items-center max-md:flex-col gap-5 md:gap-[30px]">
                            <figure>
                                <img className="max-md:w-[180px]" src="/images/img-man.png" alt="" />
                            </figure>
                            <p className="md:text-[24px] text-[16px] font-bold max-md:text-center">
                                次世代スキャンってなんか便利そう！<br />
                                でも、どんな時に使うのかな？
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[1200px] md:max-w-[540px] max-w-[440px] mx-auto space-y-[57px] mt-8 md:mt-[57px]">
                        <GenerationContainer>
                            <div className="flex-1">
                                <GenerationTitle number="01">取引のチェック</GenerationTitle>
                                <div className="mt-2.5 md:mt-[18px] divide-y divide-black">
                                    <GenerationCheck problem={<>ウォレットからDIV(ダイバーコイン)を送金した時(受け取った時)<br />ウォレットからNFTを送信した時(受け取った時)</>} handle="取引の詳細やステータスを確認しよう！" />
                                    <GenerationCheck problem="送信先のウォレットアドレスの入力ミスを防止することを目的にテスト送金した時" handle="テスト送金の取引が適切にウォレットに反映されたか確認しよう！" />
                                    <GenerationCheck problem="ウォレット接続して使用するサービス(次世代ドメインなど)利用時に決済署名を行った時" handle="正しく決済が行われたを確認しよう！" />
                                </div>
                            </div>
                            <div ref={animateRefs} className="max-lg:w-full max-xl:w-2/5">
                                <figure>
                                    <img className="w-full" src="/images/img-01.png" alt="" />
                                </figure>
                            </div>
                        </GenerationContainer>
                        <GenerationContainer>
                            <div className="flex-1">
                                <GenerationTitle number="02">セキュリティチェック</GenerationTitle>
                                <div className="mt-2.5 md:mt-[18px] divide-y divide-black">
                                    <GenerationCheck problem={<>自分のウォレットに不審な取引の動きを感じた時</>} handle="ウォレットアドレスを検索して取引に不審な点がないかを確認しよう！" />
                                    <GenerationCheck problem="ウォレット接続が必要なサービスで初めて署名した時" handle="取引に対する不正行為が行われていないか確認しておこう！" />
                                    <GenerationCheck problem="特定のウォレットアドレスの資産移動履歴を調べたい時" handle="特定のウォレットアドレスの取引履歴を確認して移動先を突き止めよう！" />
                                    <GenerationCheck problem="他人に指定されたウォレットアドレスが本物かどうか調べたい時" handle="取引の前に指定されたウォレットアドレスの資産残高や取引履歴を確認して信頼性をチェックして！" />
                                </div>
                            </div>
                            <div ref={animateRefs} className="max-lg:w-full max-xl:w-2/5">
                                <figure>
                                    <img className="w-full" src="/images/img-02.png" alt="" />
                                </figure>
                            </div>
                        </GenerationContainer>
                        <GenerationContainer>
                            <div className="flex-1">
                                <GenerationTitle number="03">DIV(ダイバーコイン)の情報を<br className="max-md:hidden" />チェック</GenerationTitle>
                                <div className="mt-2.5 md:mt-[18px] divide-y divide-black">
                                    <GenerationCheck problem="DIV(ダイバーコイン)の価格や取引量が知りたい時" handle="DIV(ダイバーコイン)の価格や取引量を確認しよう！" />
                                </div>
                            </div>
                            <div ref={animateRefs} className="max-lg:w-full max-xl:w-2/5">
                                <figure>
                                    <img className="w-full" src="/images/img-03.png" alt="" />
                                </figure>
                            </div>
                        </GenerationContainer>
                    </div>
                </div>
                <SectionTitle>
                    これで完璧！<br />
                    次世代スキャンでチェック可能な項目イッキ読み
                </SectionTitle>
                <div className="md:mt-[60px] mt-8 md:mb-[180px] mb-[100px]">
                    <div ref={animateRefs} className="flex items-center justify-center py-5 bg-white md:py-7">
                        <div className="w-full max-w-[750px] mx-auto flex items-center max-md:flex-col gap-5 md:gap-[30px]">
                            <figure>
                                <img className="max-md:w-[180px]" src="/images/img-woman.png" alt="" />
                            </figure>
                            <div className="flex-1">
                                <p className="md:text-[24px] text-[16px] font-bold max-md:text-center">
                                    具体的には何が確認(チェック)できるの？
                                </p>
                                <p className="md:text-[14px] text-[12px] mt-1">
                                    ※記載する情報には十分に注意を払っていますが、実際に確認できる項目、ウェブサイトの仕様、デザイン、その他の変更点について、反映が遅れている場合がございます。
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[1200px] md:max-w-[540px] max-w-[440px] mx-auto space-y-[57px] mt-8 md:mt-[57px]">
                        <GenerationContainer>
                            <div className="flex-1">
                                <GenerationTitle number="01">DIV(ダイバーコイン)の情報<br className="max-md:hidden" />「価格、取引量」</GenerationTitle>
                                <div ref={animateRefs}  className="mt-2.5 md:mt-[18px]">
                                    <p className="md:text-[18px] text-[14px] font-bold mb-4">＜ 確認できる項目一覧 ＞</p>
                                    <div className="md:text-[16px] text-[13px] font-medium marker:text-black list-disc space-y-2">
                                        <p className="flex"><span>・</span><span>DIV(ダイバーコイン)の価格(DIVER PRICE)</span></p>
                                        <p className="flex"><span>・</span><span>DIV(ダイバーコイン)の総取引量(TRANSACTIONS)</span></p>
                                    </div>
                                    <div className="flex items-center gap-6 mt-4 md:mt-6 md:gap-9">
                                        <div className="relative md:w-[334px] md:text-[16px] text-[13px] font-medium md:p-5 p-4 md:rounded-[20px] rounded-xl bg-[#FDFFAA] after:absolute after:w-[34px] after:h-[25px] after:bg-[url('/images/triangle.png')] after:bg-cover md:after:-right-6 after:-right-4  after:top-1/2 after:-translate-y-1/2">
                                            サイトにアクセスするといつも最初に確認できるんだ
                                        </div>
                                        <figure className="md:flex-[0_0_100px] flex-[0_0_60px]">
                                            <img src="/images/boy.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div ref={animateRefs} className="max-lg:w-full max-xl:w-2/5">
                                <figure>
                                    <img className="w-full" src="/images/img-04.png" alt="" />
                                </figure>
                            </div>
                        </GenerationContainer>
                        <GenerationContainer>
                            <div className="flex-1">
                                <GenerationTitle number="02">全ウォレットのリアルタイム取引記録<br className="max-md:hidden" />「DIV(ダイバーコイン)・NFT」</GenerationTitle>
                                <div ref={animateRefs}  className="mt-2.5 md:mt-[18px]">
                                    <p className="md:text-[18px] text-[14px] font-bold mb-4">＜ 確認できる項目一覧 ＞</p>
                                    <div className="md:text-[16px] text-[13px] font-medium marker:text-black list-disc space-y-2">
                                        <p className="flex"><span>・</span><span><span className="text-[#FC002E] font-bold">ナンバー(Number)</span>：取引の通し番号のことです。</span></p>
                                        <p className="flex"><span>・</span><span><span className="text-[#8000FF] font-bold">ブロックハッシュ(Block Hadh)</span>：ブロックチェーン上の特定のブロックを一意に識別するための識別子です。ブロックの内容(トランザクションリスト、タイムスタンプ、前のブロックのハッシュなど)が独自のハッシュ値に変換され、そのブロックを特定するのに使用されます。</span></p>
                                        <p className="flex"><span>・</span><span><span className="text-[#8000FF] font-bold">ディフィカルティ(Difficulty)</span>：ネットワーク難易度と言われるもので、DIV(ダイバーコイン)のマイニング時におけるブロック生成の計算難易度を示す値です。</span></p>
                                        <p className="flex"><span>・</span><span><span className="text-[#FDA700] font-bold">サイズ(Size)</span>：生成するブロックのサイズです。</span></p>
                                        <p className="flex"><span>・</span><span><span className="text-[#04D400] font-bold">ナンバーオブトランザクションズ(# of TXs)</span>：2秒間に一回生成されるブロックに格納されるトランザクションの数を示しています。</span></p>
                                        <p className="flex"><span>・</span><span><span className="text-[#FA00FF] font-bold">ガスユーズド(Gas used)</span>：ガス代と呼ばれるブロックチェーンを使用した際にかかる手数料のことです。DIVERでは世界で唯一、このガス代が無料です。</span></p>
                                    </div>
                                </div>
                            </div>
                            <div ref={animateRefs} className="max-lg:w-full max-xl:w-2/5">
                                <div className="flex items-center gap-6 mb-6 md:gap-9 md:mb-8">
                                    <figure className="md:flex-[0_0_100px] flex-[0_0_60px]">
                                        <img src="/images/boy.png" alt="" />
                                    </figure>
                                    <div className="relative md:w-[334px] md:text-[16px] text-[13px] font-medium md:p-5 p-4 md:rounded-[20px] rounded-xl bg-[#FDFFAA] after:absolute after:w-[34px] after:h-[25px] after:bg-[url('/images/triangle.png')] after:bg-cover after:rotate-180 md:after:-left-6 after:-left-4 after:top-1/2 after:-translate-y-1/2">
                                    全ウォレットの取引情報は、リアルタイムで次々と追加表示されるよ！取引が活発なことを確認できるから安心してサービスを利用できるね！
                                    </div>
                                </div>
                                <figure ref={animateRefs}>
                                    <img className="w-full" src="/images/img-05.png" alt="" />
                                </figure>
                            </div>
                        </GenerationContainer>
                        <GenerationContainer>
                            <div className="flex-1">
                                <GenerationTitle number="03">特定のウォレットアドレスの取引記録「DIV(ダイバーコイン)・NFT」</GenerationTitle>
                                <div ref={animateRefs} className="mt-2.5 md:mt-[18px]">
                                    <p className="md:text-[18px] text-[14px] font-bold mb-4">＜ 確認できる項目一覧 ＞</p>
                                    <div className="md:text-[16px] text-[13px] font-medium marker:text-black list-disc space-y-2">
                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#FC002E] font-bold">トランザクションハッシュ(Txn Hash)</span>：請求書番号のようにブロックチェーン上の個々のトランザクション(取引)を識別するための識別番号です。それぞれのトランザクションが独自のハッシュ値を持ち、これを使用して特定のトランザクションを追跡確認できます。 トランザクションデータ(送金者、受取人、金額、手数料など)から生成されます。</span></p>
                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#8000FF] font-bold">メソッド(Method)</span>：取引の種類を示しています。メソッドには、DIV(ダイバーコイン)またはNFTの転送(トランスファー：Transfer)、NFTの生成(ミント：Mint)、NFTの消去(バーン：Burn)があります。</span></p>

                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#1070FF] font-bold">ブロック(Block)</span>：その取引がブロックチェーン上のどのブロックに生成されたのかを示しています。</span></p>

                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#FDA700] font-bold">デイト(Date)</span>：取引が実行された日付を示しています。</span></p>

                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#04D400] font-bold">フロム(From)</span>：取引の送信者アドレスを示しています。</span></p>
                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#FA00FF] font-bold">トゥ(To)</span>：取引の受信者アドレスを示しています。</span></p>
                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#00D1FF] font-bold">バリュー(Value)</span>：転送されたDIV(ダイバーコイン)の量を示しています。NFTや署名時の確認処理の際は0と表示されます。</span></p>
                                        <p className="flex"><span className="text-[#FC103B]">・</span><span><span className="text-[#FF5C00] font-bold">トランザクションフィー(Txn Fee)</span>：取引にかかる手数料を示しています。DIVERでは世界で唯一、この取引手数料が無料です。</span></p>
                                    </div>
                                </div>
                            </div>
                            <div ref={animateRefs} className="max-lg:w-full max-xl:w-2/5">
                                <div className="flex items-center gap-6 mb-6 md:gap-9 md:mb-8">
                                    <figure className="md:flex-[0_0_100px] flex-[0_0_60px]">
                                        <img src="/images/boy.png" alt="" />
                                    </figure>
                                    <div className="relative md:w-[334px] md:text-[16px] text-[13px] font-medium md:p-5 p-4 md:rounded-[20px] rounded-xl bg-[#FDFFAA] after:absolute after:w-[34px] after:h-[25px] after:bg-[url('/images/triangle.png')] after:bg-cover after:rotate-180 md:after:-left-6 after:-left-4 after:top-1/2 after:-translate-y-1/2">
                                    アドレス検索バーに特定のウォレットアドレスを入力すれば、すべての取引記録が確認できるんだ。ウォレット残高はオーバービュー(Overview)として、取引はトランザクションズ(Transactions)としてまとめられてるよ！
                                    </div>
                                </div>
                                <figure ref={animateRefs}>
                                    <img className="w-full" src="/images/img-06.png" alt="" />
                                </figure>
                            </div>
                        </GenerationContainer>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  