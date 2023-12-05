import PropTypes from "prop-types";
import Title from "../../common/title";

function StepCard({ number, title, children }) {
  return (
    <div className="md:min-h-[440px] px-4 w-full flex flex-col max-w-[360px] border-2 border-[#CD9CF5] rounded-[20px] bg-white shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)]">
    <div className="flex flex-col items-center justify-center">
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

export default function HowTo() {
  return (
    <div className="flex bg-[#BF5AF2]/[0.1] py-10 md:pt-[74px] md:pb-[62px]" id="howTo">
        <div className="w-full md:max-w-[1200px] max-w-[360px] px-5 mx-auto">
            <Title head="HOW TO">使い方</Title>
                <div className="mx-auto grid justify-center gap-12 grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-10 pt-[32px]">
                <StepCard
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
                  title={<>設置されたQRコードを <br />カメラで読み込む</>}
                >
                  <div className="flex flex-col items-center justify-end gap-4">
                    <figure>
                      <img src="/images/img-login.png" alt="" />
                    </figure>
                  </div>
                </StepCard>
                <StepCard
                  title={<>DIVER Walletで <br />NFTを受け取る</>}
                >
                  <div className="flex flex-col items-center justify-end">
                    <img src="/images/img-connect.png" alt="" />
                  </div>
                </StepCard>
              </div>
        </div>
    </div>
  );
}
