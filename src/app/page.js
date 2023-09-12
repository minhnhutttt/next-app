import Image from 'next/image'
import Link from 'next/link'
import Faq from './components/faq'

export default function Home() {
  return (
    <main className='mt-6'>
      <div className="px-5">
        <div className="w-full mx-auto max-w-[1600px] relative px-20 pt-[90px]">
          <span className="absolute bg-[#F2F2F2] w-full top-0 left-0 right-0 h-[65%] z-[-1] rounded-[30px] "></span>
          <div className="text-black text-8xl font-bold">The next generation of <br />distributed secure messengers.</div>
          <div className="flex mt-[3.5%]">
            <div className="">
              <img src="/fv-phone.png" alt="" />
            </div>
            <div className="relative w-[45%] ml-3">
              <div className="bg-[url('/web3.png')] absolute h-full bg-no-repeat bg-bottom flex items-end pb-[60px] w-full top-[-50%]">
                <div className="relative">
                  <div className="text-9xl font-bold text-center">WEB3.0</div>
                  <div className=" text-black text-[28px] font-medium text-center mt-3">Protect the privacy of everyone's communications.</div>
                </div>
                </div>
            </div>
          </div>
        </div>
          
        <div className="max-w-[1093px] w-full mx-auto relative flex items-center gap-[37px] mt-[110px] mb-11">
          <div className="w-[640px] flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="text-[64px] font-bold">What’s DIVER Kncok?</div>
            <div className="text-[18px]">Knock is a completely secure and private messaging application built on state-of-the-art technology and combines wallet functionality. End-to-end secure communication allows you the freedom to communicate anytime, anywhere, with anyone.</div>
          </div>
          <div className="">
            <img src="/img-diver.png" alt="What’s DIVER Kncok?" />
          </div>
        </div>
      </div>
      <div className="bg-[#F5FAFF] px-5 pt-[68px] pb-[104px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex justify-center">
            <div className="relative h-[214px] flex items-center pl-11">
              <div className="w-2.5 h-full left-0 top-0 absolute bg-[#0055A3] rounded-[50px]" />
              <div className="text-[100px] font-bold leading-none">Privacy × Various Functions</div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-[694px] text-[24px] font-medium pt-[54px]">You can communicate using a variety of calling and messaging features.Your privacy is completely protected.</div>
          <div className="flex items-center mt-14">
            <div className="flex-1 space-y-[103px]">
              <div className="flex items-center gap-[14px] w-full">
                <p className="text-[16px] font-medium flex-1">You can send text, photos, or files. You can record a Quick Send voice or instant video message</p>
                <figure>
                  <img src="/ic-01.png" alt="" />
                </figure>
              </div>
              <div className="flex items-center gap-[14px] w-full">
                <p className="text-[16px] font-medium flex-1">Everything from private use to business use can be done via group chat, video, or voice calls.</p>
                <figure>
                  <img src="/ic-02.png" alt="" />
                </figure>
              </div>
              <div className="flex items-center gap-[14px] w-full">
                <p className="text-[16px] font-medium flex-1">You can organize your message history with Disappearing Messages.</p>
                <figure>
                  <img src="/ic-03.png" alt="" />
                </figure>
              </div>
            </div>
            <div className="px-20">
              <img src="/phone.png" alt="" />
            </div>
            <div className="flex-1 space-y-[103px]">
              <div className="flex items-center gap-[14px] w-full">
                <figure>
                  <img src="/ic-04.png" alt="" />
                </figure>
                <p className="text-[16px] font-medium flex-1">Unlimited one-to-one and group voice and video calls.</p>
              </div>
              <div className="flex items-center gap-[14px] w-full">
                <figure>
                  <img src="/ic-05.png" alt="" />
                </figure>
                <p className="text-[16px] font-medium flex-1">You can create your own expressive stickers without intermediaries.</p>
              </div>
              <div className="flex items-center gap-[14px] w-full">
                <figure>
                  <img src="/ic-06.png" alt="" />
                </figure>
                <p className="text-[16px] font-medium flex-1">Seamlessly integrated with crypto wallets, Knock can handle global payments directly to anyone, anywhere, via chat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="mt-[95px]">
          <div className="w-full max-w-[1440px] mx-auto flex gap-[58px]">
            <div className="">
              <img src="/img-features.png" alt="" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[64px] flex items-center gap-4"><img src="/ic-features.png" alt="" /> Features</h3>
              <div className="space-y-9 mt-5 max-w-[400px] w-full ml-4">
                <div>
                  <p className="text-[24px] font-bold">Decentralized</p>
                  <p className="text-[18px] mt-2 leading-[1.4]">
                  All messages, videos, photos, data, etc. are decentralized across thousands of nodes and cannot be controlled, blocked, disabled, restricted or censored by anyone but the user.
                  </p>
                </div>
                <div>
                  <p className="text-[24px] font-bold">Full Anonymity</p>
                  <p className="text-[18px] mt-2 leading-[1.4]">
                  No registration or information entry required. No email or phone number required.No access to user device data.
                  </p>
                </div>
                <div>
                  <p className="text-[24px] font-bold">Encrypted Message</p>
                  <p className="text-[18px] mt-2 leading-[1.4]">
                  All messages, videos, photos, data, etc. are encrypted and decrypted completely on the user device and delivered end-to-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[85px]">
          <h3 className="text-black text-[36px] font-black underline text-center italic mb-5">Download the App now !</h3>
          <div className="max-w-[1008px] mx-auto w-full bg-[#0055A3] rounded-[30px] py-4 pl-14 pr-[92px] flex items-center justify-between">
            <figure>
              <img src="/logo-download.png" alt="Knock" />
            </figure>
            <div className="flex items-center gap-7">
              <Link href="/">
                <img src="/appstore.png" alt="" />
              </Link>
              <Link href="/">
                <img src="/google-play.png" alt="" />
              </Link>
            </div>
            </div>
        </div>
        <div className="mt-[165px] mb-[67px]">
          <h5 className="text-center text-[64px] font-bold">How it works</h5>
          <p className="text-center text-[16px] mt-3">
          Knock is currently available for iPhones and Android phones. <br />To Use the app, simply follow these steps. <br />*Download the DIVER Wallet in advance and create a Wallet. (For NFT reception)
          </p>
          <div className="flex w-full max-w-[1064px] mx-auto mt-[90px] gap-[67px]">
            <div className="w-[310px] bg-white rounded-[20px] shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] border border-[#0055A3] flex flex-col items-center pt-[72px] pb-12 px-2">
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
              <div className="mt-14">
                <p className="text-center text-[48px] font-bold leading-none">01</p>
                <p className="text-center text-[16px] font-medium">Download Knock (iOS, Android).</p>
              </div>
            </div>
            <div className="w-[310px] bg-white rounded-[20px] shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] border border-[#0055A3] flex flex-col items-center pt-[72px] pb-12 px-2">
              <div>
                <img src="/use-02.png" alt="" />
              </div>
              <div className="mt-12">
                <p className="text-center text-[48px] font-bold leading-none">02</p>
                <p className="text-center text-[16px] font-medium">Connect to Knock to DIVER Wallet.</p>
              </div>
            </div>
            <div className="w-[310px] bg-white rounded-[20px] shadow-[0px_4px_34px_0px_rgba(18,47,74,0.10)] border border-[#0055A3] flex flex-col items-center pt-[72px] pb-12 px-2">
              <div className="mb-7">
                <img src="/use-03.png" alt="" />
              </div>
              <div>
                <p className="text-center text-[48px] font-bold leading-none">03</p>
                <p className="text-center text-[16px] font-medium">Start DIVER Tag and read the NFC tag.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] px-5 flex items-center justify-center gap-[62px] pt-[73px] pb-[68px]">
        <div className="">
          <img src="/diver-wallet-logo.png" alt="" />
        </div>
        <div className="flex items-center gap-7">
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
