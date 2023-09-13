import Link from "next/link";
import Faq from "./components/faq";

export default function Home() {
  return (
    <main className="mt-6">
      {/* MV */}
      <div className="px-5">
        <div className="relative mx-auto w-full max-w-[1600px] px-5 pt-8 md:px-14 md:pt-[90px] lg:px-20">
          <span className="absolute left-0 right-0 top-0 z-[-1] h-[90%] w-full rounded-[30px] bg-[#F2F2F2] xl:h-[65%] "></span>
          <div className="text-[5vw] font-bold text-black md:text-[32px] lg:text-[70px] xl:text-8xl">
            The next generation of <br />
            distributed secure messengers.
          </div>
          <div className="mt-[3.5%] flex max-md:justify-center">
            <div className="max-xl:w-[50%]">
              <img src="/fv-phone.png" alt="" />
            </div>
            <div className="relative ml-3 w-[45%]">
              <div className="flex w-full items-end bg-[url('/web3.png')] bg-[length:auto_100%] bg-center bg-no-repeat pb-2 md:absolute md:top-[-5vw] md:h-[35vw] md:pb-[60px] lg:top-[-14vw]">
                <div className="relative">
                  <div className="text-center text-[10vw] font-bold md:text-[60px] lg:text-[100px] xl:text-9xl">
                    WEB3.0
                  </div>
                  <div className="mt-3 text-center text-[3vw] font-medium text-black md:text-[20px] lg:text-[28px]">
                    Protect the privacy of everyone's communications.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mb-11 mt-[60px] flex w-full max-w-[1093px] items-center gap-6 max-md:flex-col-reverse md:mt-[110px] md:gap-[37px]">
          <div className="inline-flex max-w-[640px] flex-1 flex-col items-start justify-start gap-5 md:gap-[30px]">
            <div className="text-[32px] font-bold md:text-[36px] lg:text-[64px]">
              What’s DIVER Kncok?
            </div>
            <div className="text-[16px] md:text-[18px]">
              Knock is a completely secure and private messaging application
              built on state-of-the-art technology and combines wallet
              functionality. End-to-end secure communication allows you the
              freedom to communicate anytime, anywhere, with anyone.
            </div>
          </div>
          <div className="max-xl:w-1/3 max-md:w-[280px]">
            <img src="/img-diver.png" alt="What’s DIVER Kncok?" />
          </div>
        </div>
      </div>

      {/* Privacy × Various Functions */}
      <div className="bg-[#F5FAFF] px-5 pb-[50px] pt-10 md:pb-[104px] md:pt-[68px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex justify-center">
            <div className="relative flex h-[80px] items-center max-md:px-4 md:h-[214px] md:pl-11">
              <div className="absolute left-0 top-0 h-full w-1 rounded-[50px] bg-[#0055A3] md:w-2.5" />
              <div className="text-[32px] font-bold leading-none max-md:text-center md:text-[100px]">
                Privacy × Various Functions
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[440px] pt-6 text-[14px] font-medium max-md:text-center md:max-w-[694px] md:pt-[54px] md:text-[24px]">
            You can communicate using a variety of calling and messaging
            features.Your privacy is completely protected.
          </div>
          <div className="mx-auto mt-8 flex items-center max-md:max-w-[440px] max-md:flex-col md:mt-14">
            <div className="flex-1 space-y-10 md:space-y-[103px]">
              <div className="flex w-full items-center gap-3 md:gap-[14px]">
                <p className="flex-1 text-[14px] font-medium md:text-[16px]">
                  You can send text, photos, or files. You can record a Quick
                  Send voice or instant video message
                </p>
                <div className="max-xl:w-20 max-md:w-14">
                  <img src="/ic-01.png" alt="" />
                </div>
              </div>
              <div className="flex w-full items-center gap-3 md:gap-[14px]">
                <p className="flex-1 text-[14px] font-medium md:text-[16px]">
                  Everything from private use to business use can be done via
                  group chat, video, or voice calls.
                </p>
                <div className="max-xl:w-20 max-md:w-14">
                  <img src="/ic-02.png" alt="" />
                </div>
              </div>
              <div className="flex w-full items-center gap-3 md:gap-[14px]">
                <p className="flex-1 text-[14px] font-medium md:text-[16px]">
                  You can organize your message history with Disappearing
                  Messages.
                </p>
                <div className="max-xl:w-20 max-md:w-14">
                  <img src="/ic-03.png" alt="" />
                </div>
              </div>
            </div>
            <div className="px-5 max-xl:w-1/3 max-md:w-[240px] max-md:py-8 md:px-8 xl:px-20">
              <img src="/phone.png" alt="" />
            </div>
            <div className="flex-1 space-y-10 md:space-y-[103px]">
              <div className="flex w-full items-center gap-3 md:gap-[14px]">
                <div className="max-xl:w-20 max-md:w-14">
                  <img src="/ic-04.png" alt="" />
                </div>
                <p className="flex-1 text-[14px] font-medium md:text-[16px]">
                  Unlimited one-to-one and group voice and video calls.
                </p>
              </div>
              <div className="flex w-full items-center gap-3 md:gap-[14px]">
                <div className="max-xl:w-20 max-md:w-14">
                  <img src="/ic-05.png" alt="" />
                </div>
                <p className="flex-1 text-[14px] font-medium md:text-[16px]">
                  You can create your own expressive stickers without
                  intermediaries.
                </p>
              </div>
              <div className="flex w-full items-center gap-3 md:gap-[14px]">
                <div className="max-xl:w-20 max-md:w-14">
                  <img src="/ic-06.png" alt="" />
                </div>
                <p className="flex-1 text-[14px] font-medium md:text-[16px]">
                  Seamlessly integrated with crypto wallets, Knock can handle
                  global payments directly to anyone, anywhere, via chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-5">
        <div className="mt-12 md:mt-[95px]">
          <div className="mx-auto flex w-full max-w-[1440px] gap-8 max-md:flex-col md:gap-[58px]">
            <div className="max-xl:w-1/2 max-md:w-full">
              <img src="/img-features.png" alt="" />
            </div>
            <div className="flex-1">
              <h3 className="flex items-center gap-4 text-[32px] font-bold md:text-[48px] lg:text-[64px]">
                <img className="max-md:w-10" src="/ic-features.png" alt="" />{" "}
                Features
              </h3>
              <div className="mt-5 w-full max-w-[400px] space-y-6 md:ml-4 md:space-y-9">
                <div>
                  <p className="text-[18px] font-bold md:text-[24px]">
                    Decentralized
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.4] md:text-[18px]">
                    All messages, videos, photos, data, etc. are decentralized
                    across thousands of nodes and cannot be controlled, blocked,
                    disabled, restricted or censored by anyone but the user.
                  </p>
                </div>
                <div>
                  <p className="text-[18px] font-bold md:text-[24px]">
                    Full Anonymity
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.4] md:text-[18px]">
                    No registration or information entry required. No email or
                    phone number required.No access to user device data.
                  </p>
                </div>
                <div>
                  <p className="text-[18px] font-bold md:text-[24px]">
                    Encrypted Message
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.4] md:text-[18px]">
                    All messages, videos, photos, data, etc. are encrypted and
                    decrypted completely on the user device and delivered
                    end-to-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-[85px]">
          <h3 className="mb-3 text-center text-[24px] font-black italic text-black underline md:mb-5 md:text-[36px]">
            Download the App now !
          </h3>
          <div className="mx-auto flex w-full max-w-[440px] items-center justify-between gap-4 rounded-[30px] bg-[#0055A3] px-4 py-6 max-md:flex-col md:max-w-[1008px] md:gap-5 md:py-4 md:pl-14 md:pr-[92px]">
            <figure>
              <img
                className="max-md:w-[200px]"
                src="/logo-download.png"
                alt="Knock"
              />
            </figure>
            <div className="flex items-center gap-3 md:gap-7">
              <Link href="/">
                <img src="/appstore.png" alt="" />
              </Link>
              <Link href="/">
                <img src="/google-play.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-20 md:mb-[67px] md:mt-[165px]">
          <h5 className="text-center text-[32px] font-bold md:text-[64px]">
            How it works
          </h5>
          <p className="mt-2 text-center text-[14px] md:mt-3 md:text-[16px]">
            Knock is currently available for iPhones and Android phones. <br />
            To Use the app, simply follow these steps. <br />
            *Download the DIVER Wallet in advance and create a Wallet. (For NFT
            reception)
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-[440px] gap-6 max-md:flex-col md:mt-[90px] md:max-w-[1064px] lg:gap-[67px]">
            <div className="flex w-full flex-col items-center justify-between rounded-[20px] border border-[#0055A3] bg-white px-2 pb-6 pt-8 shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] md:w-[310px] md:pb-12 md:pt-[72px]">
              <div>
                <div>
                  <img src="/logo-02.png" alt="" />
                </div>
                <div className="mt-7 flex flex-col gap-5">
                  <Link href="/">
                    <img className="max-w-[135px]" src="/appstore.png" alt="" />
                  </Link>
                  <Link href="/">
                    <img
                      className="max-w-[135px]"
                      src="/google-play.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-14">
                <p className="text-center text-[36px] font-bold leading-none max-md:mb-1 md:text-[48px]">
                  01
                </p>
                <p className="text-center text-[16px] font-medium">
                  Download Knock (iOS, Android).
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between rounded-[20px] border border-[#0055A3] bg-white px-2 pb-6 pt-8 shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] md:w-[310px] md:pb-12 md:pt-[72px]">
              <div>
                <img src="/use-02.png" alt="" />
              </div>
              <div className="mt-8 md:mt-12">
                <p className="text-center text-[36px] font-bold leading-none max-md:mb-1 md:text-[48px]">
                  02
                </p>
                <p className="text-center text-[16px] font-medium">
                  Connect to Knock to DIVER Wallet.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between rounded-[20px] border border-[#0055A3] bg-white px-2 pb-6 pt-8 shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] md:w-[310px] md:pb-12 md:pt-[72px]">
              <div className="mb-7">
                <img src="/use-03.png" alt="" />
              </div>
              <div>
                <p className="text-center text-[36px] font-bold leading-none max-md:mb-1 md:text-[48px]">
                  03
                </p>
                <p className="text-center text-[16px] font-medium">
                  Start DIVER Tag and read the NFC tag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download */}
      <div className="flex items-center justify-center gap-8 bg-[#F5F5F5] px-5 py-8 max-md:flex-col md:gap-[62px] md:pb-[68px] md:pt-[73px]">
        <div className="">
          <img
            className="max-md:w-[240px]"
            src="/diver-wallet-logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-5 md:gap-7">
          <Link href="/">
            <img src="/appstore.png" alt="" />
          </Link>
          <Link href="/">
            <img src="/google-play.png" alt="" />
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <Faq />
    </main>
  );
}
