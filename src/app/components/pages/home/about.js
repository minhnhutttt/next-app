import ButtonContact from "../../common/buttonContact";
import Title from "../../common/title";
import PropTypes from "prop-types";

function AboutStep({ imgSrc, children }) {
    return (
      <div className="flex-col flex items-center">
        <figure>
            <img src={'/images/'+imgSrc+'.png'} />
        </figure>
        <div className="text-[13px] md:text-[16px] font-bold text-center mt-3">
            {children}
        </div>
      </div>
    );
  }
  
  AboutStep.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
export default function About() {
    return (
        <div className="bg-[url('/images/about-background.png')] bg-cover bg-top md:pt-[265px] pt-[160px] md:mt-[-325px] mt-[-200px] px-4 pb-[18px]">
            <div className="w-full md:max-w-[1024px] max-w-[440px] mx-auto">
                <Title>ABOUT</Title>
                <div className="flex items-center mt-4 max-md:flex-col">
                    <figure className="max-md:max-w-[220px]">
                        <img src="/images/img-about.png" alt="About" />
                    </figure>
                    <div className="flex-1 max-md:mt-4 md:ml-4">
                        <h5 className="md:text-[24px] text-[18px] font-bold">
                            <span className="relative z-0 inline-block before:content-[''] before:bg-[#F4ED19] before:absolute before:left-0 before:right-0 before:w-full before:h-1/2 before:bottom-0"><span className="relative z-10">NFT化した「推し活トレカ」</span></span>で人を呼び寄せ場所に魅力的を！<br />
                            トレカ応援活動で新しい時代へ。未来の顧客集客戦略にいかそう！
                        </h5>
                        <p className="md:text-[16px] text-[13px] font-medium md:mt-6 mt-4 md:tracking-[3.2px] tracking-[2px]">
                        押し活トレカシステムとは、NFTを使い集客に特化した「押し活トレカ配布システム」のことです。「押し活トレカ配布システム」は、キャラ、アイドル、アーティストなどのファンコミュニティにおいて、ファンが特定の「推し」を応援し、その応援活動を通じてトレーディングカード（トレカ）を獲得できる独自のシステムです。このシステムは、「推し」への熱狂的な支持を奨励し、応援者に感謝の意を表すために設計されています。
                        </p>
                    </div>
                </div>
                <div className="flex justify-center max-md:flex-col md:mt-[51px] mt-8 w-full max-w-[916px] md:px-5 mx-auto">
                    <AboutStep imgSrc="about-step-01">
                        お店(運営者)は <br />
                        NFT推し活トレカを作成
                    </AboutStep>
                    <figure className="flex items-center justify-center p-6 md:px-11 max-md:rotate-90">
                        <img className="max-md:w-[24px]" src="/images/arrow.png" alt="" />
                    </figure>
                    <AboutStep imgSrc="about-step-02">
                        お店(お店(運営者)は <br />
                        推し活ユーザーへ向け<br />
                        イベントを告知をする
                    </AboutStep>
                    <figure className="flex items-center justify-center p-6 md:px-11 max-md:rotate-90">
                        <img className="max-md:w-[24px]" src="/images/arrow.png" alt="" />
                    </figure>
                    <AboutStep imgSrc="about-step-03">
                        お客様は<br />
                        限定のNFTトレカを求め<br />
                        お店に訪れます。
                    </AboutStep>
                </div>
                <div className="flex justify-center mt-7 md:mt-11">
                    <ButtonContact />
                </div>
            </div>
        </div>
    );
  }
  