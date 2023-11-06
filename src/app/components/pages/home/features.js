'use client'
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import ButtonContact from "../../common/buttonContact";
import Title from "../../common/title";
import PropTypes from "prop-types";


  function FeatureItem({ imgSrc, title, feature, children, shadow = false }) {
    return (
        <div className={`w-full h-full md:max-w-[540px] max-w-[280px] p-4 md:p-[30px] bg-white md:rounded-[30px] rounded-[15px] ${shadow ? 'shadow-[4px_4px_14px_0px_rgba(175,139,153,0.30)]' : ''}`}>
            <figure className="md:rounded-[20px] rounded-[10px] overflow-hidden">
                <img src={'/images/'+imgSrc+'.png'} alt={title} />
            </figure>
            <div className="md:mt-6 mt-4">
                <div className="flex justify-center">
                    <p className="text-[16px] md:text-[20px] font-black border-4 bg-white border-black rounded-lg w-[100px] md:w-[128px] h-[44px] md:h-[56px] flex items-center justify-center rotate-[-15deg]">特徴その<span className="text-[20px] md:text-[30px]">{feature}</span></p>
                </div>
                <h4 className="text-[20px] md:text-[32px] font-black text-center mt-2">
                    {title}
            </h4>
            <p className="text-[14px] md:text-[18px] font-medium md:mt-3 mt-2">{children}</p>
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
        <div className="bg-[url('/images/features-background.png')] bg-cover bg-top pb-20 pt-8 md:pt-[62px]">
            <div className=" px-4">
            <div className="w-full md:max-w-[1200px] max-w-[440px] mx-auto">
                <Title>押し活トレカシステムの特徴</Title>
                <div className="flex justify-center md:mt-6 mt-3 md:mb-10 mb-6">
                    <p className="w-full max-w-[762px] md:text-[16px] text-[13px] font-medium md:tracking-[3.2px] tracking-[2px]">
                    推しアイドルやキャラクターなど限定トレカをNFTにして配布し、お店にご来店いただくことを目的にしています。NFTトレカはSNSを活用し、この魅力的な特典を発信することで、集客力を高める絶好のチャンス！トレカを受け取ったお客様が、特典を自慢できるよう自発的にシェアすることを目標にします。また、口コミ効果が爆発的に広がり、新たな顧客層を魅了することができます。
                    </p>
                </div>
                <div className="bg-white py-[6px] px-4 max-md:items-center max-md:flex-col md:px-[44px] flex rounded-[30px] shadow-[4px_4px_14px_0px_rgba(175,139,153,0.30)]">
                        <FeatureItem feature="1" imgSrc="feature-01" title="推しコンテンツ選び">
                        NFT化する推しをリストからお選びいただけます。<br />リストにない推しでも調整いたします。まずは、お気軽にお問い合わせください。
                        </FeatureItem>
                        <div className="md:ml-7 py-2 md:py-9">
                            <p className="text-black md:text-[24px] text-[18px] font-bold leading-none relative flex items-center pt-4"><span className="text-[30px] md:text-[54px]">◾</span>推しリストカテゴリ</p>
                            <div className="md:text-[18px] text-[14px] font-medium text-black leading-loose md:mb-9 mb-6">
                            <p>
                                <span>アイドル</span><span>キャラクター</span><span>スポーツ選手</span><span>YouTuber・ブロガー</span>
                            </p>
                            <p><span>俳優・女優</span><span>政治家</span><span>趣味・特技</span><span>作家・監督</span><span>など</span>
                            </p>
                            <p className="text-[16px]">
                                <span>※リスト内容や費用については、ご契約時にお話しいたします。</span>
                            </p>
                            </div>
                            <figure>
                                <img src="/images/feature-img.png" alt="" />
                            </figure>
                        </div>
                </div>
            </div>
            </div>
            <div className="md:w-[93.0556%] ml-auto mt-[34px] pl-4">
            <div className="">
                <Splide aria-label="" options={ {
                        perPage: 3,
                        perMove: 1,
                        gap   : '1rem',
                        height: '540px',
                        type   : 'loop',
                        autoWidth: true,
                        arrows: false,
                        pagination: false,
                        breakpoints: {
                            768: {
                                height: '400px',
                            },
                      }
                    } }>
                    <SplideSlide className="pb-2">
                        <FeatureItem feature="2" imgSrc="feature-02" title="応援活動報酬NFTトレカ" shadow>
                            ファンの皆様の活動に応じて、ご来店限定トレカをデザイン作成し配布できるようにいたします。<br />
                            応援活動で獲得した「押し活トレカ」をお店の位置情報と一緒にSNSで拡散してもらいましょう。
                        </FeatureItem>
                    </SplideSlide>
                    <SplideSlide className="pb-2">
                        <FeatureItem feature="3" imgSrc="feature-03" title="【AR】アバター出現システム" shadow>
                        GPSなど位置情報を認識することで、お店や会場などの空間に推しアバターを出現させることができます。
                        </FeatureItem>
                    </SplideSlide>
                    <SplideSlide className="pb-2">
                        <FeatureItem feature="4" imgSrc="feature-04" title="備品作成・設置代行" shadow>
                        イベントを成功させるためには、看板やポップさまざまな準備品が必要ですが、企画・制作・プロモーション展開までワンストップで実施いたします。
                        </FeatureItem>
                    </SplideSlide>
                    </Splide>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                    <ButtonContact />
                </div>
        </div>
    );
  }
  