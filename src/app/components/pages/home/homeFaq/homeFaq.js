import HomeFaqItem from './homeFaqItem'

const data = [
    {
      id: "01",
      question: "What is an NFT tag?",
      awsner:<>Near Field Communication (NFC) tags are devices that use near field communication technology to exchange data; NFC tags typically consist of a small chip and antenna that can be attached to or embedded in an object or location, allowing digital information to be physically item.</>,
    },
    {
      id: "02",
      question: "Where can I purchase NFC tags?",
      awsner:<>You can purchase NFC tags from the purchase page of this website. <br />Click [Buy] button</>,
    },
    {
      id: "03",
      question: "Can I set the NFT as many times as I want?",
      awsner:<>At this time, NFTs can only be set once. The ability to set NFTs over and over again will be supported in the next version. <br /> <span>*It is a memory and cannot be used permanently.</span></>,
    },
    {
      id: "04",
      question: "How close can I read NFTs?",
      awsner: <>Please bring the reader/writer as close as 3 cm. <br />It depends on the performance and accuracy of the reader/writer.</>
    },
    {
      id: "05",
      question: "I have already activated the DIVER Tag, but cannot read the NFC tag.",
      awsner:<>Please check if NFC of the smartphone itself is turned on. <br />NFC read/write is not possible when the device is in sleep mode. Please do so with the device unlocked.</>
    },
    {
      id: "06",
      question: "Which chains are supported by the NFTs that can be set with DIVER Tag?",
      awsner: <>DIVER Time Chain is supported.</>
    },
    {
      id: "07",
      question: "What address should I specify for the NFT transfer destination?",
      awsner: <>Please specify the address of DIVER (DIVER Wallet), which is a wallet that supports DIVER Time Chain. <br />If you do not have DIVER Wallet, please download it and create a wallet. <br />[iOS] button [Android] button</>
    },
  ];

export default function HomeFaq() {
    return (
      <div className="md:pb-[145px] md:pt-[72px]">
        <div className="mx-auto w-full max-w-[940px] px-5">
          <h4 className="text-center text-[24px] font-bold md:text-[28px] lg:text-[48px] tracking-tighter">
            FAQ
          </h4>
          <div className="mx-auto mt-5 w-full border-t border-[#313333] md:mt-14">
            {data.map((data) => {
              return (
                <HomeFaqItem
                  question={data.question}
                  awnser={data.awsner}
                  id={data.id}
                  key={data.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  