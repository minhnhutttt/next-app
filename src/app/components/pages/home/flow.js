import ButtonContact from "../../common/buttonContact";
import Title from "../../common/title";
import PropTypes from "prop-types";

function FlowItem({ step, children }) {
  return (
    <div className="relative flex aspect-[173/339] w-full max-w-[173px] flex-col items-center bg-[url('/images/flow-img.png')] bg-cover pt-[70%] after:absolute after:right-[-25px] after:top-1/2 after:z-10 after:h-[13px] after:w-[40px] after:-translate-y-1/2 after:bg-[url('/images/flow-arrow.png')] after:bg-cover after:content-[''] last:after:hidden md:after:right-[-50px] md:after:h-[26px] md:after:w-[79px] max-md:[&:nth-child(3)]:after:hidden">
      <p className="text-[30px] font-extrabold leading-none md:text-[40px] lg:text-[60px]">
        {step}
      </p>
      <div className="mt-2 text-center text-[14px] font-extrabold md:text-[16px] lg:text-[18px]">
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
    <div id="flow" className="px-4 pb-8 pt-10 md:pb-[60px] md:pt-[60px] overflow-hidden">
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1140px]">
        <Title>推し活トレカ実施までの流れ</Title>
        <div className="mb-10 mt-10 grid grid-cols-3 items-center gap-2.5 md:mb-[91px] md:mt-[84px] md:grid-cols-6 md:gap-5">
          <FlowItem step="1">お問い合わせ</FlowItem>
          <FlowItem step="2">ヒアリング</FlowItem>
          <FlowItem step="3">ご提案</FlowItem>
          <FlowItem step="4">ご契約</FlowItem>
          <FlowItem step="5">企画・制作</FlowItem>
          <FlowItem step="6">
            イベント
            <br />
            スタート
          </FlowItem>
        </div>
        <div className="mx-auto flex w-full max-w-[820px] flex-col items-center justify-center rounded-[15px] border-2 border-black px-4 pb-[34px] pt-6 md:rounded-[30px] md:border-4">
          <p className="mb-4 flex items-center justify-center gap-2">
            <img
              className="max-md:max-w-[18px]"
              src="/images/icon-mark.png"
              alt=""
            />
            <span className="text-center text-[14px] font-bold md:text-[24px]">
              はじめての方は、
              <br className="md:hidden" />
              まずはお問い合わせください。
            </span>
          </p>
          <ButtonContact />
        </div>
      </div>
    </div>
  );
}
