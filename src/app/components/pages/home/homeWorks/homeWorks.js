import HomeWorksItem from "./homeWorksItem";
import HomeWorksTitle from "./homeWorksTitle";

export default function HomeWorks() {
  return (
    <div className="mb-10 px-5 md:mb-20 md:mt-[30px]">
      <div className="mx-auto w-full max-w-[600px] md:max-w-[1440px]">
        <h3 className="text-center text-[24px] font-bold md:text-[48px]">
          How it works
        </h3>
        <p className="mt-2 text-center text-[13px] md:mt-4 md:text-[16px]">
          DIVER Tag is currently available for iPhones and Android phones.{" "}
          <br />
          To Use the app, simply follow these steps.
        </p>
        <div className="mt-7 md:mt-11">
          <HomeWorksTitle>How to set up NFT</HomeWorksTitle>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-[54px] md:gap-8 lg:grid-cols-4 xl:gap-[67px]">
            <HomeWorksItem imgSrc="/setup-01.png">
              Purchase NFC tags in advance.
            </HomeWorksItem>
            <HomeWorksItem imgSrc="/setup-02.png">
              Download DIVER Tag (iOS, Android).
            </HomeWorksItem>
            <HomeWorksItem imgSrc="/setup-03.png">
              Start DIVER Tag and read the NFC tag.
            </HomeWorksItem>
            <HomeWorksItem imgSrc="/setup-04.png">
              Follow the app&apos;s instructions to{" "}
              <br className="max-md:hidden" />
              enter the NFT information you <br className="max-md:hidden" />
              wish to set.
            </HomeWorksItem>
          </div>
        </div>
        <div className="mt-14 md:mt-[90px]">
          <HomeWorksTitle>How to transfer NFTs</HomeWorksTitle>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-[50px] md:gap-8 lg:grid-cols-4 xl:gap-[67px]">
            <HomeWorksItem imgSrc="/transfer-01.png">
              Download the DIVER Wallet in <br className="max-md:hidden" />
              advance and create a Wallet. <br className="max-md:hidden" />
              (For receiving NFTs)
            </HomeWorksItem>
            <HomeWorksItem imgSrc="/transfer-02.png">
              Start DIVER Tag and read the NFC tag.
            </HomeWorksItem>
            <HomeWorksItem imgSrc="/transfer-03.png">
              Follow the app&apos;s operation to obtain the NFT. enter the
              address of the DIVER Wallet and transfer it. <br />
              <span className="text-[11px] md:text-[14px]">
                *The address must be the address of DIVER (DIV).
              </span>
            </HomeWorksItem>
            <HomeWorksItem imgSrc="/transfer-04.png">
              Confirm receipt of the NFT in the destination DIVER Wallet.
            </HomeWorksItem>
          </div>
        </div>
      </div>
    </div>
  );
}
