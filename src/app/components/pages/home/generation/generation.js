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
      <div className="px-4">
        <SectionTitle>
          こんな時に使うべし！
          <br />
          次世代スキャンの利用例
        </SectionTitle>
        <div className="mb-[100px] mt-8 md:mb-[180px] md:mt-[72px]">
          <div
            ref={animateRefs}
            className="flex items-center justify-center py-5 bg-white md:py-7"
          >
            <div className="mx-auto flex w-full max-w-[670px] items-center gap-5 max-md:flex-col md:gap-[30px]">
              <figure>
                <img
                  className="max-md:w-[180px]"
                  src="/images/img-man.png"
                  alt=""
                />
              </figure>
              <p className="text-[16px] font-bold max-md:text-center md:text-[24px]">
                次世代スキャンってなんか便利そう！
                <br />
                でも、どんな時に使うのかな？
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 w-full max-w-[440px] space-y-[57px] md:mt-[57px] md:max-w-[540px] lg:max-w-[1200px]">
            <GenerationContainer>
              <div className="flex-1">
                <GenerationTitle number="01">取引のチェック</GenerationTitle>
                <div className="mt-2.5 divide-y divide-black md:mt-[18px]">
                  <GenerationCheck
                    problem={
                      <>
                        ウォレットからDIV(ダイバーコイン)を送金した時(受け取った時)
                        <br />
                        ウォレットからNFTを送信した時(受け取った時)
                      </>
                    }
                    handle="取引の詳細やステータスを確認しよう！"
                  />
                  <GenerationCheck
                    problem="送信先のウォレットアドレスの入力ミスを防止することを目的にテスト送金した時"
                    handle="テスト送金の取引が適切にウォレットに反映されたか確認しよう！"
                  />
                  <GenerationCheck
                    problem="ウォレット接続して使用するサービス(次世代ドメインなど)利用時に決済署名を行った時"
                    handle="正しく決済が行われたを確認しよう！"
                  />
                </div>
              </div>
              <div ref={animateRefs} className="max-xl:w-2/5 max-lg:w-full">
                <figure>
                  <img className="w-full" src="/images/img-01.png" alt="" />
                </figure>
              </div>
            </GenerationContainer>
            <GenerationContainer>
              <div className="flex-1">
                <GenerationTitle number="02">
                  セキュリティチェック
                </GenerationTitle>
                <div className="mt-2.5 divide-y divide-black md:mt-[18px]">
                  <GenerationCheck
                    problem={<>自分のウォレットに不審な取引の動きを感じた時</>}
                    handle="ウォレットアドレスを検索して取引に不審な点がないかを確認しよう！"
                  />
                  <GenerationCheck
                    problem="ウォレット接続が必要なサービスで初めて署名した時"
                    handle="取引に対する不正行為が行われていないか確認しておこう！"
                  />
                  <GenerationCheck
                    problem="特定のウォレットアドレスの資産移動履歴を調べたい時"
                    handle="特定のウォレットアドレスの取引履歴を確認して移動先を突き止めよう！"
                  />
                  <GenerationCheck
                    problem="他人に指定されたウォレットアドレスが本物かどうか調べたい時"
                    handle="取引の前に指定されたウォレットアドレスの資産残高や取引履歴を確認して信頼性をチェックして！"
                  />
                </div>
              </div>
              <div ref={animateRefs} className="max-xl:w-2/5 max-lg:w-full">
                <figure>
                  <img className="w-full" src="/images/img-02.png" alt="" />
                </figure>
              </div>
            </GenerationContainer>
            <GenerationContainer>
              <div className="flex-1">
                <GenerationTitle number="03">
                  DIV(ダイバーコイン)の情報を
                  <br className="max-md:hidden" />
                  チェック
                </GenerationTitle>
                <div className="mt-2.5 divide-y divide-black md:mt-[18px]">
                  <GenerationCheck
                    problem="DIV(ダイバーコイン)の価格や取引量が知りたい時"
                    handle="DIV(ダイバーコイン)の価格や取引量を確認しよう！"
                  />
                </div>
              </div>
              <div ref={animateRefs} className="max-xl:w-2/5 max-lg:w-full">
                <figure>
                  <img className="w-full" src="/images/img-03.png" alt="" />
                </figure>
              </div>
            </GenerationContainer>
          </div>
        </div>
        <SectionTitle>
          これで完璧！
          <br />
          次世代スキャンでチェック可能な項目イッキ読み
        </SectionTitle>
        <div className="mb-[100px] mt-8 md:mb-[180px] md:mt-[60px]">
          <div
            ref={animateRefs}
            className="flex items-center justify-center py-5 bg-white md:py-7"
          >
            <div className="mx-auto flex w-full max-w-[750px] items-center gap-5 max-md:flex-col md:gap-[30px]">
              <figure>
                <img
                  className="max-md:w-[180px]"
                  src="/images/img-woman.png"
                  alt=""
                />
              </figure>
              <div className="flex-1">
                <p className="min-[370px]:[font-size:_clamp(18px,4.8vw,24px)] text-[16px] font-bold max-md:text-center md:text-[24px]">
                  具体的には何が確認(チェック)できるの？
                </p>
                <p className="mt-1 text-[12px] md:text-[14px]">
                  ※記載する情報には十分に注意を払っていますが、実際に確認できる項目、ウェブサイトの仕様、デザイン、その他の変更点について、反映が遅れている場合がございます。
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 w-full max-w-[440px] space-y-[57px] md:mt-[57px] md:max-w-[540px] lg:max-w-[1200px]">
            <GenerationContainer>
              <div className="flex-1">
                <GenerationTitle number="01">
                  DIV(ダイバーコイン)の情報
                  <br className="max-md:hidden" />
                  「価格、取引量」
                </GenerationTitle>
                <div ref={animateRefs} className="mt-2.5 md:mt-[18px]">
                  <p className="mb-4 text-[14px] font-bold md:text-[18px]">
                    ＜ 確認できる項目一覧 ＞
                  </p>
                  <div className="list-disc space-y-2 text-[13px] font-medium marker:text-black md:text-[16px]">
                    <p className="flex">
                      <span>・</span>
                      <span>DIV(ダイバーコイン)の価格(DIVER PRICE)</span>
                    </p>
                    <p className="flex">
                      <span>・</span>
                      <span>DIV(ダイバーコイン)の総取引量(TRANSACTIONS)</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-6 mt-4 md:mt-6 md:gap-9">
                    <div className="relative rounded-xl bg-[#FDFFAA] p-4 text-[13px] font-medium after:absolute after:-right-4 after:top-1/2 after:h-[25px] after:w-[34px] after:-translate-y-1/2 after:bg-[url('/images/triangle.png')] after:bg-cover md:w-[334px] md:rounded-[20px] md:p-5  md:text-[16px] md:after:-right-6">
                      サイトにアクセスするといつも最初に確認できるんだ
                    </div>
                    <figure className="flex-[0_0_60px] md:flex-[0_0_100px]">
                      <img src="/images/boy.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div ref={animateRefs} className="max-xl:w-2/5 max-lg:w-full">
                <figure>
                  <img className="w-full" src="/images/img-04.png" alt="" />
                </figure>
              </div>
            </GenerationContainer>
            <GenerationContainer>
              <div className="flex-1">
                <GenerationTitle number="02">
                  全ウォレットのリアルタイム取引記録
                  <br className="max-md:hidden" />
                  「DIV(ダイバーコイン)・NFT」
                </GenerationTitle>
                <div ref={animateRefs} className="mt-2.5 md:mt-[18px]">
                  <p className="mb-4 text-[14px] font-bold md:text-[18px]">
                    ＜ 確認できる項目一覧 ＞
                  </p>
                  <div className="list-disc space-y-2 text-[13px] font-medium marker:text-black md:text-[16px]">
                    <p className="flex">
                      <span>・</span>
                      <span>
                        <span className="font-bold text-[#FC002E]">
                          ナンバー(Number)
                        </span>
                        ：取引の通し番号のことです。
                      </span>
                    </p>
                    <p className="flex">
                      <span>・</span>
                      <span>
                        <span className="font-bold text-[#8000FF]">
                          ブロックハッシュ(Block Hadh)
                        </span>
                        ：ブロックチェーン上の特定のブロックを一意に識別するための識別子です。ブロックの内容(トランザクションリスト、タイムスタンプ、前のブロックのハッシュなど)が独自のハッシュ値に変換され、そのブロックを特定するのに使用されます。
                      </span>
                    </p>
                    <p className="flex">
                      <span>・</span>
                      <span>
                        <span className="font-bold text-[#8000FF]">
                          ディフィカルティ(Difficulty)
                        </span>
                        ：ネットワーク難易度と言われるもので、DIV(ダイバーコイン)のマイニング時におけるブロック生成の計算難易度を示す値です。
                      </span>
                    </p>
                    <p className="flex">
                      <span>・</span>
                      <span>
                        <span className="font-bold text-[#FDA700]">
                          サイズ(Size)
                        </span>
                        ：生成するブロックのサイズです。
                      </span>
                    </p>
                    <p className="flex">
                      <span>・</span>
                      <span>
                        <span className="font-bold text-[#04D400]">
                          ナンバーオブトランザクションズ(# of TXs)
                        </span>
                        ：2秒間に一回生成されるブロックに格納されるトランザクションの数を示しています。
                      </span>
                    </p>
                    <p className="flex">
                      <span>・</span>
                      <span>
                        <span className="font-bold text-[#FA00FF]">
                          ガスユーズド(Gas used)
                        </span>
                        ：ガス代と呼ばれるブロックチェーンを使用した際にかかる手数料のことです。DIVERでは世界で唯一、このガス代が無料です。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div ref={animateRefs} className="max-xl:w-2/5 max-lg:w-full">
                <div className="flex items-center gap-6 mb-6 md:mb-8 md:gap-9">
                  <figure className="flex-[0_0_60px] md:flex-[0_0_100px]">
                    <img src="/images/boy.png" alt="" />
                  </figure>
                  <div className="relative rounded-xl bg-[#FDFFAA] p-4 text-[13px] font-medium after:absolute after:-left-4 after:top-1/2 after:h-[25px] after:w-[34px] after:-translate-y-1/2 after:rotate-180 after:bg-[url('/images/triangle.png')] after:bg-cover md:w-[334px] md:rounded-[20px] md:p-5 md:text-[16px] md:after:-left-6">
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
                <GenerationTitle number="03">
                  特定のウォレットアドレスの取引記録「DIV(ダイバーコイン)・NFT」
                </GenerationTitle>
                <div ref={animateRefs} className="mt-2.5 md:mt-[18px]">
                  <p className="mb-4 text-[14px] font-bold md:text-[18px]">
                    ＜ 確認できる項目一覧 ＞
                  </p>
                  <div className="list-disc space-y-2 text-[13px] font-medium marker:text-black md:text-[16px]">
                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#FC002E]">
                          トランザクションハッシュ(Txn Hash)
                        </span>
                        ：請求書番号のようにブロックチェーン上の個々のトランザクション(取引)を識別するための識別番号です。それぞれのトランザクションが独自のハッシュ値を持ち、これを使用して特定のトランザクションを追跡確認できます。
                        トランザクションデータ(送金者、受取人、金額、手数料など)から生成されます。
                      </span>
                    </p>
                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#8000FF]">
                          メソッド(Method)
                        </span>
                        ：取引の種類を示しています。メソッドには、DIV(ダイバーコイン)またはNFTの転送(トランスファー：Transfer)、NFTの生成(ミント：Mint)、NFTの消去(バーン：Burn)があります。
                      </span>
                    </p>

                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#1070FF]">
                          ブロック(Block)
                        </span>
                        ：その取引がブロックチェーン上のどのブロックに生成されたのかを示しています。
                      </span>
                    </p>

                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#FDA700]">
                          デイト(Date)
                        </span>
                        ：取引が実行された日付を示しています。
                      </span>
                    </p>

                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#04D400]">
                          フロム(From)
                        </span>
                        ：取引の送信者アドレスを示しています。
                      </span>
                    </p>
                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#FA00FF]">
                          トゥ(To)
                        </span>
                        ：取引の受信者アドレスを示しています。
                      </span>
                    </p>
                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#00D1FF]">
                          バリュー(Value)
                        </span>
                        ：転送されたDIV(ダイバーコイン)の量を示しています。NFTや署名時の確認処理の際は0と表示されます。
                      </span>
                    </p>
                    <p className="flex">
                      <span className="text-[#FC103B]">・</span>
                      <span>
                        <span className="font-bold text-[#FF5C00]">
                          トランザクションフィー(Txn Fee)
                        </span>
                        ：取引にかかる手数料を示しています。DIVERでは世界で唯一、この取引手数料が無料です。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div ref={animateRefs} className="max-xl:w-2/5 max-lg:w-full">
                <div className="flex items-center gap-6 mb-6 md:mb-8 md:gap-9">
                  <figure className="flex-[0_0_60px] md:flex-[0_0_100px]">
                    <img src="/images/boy.png" alt="" />
                  </figure>
                  <div className="relative rounded-xl bg-[#FDFFAA] p-4 text-[13px] font-medium after:absolute after:-left-4 after:top-1/2 after:h-[25px] after:w-[34px] after:-translate-y-1/2 after:rotate-180 after:bg-[url('/images/triangle.png')] after:bg-cover md:w-[334px] md:rounded-[20px] md:p-5 md:text-[16px] md:after:-left-6">
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
  );
}
