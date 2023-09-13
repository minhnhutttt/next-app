import HomeUseCasesItem from "./homeUseCasesItem";

export default function HomeUseCases() {
    return (
      <div className="px-5 relative bg-[url('/bg-use-cases.png')] bg-[length:87.45%_100%] bg-no-repeat bg-right-top">
        <div className="relative w-full pl-[12.5%] pt-[76px] pb-[70px]">
            <h3 className="text-[48px] font-bold">Use Cases</h3>
            <p className="text-[18px]">
                Connecting the physical world with digital content can <br />provide new value and experiences for users.
            </p>
            <div className="grid grid-cols-4 gap-[47px] mt-[52px] pl-[4.5%] pr-[1.8%]">
              <HomeUseCasesItem imgSrc="/case-01.png" title="Proof of ownership" content="The association of a physical item with an NFT can provide proof of ownership and transparency of transactions. It can clarify the authenticity of the item and prevent reproduction or counterfeiting." />
              <HomeUseCasesItem imgSrc="/case-02.png" title="Event ticket " content="Event organizers can provide NFC tags to attendees, allowing them to earn NFTs by scanning them when accessing the venue. In addition, it enables the provision of limited edition digital content and special offers to enhance the appeal of the event." />
              <HomeUseCasesItem imgSrc="/case-03.png" title="Tourism PR" content="At tourist and historical sites, NFC tags can be provided to visitors to offer NFT and special offers, including exclusive information, to enrich the tourist experience and allow them to enjoy and gain knowledge and information." />
              <HomeUseCasesItem imgSrc="/case-04.png" title="Marketing and promotion" content="Effectively promote a specific product or brand. You can offer limited edition NFTs or discount coupons as a driver to access physical locations or attend events. This can increase customer loyalty." />
            </div>
        </div>
      </div>
    );
  }
  