import ButtonContact from "../../common/buttonContact";
import Title from "../../common/title";
import PropTypes from "prop-types";

function FlowItem({ step, children }) {
    return (
      <div className="relative bg-[url('/images/flow-img.png')] max-md:[&:nth-child(3)]:after:hidden bg-cover flex-col flex pt-[70%] w-full max-w-[173px] aspect-[173/339] items-center after:content-[''] after:absolute md:after:right-[-50px] after:right-[-25px] after:bg-[url('/images/flow-arrow.png')] md:after:w-[79px] md:after:h-[26px] after:w-[40px] after:h-[13px] after:top-1/2 after:-translate-y-1/2 after:bg-cover last:after:hidden after:z-10">
        <p className="text-[30px] md:text-[40px] lg:text-[60px] font-extrabold leading-none">{step}</p>
        <div className="text-[14px] md:text-[16px] lg:text-[18px] font-extrabold text-center mt-2">
            {children}
        </div>
      </div>
    );
  }
  
  FlowItem.propTypes = {
    step: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export default function Flow() {
    return (
        <div className="px-4 pb-8 md:pb-[60px] pt-10 md:pt-[60px]">
            <div className="w-full md:max-w-[1140px] max-w-[440px] mx-auto">
                <Title>推し活トレカ実施までの流れ</Title>
                <div className="grid md:grid-cols-6 grid-cols-3 items-center mt-10 md:mt-[84px] gap-2.5 md:gap-5 mb-10 md:mb-[91px]">
                    <FlowItem step="1">お問い合わせ</FlowItem>
                    <FlowItem step="2">ヒアリング</FlowItem>
                    <FlowItem step="3">ご提案</FlowItem>
                    <FlowItem step="4">ご契約</FlowItem>
                    <FlowItem step="5">企画・制作</FlowItem>
                    <FlowItem step="6">イベント<br />スタート</FlowItem>
                </div>
                <div className="w-full max-w-[820px] mx-auto md:rounded-[30px] rounded-[15px] border-black border-2 md:border-4 flex flex-col items-center justify-center px-4 pt-6 pb-[34px]">
                    <p className="flex justify-center items-center mb-4 gap-2">
                        <img className="max-md:max-w-[18px]" src="/images/icon-mark.png" alt="" />
                        <span className="text-[14px] md:text-[24px] font-bold text-center">はじめての方は、<br className="md:hidden" />まずはお問い合わせください。</span>
                    </p>
                    <ButtonContact />
                </div>
            </div>
        </div>
    );
  }
  