"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function Features() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <section className="md:py-[100px] py-[60px] md:mb-20">
            <div className="w-full">
                <div className="px-5">
                    <SectionTitle>
                        次世代スキャンは<br />
                        次世代アプリユーザーの味方！<br />
                        知っておくべき4つの特徴
                    </SectionTitle>
                </div>
                <div className="grid grid-cols-2 mt-10 md:grid-cols-4 md:mt-20">
                    <div ref={animateRefs} className="py-6 lg:py-10 px-6 lg:px-[50px] bg-[#FFDBF7] flex items-center flex-col">
                        <figure>
                            <img src="/images/img-feature-01.png" alt="ログイン不要" />
                        </figure>
                        <h5 className="text-center md:text-[18px] text-[15px] font-bold mt-4 md:mt-5">ログイン不要</h5>
                    </div>
                    <div ref={animateRefs} className="py-6 lg:py-10 px-6 lg:px-[50px] bg-[#99CBF9] flex items-center flex-col">
                        <figure>
                            <img src="/images/img-feature-02.png" alt="ログイン不要" />
                        </figure>
                        <h5 className="text-center md:text-[18px] text-[15px] font-bold mt-4 md:mt-5">取引履歴をダウンロード</h5>
                    </div>
                    <div ref={animateRefs} className="py-6 lg:py-10 px-6 lg:px-[50px] bg-[#DEFFAC] flex items-center flex-col">
                        <figure>
                            <img src="/images/img-feature-03.png" alt="ログイン不要" />
                        </figure>
                        <h5 className="text-center md:text-[18px] text-[15px] font-bold mt-4 md:mt-5">送り先に届いたか簡単確認</h5>
                    </div>
                    <div ref={animateRefs} className="py-6 lg:py-10 px-6 lg:px-[50px] bg-[#D7B1FC] flex items-center flex-col">
                        <figure>
                            <img src="/images/img-feature-04.png" alt="ログイン不要" />
                        </figure>
                        <h5 className="text-center md:text-[18px] text-[15px] font-bold mt-4 md:mt-5">取引履歴を瞬間表示</h5>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  