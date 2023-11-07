import PropTypes from "prop-types";
import Title from "../../common/title";

function StepCard({ number, title, children }) {
  return (
    <div className="md:min-h-[530px] px-4 w-full flex flex-col max-w-[360px] border-2 border-[#CD9CF5] rounded-[20px] bg-white shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)]">
    <div className="flex justify-center flex-col items-center md:-mt-[64px] -mt-[40px]">
        <p className="text-center text-[50px] md:text-[88px] font-bold leading-tight md:w-[127px] md:h-[127px] w-[80px] h-[80px] bg-[url('/images/num-bg.png')] bg-cover flex items-center justify-center">
            {number}
        </p>
        
      <h6 className="text-center text-[20px] md:text-[24px] lg:text-[28px] font-bold tracking-tight pt-6 md:pt-10">
        {title}
      </h6>
      </div>
      <div className="flex justify-center flex-1 pt-[27px]">{children}</div>
    </div>
  );
}

StepCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default function HowToUse() {
  return (
    <>
      <div id="how-to-use" className="relative mt-[40px] pb-[100px] md:pb-[162px]">
        <div className="relative">
          <Title>使い方</Title>
          <div className="relative mt-2">
            <span className="z-1 absolute inset-0 h-[62.4%] rounded-[3vw] bg-[#9CE3FE]"></span>
            <div className="relative mx-auto w-full md:max-w-[1440px] max-w-[400px] px-5 ">
              <div className="mx-auto grid w-full max-w-[1160px] justify-center gap-12 grid-cols-1 md:grid-cols-3 lg:gap-10 pt-[90px]">
                <StepCard
                  number="1"
                  title={<>DIVER Walletを <br />ダインロード</>}
                >
                  <div className="flex flex-col items-center gap-6 pb-8">
                    <figure>
                      <img src="/images/logo-w.png" alt="DIVER Wallet" />
                    </figure>
                    <a href="/">
                      <img
                        className="max-w-[175px]"
                        src="/images/btn-apple.png"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        className="max-w-[175px]"
                        src="/images/btn-google.png"
                        alt=""
                      />
                    </a>
                  </div>
                </StepCard>
                <StepCard
                  number="2"
                  title={<>設置されたQRコードを <br />カメラで読み込む</>}
                >
                  <div className="flex flex-col items-center justify-end gap-4">
                    <figure>
                      <img src="/images/img-login.png" alt="" />
                    </figure>
                  </div>
                </StepCard>
                <StepCard
                  number="3"
                  title={<>DIVER Walletで <br />NFTを受け取る</>}
                >
                  <div className="flex flex-col items-center justify-end ">
                    <img src="/images/img-connect.png" alt="" />
                  </div>
                </StepCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
