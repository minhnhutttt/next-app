import Link from 'next/link'
import Faq from './components/faq'

export default function Home() {
  return (
    <main className='mt-6'>
      <div className="px-5">
        <div className="w-full mx-auto max-w-[1600px] relative px-5 md:px-14 lg:px-20 pt-8 md:pt-[90px]">
          <span className="absolute bg-[#F2F2F2] w-full top-0 left-0 right-0 h-[90%] xl:h-[65%] z-[-1] rounded-[30px] "></span>
          <div className="text-black text-[5vw] md:text-[32px] lg:text-[70px] xl:text-8xl font-bold">The next generation of <br />distributed secure messengers.</div>
          <div className="flex max-md:justify-center mt-[3.5%]">
            <div className="max-xl:w-[50%]">
              <img src="/fv-phone.png" alt="" />
            </div>
            <div className="relative w-[45%] ml-3">
              <div className="bg-[url('/web3.png')] md:absolute md:h-[35vw] bg-no-repeat bg-center bg-[length:auto_100%] flex items-end pb-2 md:pb-[60px] w-full md:top-[-5vw] lg:top-[-14vw]">
                <div className="relative">
                  <div className="text-[10vw] md:text-[60px] lg:text-[100px] xl:text-9xl font-bold text-center">WEB3.0</div>
                  <div className="text-black text-[3vw] md:text-[20px] lg:text-[28px] font-medium text-center mt-3">Protect the privacy of everyone's communications.</div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1093px] w-full mx-auto relative flex items-center md:gap-[37px] gap-6 md:mt-[110px] mt-[60px] mb-11 max-md:flex-col-reverse">
          <div className="flex-1 max-w-[640px] flex-col justify-start items-start md:gap-[30px] gap-5 inline-flex">
            <div className="text-[32px] md:text-[36px] lg:text-[64px] font-bold">What’s DIVER Kncok?</div>
            <div className="md:text-[18px] text-[16px]">Knock is a completely secure and private messaging application built on state-of-the-art technology and combines wallet functionality. End-to-end secure communication allows you the freedom to communicate anytime, anywhere, with anyone.</div>
          </div>
          <div className="max-md:w-[280px] max-xl:w-1/3">
            <img src="/img-diver.png" alt="What’s DIVER Kncok?" />
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFF] px-5 pt-10 md:pt-[68px] md:pb-[104px] pb-[50px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex justify-center">
            <div className="relative h-[80px] md:h-[214px] flex items-center max-md:px-4 md:pl-11">
              <div className="w-1 md:w-2.5 h-full left-0 top-0 absolute bg-[#0055A3] rounded-[50px]" />
              <div className="text-[32px] md:text-[100px] font-bold leading-none max-md:text-center">Privacy × Various Functions</div>
            </div>
          </div>
          <div className="w-full mx-auto md:max-w-[694px] max-w-[440px] max-md:text-center text-[14px] md:text-[24px] font-medium pt-6 md:pt-[54px]">You can communicate using a variety of calling and messaging features.Your privacy is completely protected.</div>
          <div className="flex items-center max-md:flex-col max-md:max-w-[440px] mx-auto mt-8 md:mt-14">
            <div className="flex-1 space-y-10 md:space-y-[103px]">
              <div className="flex items-center gap-3 md:gap-[14px] w-full">
                <p className="text-[14px] md:text-[16px] font-medium flex-1">You can send text, photos, or files. You can record a Quick Send voice or instant video message</p>
                <div className="max-md:w-14 max-xl:w-20">
                  <img src="/ic-01.png" alt="" />
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-[14px] w-full">
                <p className="text-[14px] md:text-[16px] font-medium flex-1">Everything from private use to business use can be done via group chat, video, or voice calls.</p>
                <div className="max-md:w-14 max-xl:w-20">
                  <img src="/ic-02.png" alt="" />
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-[14px] w-full">
                <p className="text-[14px] md:text-[16px] font-medium flex-1">You can organize your message history with Disappearing Messages.</p>
                <div className="max-md:w-14 max-xl:w-20">
                  <img src="/ic-03.png" alt="" />
                </div>
              </div>
            </div>
            <div className="max-md:py-8 px-5 md:px-8 max-md:w-[240px] max-xl:w-1/3 xl:px-20">
              <img src="/phone.png" alt="" />
            </div>
            <div className="flex-1 space-y-10 md:space-y-[103px]">
              <div className="flex items-center gap-3 md:gap-[14px] w-full">
                <div className="max-md:w-14 max-xl:w-20">
                  <img src="/ic-04.png" alt="" />
                </div>
                <p className="text-[14px] md:text-[16px] font-medium flex-1">Unlimited one-to-one and group voice and video calls.</p>
              </div>
              <div className="flex items-center gap-3 md:gap-[14px] w-full">
                <div className="max-md:w-14 max-xl:w-20">
                  <img src="/ic-05.png" alt="" />
                </div>
                <p className="text-[14px] md:text-[16px] font-medium flex-1">You can create your own expressive stickers without intermediaries.</p>
              </div>
              <div className="flex items-center gap-3 md:gap-[14px] w-full">
                <div className="max-md:w-14 max-xl:w-20">
                  <img src="/ic-06.png" alt="" />
                </div>
                <p className="text-[14px] md:text-[16px] font-medium flex-1">Seamlessly integrated with crypto wallets, Knock can handle global payments directly to anyone, anywhere, via chat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="mt-12 md:mt-[95px]">
          <div className="w-full max-w-[1440px] mx-auto flex max-md:flex-col gap-8 md:gap-[58px]">
            <div className="max-md:w-full max-xl:w-1/2">
              <img src="/img-features.png" alt="" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[32px] md:text-[48px] lg:text-[64px] flex items-center gap-4"><img className="max-md:w-10" src="/ic-features.png" alt="" /> Features</h3>
              <div className="md:space-y-9 space-y-6 mt-5 max-w-[400px] w-full md:ml-4">
                <div>
                  <p className="text-[18px] md:text-[24px] font-bold">Decentralized</p>
                  <p className="text-[14px] md:text-[18px] mt-2 leading-[1.4]">
                  All messages, videos, photos, data, etc. are decentralized across thousands of nodes and cannot be controlled, blocked, disabled, restricted or censored by anyone but the user.
                  </p>
                </div>
                <div>
                  <p className="text-[18px] md:text-[24px] font-bold">Full Anonymity</p>
                  <p className="text-[14px] md:text-[18px] mt-2 leading-[1.4]">
                  No registration or information entry required. No email or phone number required.No access to user device data.
                  </p>
                </div>
                <div>
                  <p className="text-[18px] md:text-[24px] font-bold">Encrypted Message</p>
                  <p className="text-[14px] md:text-[18px] mt-2 leading-[1.4]">
                  All messages, videos, photos, data, etc. are encrypted and decrypted completely on the user device and delivered end-to-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-[85px]">
          <h3 className="text-black text-[24px] md:text-[36px] font-black underline text-center italic mb-3 md:mb-5">Download the App now !</h3>
          <div className="max-w-[440px] md:max-w-[1008px] mx-auto w-full bg-[#0055A3] rounded-[30px] py-6 md:py-4 px-4 md:pl-14 md:pr-[92px] flex items-center max-md:flex-col justify-between gap-4 md:gap-5">
            <figure>
              <img className="max-md:w-[200px]" src="/logo-download.png" alt="Knock" />
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
        <div className="mt-20 md:mt-[165px] mb-8 md:mb-[67px]">
          <h5 className="text-center text-[32px] md:text-[64px] font-bold">How it works</h5>
          <p className="text-center text-[14px] md:text-[16px] mt-2 md:mt-3">
          Knock is currently available for iPhones and Android phones. <br />To Use the app, simply follow these steps. <br />*Download the DIVER Wallet in advance and create a Wallet. (For NFT reception)
          </p>
          <div className="flex w-full max-w-[440px] md:max-w-[1064px] mx-auto mt-10 md:mt-[90px] max-md:flex-col gap-6 lg:gap-[67px]">
            <div className="w-full md:w-[310px] bg-white rounded-[20px] shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] border border-[#0055A3] flex flex-col items-center pt-8 md:pt-[72px] pb-6 md:pb-12 px-2 justify-between">
              <div>
                <div>
                  <img src="/logo-02.png" alt="" />
                </div>
                <div className="flex flex-col gap-5 mt-7">
                  <Link href="/">
                    <img className='max-w-[135px]' src="/appstore.png" alt="" />
                  </Link>
                  <Link href="/">
                    <img className='max-w-[135px]' src="/google-play.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-14">
                <p className="text-center text-[36px] max-md:mb-1 md:text-[48px] font-bold leading-none">01</p>
                <p className="text-center text-[16px] font-medium">Download Knock (iOS, Android).</p>
              </div>
            </div>
            <div className="w-full md:w-[310px] bg-white rounded-[20px] shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] border border-[#0055A3] flex flex-col items-center pt-8 md:pt-[72px] pb-6 md:pb-12 px-2 justify-between">
              <div>
                <img src="/use-02.png" alt="" />
              </div>
              <div className="mt-8 md:mt-12">
                <p className="text-center text-[36px] max-md:mb-1 md:text-[48px] font-bold leading-none">02</p>
                <p className="text-center text-[16px] font-medium">Connect to Knock to DIVER Wallet.</p>
              </div>
            </div>
            <div className="w-full md:w-[310px] bg-white rounded-[20px] shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] border border-[#0055A3] flex flex-col items-center pt-8 md:pt-[72px] pb-6 md:pb-12 px-2 justify-between">
              <div className="mb-7">
                <img src="/use-03.png" alt="" />
              </div>
              <div>
                <p className="text-center text-[36px] max-md:mb-1 md:text-[48px] font-bold leading-none">03</p>
                <p className="text-center text-[16px] font-medium">Start DIVER Tag and read the NFC tag.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] px-5 flex items-center justify-center max-md:flex-col gap-8 md:gap-[62px] py-8 md:pt-[73px] md:pb-[68px]">
        <div className="">
          <img className="max-md:w-[240px]" src="/diver-wallet-logo.png" alt="" />
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
      <Faq />
    </main>
  )
}
