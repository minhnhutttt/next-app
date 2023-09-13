import HomeWorksItem from "./homeWorksItem";
import HomeWorksTitle from "./homeWorksTitle";

export default function HomeWorks() {
    return (
      <div className="px-5 mt-[30px] mb-20">
        <div className="w-full max-w-[1440px] mx-auto">
            <h3 className="text-center font-bold text-[48px]">How it works</h3>
            <p className="text-center text-[16px] mt-4">
            DIVER Tag is currently available for iPhones and Android phones. <br />To Use the app, simply follow these steps.
            </p>
            <div className="mt-11">
                <HomeWorksTitle>How to set up NFT</HomeWorksTitle>
                <div className="grid grid-cols-4 gap-[67px] mt-[54px]">
                    <HomeWorksItem imgSrc="/setup-01.png">Purchase NFC tags in advance.</HomeWorksItem>
                    <HomeWorksItem imgSrc="/setup-02.png">Download DIVER Tag (iOS, Android).</HomeWorksItem>
                    <HomeWorksItem imgSrc="/setup-03.png">Start DIVER Tag and read the NFC tag.</HomeWorksItem>
                    <HomeWorksItem imgSrc="/setup-04.png">Follow the app&apos;s instructions to <br />enter the NFT information you <br />wish to set.</HomeWorksItem>
                </div>
            </div>
            <div className="mt-[90px]">
                <HomeWorksTitle>How to transfer NFTs</HomeWorksTitle>
                <div className="grid grid-cols-4 gap-[67px] mt-[50px]">
                    <HomeWorksItem imgSrc="/transfer-01.png">Download the DIVER Wallet in <br />advance and create a Wallet. <br />(For receiving NFTs)</HomeWorksItem>
                    <HomeWorksItem imgSrc="/transfer-02.png">Start DIVER Tag and read the NFC tag.</HomeWorksItem>
                    <HomeWorksItem imgSrc="/transfer-03.png">Follow the app&apos;s operation to obtain the NFT. enter the address of the DIVER Wallet and transfer it. <br /><span className="text-[14px]">*The address must be the address of DIVER (DIV).</span></HomeWorksItem>
                    <HomeWorksItem imgSrc="/transfer-04.png">Confirm receipt of the NFT in the destination DIVER Wallet.</HomeWorksItem>
                </div>
            </div>
        </div>
      </div>
    );
  }
  