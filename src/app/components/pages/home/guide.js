import ButtonContact from "../../common/buttonContact";
import Title from "../../common/title";
import PropTypes from "prop-types";

function GuideItem({ imgSrc, children }) {
    return (
      <div className="flex-col flex items-center">
        <figure className="max-md:max-w-[160px]">
            <img src={'/images/'+imgSrc+'.png'} />
        </figure>
        <div className="text-[14px] md:text-[18px] font-bold text-center md:mt-10 mt-5">
            {children}
        </div>
      </div>
    );
  }
  
  GuideItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export default function Guide() {
    return (
        <div className="bg-[url('/images/tutorial-background.png')] xl:bg-[length:100%_100%] bg-[length:auto_100%] bg-center px-4 pb-8 md:pb-[60px] pt-[100px] md:pt-[184px]">
            <div className="w-full md:max-w-[960px] max-w-[380px] mx-auto">
                <Title>シーン別活用方法</Title>
                <div className="grid md:grid-cols-3 grid-cols-2 md:mt-[52px] mt-8 md:gap-x-[60px] gap-x-[20px] md:gap-y-[80px] gap-y-[30px]">
                    <GuideItem imgSrc="guide-01">
                        商業施設・小売店舗・飲食店
                    </GuideItem>
                    <GuideItem imgSrc="guide-02">
                    イベント・ライブ・コンサート
                    </GuideItem>
                    <GuideItem imgSrc="guide-03">
                    地域活性化・観光PR
                    </GuideItem>
                    <GuideItem imgSrc="guide-04">
                    保育園・幼稚園・学校・大学
                    </GuideItem>
                    <GuideItem imgSrc="guide-05">
                    ブライダル・ウェディング
                    </GuideItem>
                    <GuideItem imgSrc="guide-06">
                    スポーツ関連
                    </GuideItem>
                </div>
                <div className="flex justify-center mt-10 md:mt-16">
                    <ButtonContact />
                </div>
            </div>
        </div>
    );
  }
  