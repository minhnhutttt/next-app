import PropTypes from "prop-types";

function StepCard({ number, title, content, children }) {
  return (
    <div className="min-h-[530px] max-w-[310px] rounded-[20px] bg-white pt-[50px] shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)]">
      <p className="text-center text-[48px] font-bold leading-tight">
        {number}
      </p>
      <h6 className="text-center text-[22px] font-bold tracking-tight">
        {title}
      </h6>
      <div className="mt-6 flex justify-center">
        <p className="max-w-[230px] text-[16px]">{content}</p>
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

StepCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Create() {
  return (
    <>
      <div className="relative mt-[20%] px-5 pt-[9%] md:mt-[8%] md:pt-[3.5%]">
        <span className="z-1 absolute inset-0 h-[78.4%] rounded-[3vw] bg-[#18539E]"></span>
        <div className="relative mx-auto w-full max-w-[1440px]">
          <h4 className="mb-[5%] text-center text-[36px] font-bold leading-snug tracking-tight text-white md:text-[64px]">
            How to create a NFT business card ?
          </h4>
          <div className="mx-auto grid w-full max-w-[1040px] justify-center gap-5 md:grid-cols-3 lg:gap-[55px]">
            <StepCard
              number="01"
              title="Create a Wallet"
              content={
                <>
                  To use DIVER Biz, you need a DIVER Wallet.
                  <br />
                  Download the DIVER Wallet and create a wallet.
                </>
              }
            >
              <div className="flex flex-col items-center gap-4">
                <figure>
                  <img src="/logo-w.png" alt="DIVER Wallet" />
                </figure>
                <a href="/">
                  <img className="max-w-[175px]" src="/btn-apple.png" alt="" />
                </a>
                <a href="/">
                  <img className="max-w-[175px]" src="/btn-google.png" alt="" />
                </a>
              </div>
            </StepCard>
            <StepCard
              number="02"
              title="Create your own business card with NFT business card MINT service"
              content={
                <>
                  Create your NFT business card with the MINT service for NFT
                  business cards compatible with the DIVER Network.
                </>
              }
            >
              <div className="flex flex-col items-center gap-4 pt-16">
                <a
                  href="/"
                  className="relative flex h-[60px] w-[250px] items-center justify-center rounded-[10px] bg-[#18539E] text-[20px] font-bold text-white"
                >
                  Mint Service
                  <svg
                    className="absolute right-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                  >
                    <path
                      d="M7.57569 14.3167V5.68333C7.57569 5.025 8.39955 4.625 9.03402 4.98333L16.7424 9.3C16.8773 9.37516 16.9885 9.47913 17.0655 9.60225C17.1425 9.72536 17.1829 9.86362 17.1829 10.0042C17.1829 10.1447 17.1425 10.283 17.0655 10.4061C16.9885 10.5292 16.8773 10.6332 16.7424 10.7083L9.03402 15.0167C8.89119 15.098 8.72607 15.1438 8.55608 15.1494C8.38609 15.155 8.21754 15.1201 8.06821 15.0485C7.91887 14.9768 7.79429 14.871 7.70761 14.7422C7.62092 14.6134 7.57534 14.4664 7.57569 14.3167Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </StepCard>
            <StepCard
              number="03"
              title="Share NFT business card"
              content={
                <span className="mt-16 inline-block">
                  Conenct to DIVER Biz with DIVER Wallet and share your NFT
                  business cards.
                </span>
              }
            >
              <div className="flex flex-col items-center pt-2">
                <img src="/share-business.png" alt="" />
              </div>
            </StepCard>
          </div>
        </div>
      </div>
      <div className="relative mt-[20%] px-5 pt-[9%] md:mt-[8.4%] md:pt-[3.3%]">
        <span className="z-1 absolute inset-0 h-[78.4%] rounded-[3vw] bg-[#4FBBEB]"></span>
        <div className="relative mx-auto w-full max-w-[1440px]">
          <h4 className="text-center text-[36px] font-bold leading-snug tracking-tight text-white md:text-[64px]">
            How it works
          </h4>
          <p className="mb-[2%] text-center text-[13px] leading-snug text-white md:text-[16px]">
            DIVER Biz is currently available for iPhone and Android apps.
            <br />
            To use the app, please follow the steps below.
            <br />
            Download DIVER Wallet and create a Wallet in advance. (For receiving
            NFT)
          </p>
          <div className="mx-auto grid w-full max-w-[1040px] justify-center gap-5 md:grid-cols-3 lg:gap-[55px]">
            <StepCard number="01" title="Download DIVER Biz." content={<></>}>
              <div className="flex flex-col items-center gap-4 pt-3">
                <figure>
                  <img src="/logo-b.png" alt="DIVER Biz" />
                </figure>
                <a href="/">
                  <img className="max-w-[175px]" src="/btn-apple.png" alt="" />
                </a>
                <a href="/">
                  <img className="max-w-[175px]" src="/btn-google.png" alt="" />
                </a>
              </div>
            </StepCard>
            <StepCard
              number="02"
              title="Phrase login"
              content={<>Login with your Diver Wallet recovery phrase.</>}
            >
              <div className="flex flex-col items-center gap-4 pt-2">
                <figure>
                  <img src="/img-login.png" alt="" />
                </figure>
              </div>
            </StepCard>
            <StepCard
              number="03"
              title="Easy to send."
              content={
                <>
                  Select your business card NFT from your profile page, specify
                  the address of the recipient, and send it easily.
                </>
              }
            >
              <div className="flex flex-col items-center pt-[27px]">
                <img src="/img-connect.png" alt="" />
              </div>
            </StepCard>
          </div>
        </div>
      </div>
    </>
  );
}
