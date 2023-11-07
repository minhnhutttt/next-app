"use client";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import ButtonContact from "../../common/buttonContact";
import Title from "../../common/title";
import PropTypes from "prop-types";

function FeatureItem({ imgSrc, title, feature, children, shadow = false }) {
  return (
    <div
      className={`h-full w-full max-w-[280px] rounded-[15px] bg-white p-4 md:max-w-[540px] md:rounded-[30px] md:p-[30px] ${
        shadow ? "shadow-[4px_4px_14px_0px_rgba(175,139,153,0.30)]" : ""
      }`}
    >
      <figure className="overflow-hidden rounded-[10px] md:rounded-[20px]">
        <img src={"/images/" + imgSrc + ".png"} alt={title} />
      </figure>
      <div className="mt-4 md:mt-6">
        <div className="flex justify-center">
          <p className="flex h-[44px] w-[100px] rotate-[-15deg] items-center justify-center rounded-lg border-4 border-black bg-white text-[16px] font-black md:h-[56px] md:w-[128px] md:text-[20px]">
            特徴その
            <span className="text-[20px] md:text-[30px]">{feature}</span>
          </p>
        </div>
        <h4 className="mt-2 text-center text-[20px] font-black md:text-[32px]">
          {title}
        </h4>
        <p className="mt-2 text-[14px] font-medium md:mt-3 md:text-[18px]">
          {children}
        </p>
      </div>
    </div>
  );
}

FeatureItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  featue: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
};
export default function Features() {
  return (
    <div id="feature" className="bg-[url('/images/features-background.png')] bg-[length:100%_100%] bg-top pb-20 pt-8 md:pt-[62px]">
      <div className=" px-4">
        <div className="mx-auto w-full max-w-[440px] md:max-w-[1200px]">
          <Title>押し活トレカシステムの特徴</Title>
          <div className="mb-6 mt-3 flex justify-center md:mb-10 md:mt-6">
            <p className="w-full max-w-[762px] text-[13px] font-medium tracking-[2px] md:text-[16px] md:tracking-[3.2px]">
              推しアイドルやキャラクターなど限定トレカをNFTにして配布し、お店にご来店いただくことを目的にしています。NFTトレカはSNSを活用し、この魅力的な特典を発信することで、集客力を高める絶好のチャンス！トレカを受け取ったお客様が、特典を自慢できるよう自発的にシェアすることを目標にします。また、口コミ効果が爆発的に広がり、新たな顧客層を魅了することができます。
            </p>
          </div>
          <div className="flex rounded-[30px] bg-white px-4 py-[6px] shadow-[4px_4px_14px_0px_rgba(175,139,153,0.30)] max-md:flex-col max-md:items-center md:px-[44px]">
            <FeatureItem
              feature="1"
              imgSrc="feature-01"
              title="推しコンテンツ選び"
            >
              NFT化する推しをリストからお選びいただけます。
              <br />
              リストにない推しでも調整いたします。まずは、お気軽にお問い合わせください。
            </FeatureItem>
            <div className="py-2 md:ml-7 md:py-9">
              <p className="relative flex items-center pt-4 text-[18px] font-bold leading-none text-black md:text-[24px]">
                <span className="text-[30px] md:text-[54px]">◾</span>
                推しリストカテゴリ
              </p>
              <div className="mb-6 text-[14px] font-medium leading-loose text-black md:mb-9 md:text-[18px]">
                <p>
                  <span>アイドル</span>
                  <span>キャラクター</span>
                  <span>スポーツ選手</span>
                  <span>YouTuber・ブロガー</span>
                </p>
                <p>
                  <span>俳優・女優</span>
                  <span>政治家</span>
                  <span>趣味・特技</span>
                  <span>作家・監督</span>
                  <span>など</span>
                </p>
                <p className="text-[16px]">
                  <span>
                    ※リスト内容や費用については、ご契約時にお話しいたします。
                  </span>
                </p>
              </div>
              <figure>
                <img src="/images/feature-img.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto mt-[34px] pl-4 md:w-[93.0556%]">
        <div className="">
          <Splide
            aria-label=""
            options={{
              perPage: 3,
              perMove: 1,
              gap: "1rem",
              height: "540px",
              type: "loop",
              autoWidth: true,
              arrows: false,
              pagination: false,
              breakpoints: {
                768: {
                  height: "400px",
                },
              },
            }}
          >
            <SplideSlide className="pb-2">
              <FeatureItem
                feature="2"
                imgSrc="feature-02"
                title="応援活動報酬NFTトレカ"
                shadow
              >
                ファンの皆様の活動に応じて、ご来店限定トレカをデザイン作成し配布できるようにいたします。
                <br />
                応援活動で獲得した「押し活トレカ」をお店の位置情報と一緒にSNSで拡散してもらいましょう。
              </FeatureItem>
            </SplideSlide>
            <SplideSlide className="pb-2">
              <FeatureItem
                feature="3"
                imgSrc="feature-03"
                title="【AR】アバター出現システム"
                shadow
              >
                GPSなど位置情報を認識することで、お店や会場などの空間に推しアバターを出現させることができます。
              </FeatureItem>
            </SplideSlide>
            <SplideSlide className="pb-2">
              <FeatureItem
                feature="4"
                imgSrc="feature-04"
                title="備品作成・設置代行"
                shadow
              >
                イベントを成功させるためには、看板やポップさまざまな準備品が必要ですが、企画・制作・プロモーション展開までワンストップで実施いたします。
              </FeatureItem>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <ButtonContact />
      </div>
    </div>
  );
}
