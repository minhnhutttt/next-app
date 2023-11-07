import ButtonContact from "../../common/buttonContact";
import Title from "../../common/title";
import PropTypes from "prop-types";

function AboutStep({ imgSrc, children }) {
  return (
    <div className="flex flex-col items-center">
      <figure>
        <img src={"/images/" + imgSrc + ".png"} />
      </figure>
      <div className="mt-3 text-center text-[13px] font-bold md:text-[16px]">
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
    <div id="about" className="mb-[28px] mt-[-200px] bg-[url('/images/about-background.png')] bg-[length:auto_100%] bg-top bg-no-repeat px-4 pt-[160px] md:mt-[-325px] md:pt-[265px]">
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1024px]">
        <Title>ABOUT</Title>
        <div className="mt-4 flex items-center max-md:flex-col">
          <figure className="max-md:max-w-[220px]">
            <img src="/images/img-about.png" alt="About" />
          </figure>
          <div className="flex-1 max-md:mt-4 md:ml-4">
            <h5 className="text-[18px] font-bold md:text-[24px]">
              <span className="relative z-0 inline-block before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1/2 before:w-full before:bg-[#F4ED19] before:content-['']">
                <span className="relative z-10">NFT化した「推し活トレカ」</span>
              </span>
              で人を呼び寄せ場所に魅力的を！
              <br />
              トレカ応援活動で新しい時代へ。未来の顧客集客戦略にいかそう！
            </h5>
            <p className="mt-4 text-[13px] font-medium tracking-[2px] md:mt-6 md:text-[16px] md:tracking-[3.2px]">
              押し活トレカシステムとは、NFTを使い集客に特化した「押し活トレカ配布システム」のことです。「押し活トレカ配布システム」は、キャラ、アイドル、アーティストなどのファンコミュニティにおいて、ファンが特定の「推し」を応援し、その応援活動を通じてトレーディングカード（トレカ）を獲得できる独自のシステムです。このシステムは、「推し」への熱狂的な支持を奨励し、応援者に感謝の意を表すために設計されています。
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 flex w-full max-w-[916px] justify-center max-md:flex-col md:mt-[51px] md:px-5">
          <AboutStep imgSrc="about-step-01">
            お店(運営者)は <br />
            NFT推し活トレカを作成
          </AboutStep>
          <figure className="flex items-center justify-center p-6 max-md:rotate-90 md:px-11">
            <img className="max-md:w-[24px]" src="/images/arrow.png" alt="" />
          </figure>
          <AboutStep imgSrc="about-step-02">
            お店(お店(運営者)は <br />
            推し活ユーザーへ向け
            <br />
            イベントを告知をする
          </AboutStep>
          <figure className="flex items-center justify-center p-6 max-md:rotate-90 md:px-11">
            <img className="max-md:w-[24px]" src="/images/arrow.png" alt="" />
          </figure>
          <AboutStep imgSrc="about-step-03">
            お客様は
            <br />
            限定のNFTトレカを求め
            <br />
            お店に訪れます。
          </AboutStep>
        </div>
        <div className="mt-7 flex justify-center md:mt-11">
          <div className="mb-[-7px]">
            <ButtonContact />
          </div>
        </div>
      </div>
    </div>
  );
}
