import HomeUseCasesItem from "./homeUseCasesItem";

export default function HomeUseCases() {
  return (
    <div className="relative bg-[url('/bg-use-cases-rp-sp.png')] bg-[length:100%_auto] bg-right-top md:bg-[url('/bg-use-cases-rp.png')]">
      <div className="bg-[url('/bg-use-cases-sp.png')] bg-[length:100%_auto] bg-right-top bg-no-repeat px-5 md:bg-[url('/bg-use-cases.png')]">
        <div className="relative w-full px-3 pb-9 pt-10 md:pb-[70px] md:pl-[12.5%] md:pt-[76px]">
          <h3 className="text-[32px] font-bold md:text-[48px]">Use Cases</h3>
          <p className="text-[14px] md:text-[18px]">
            Connecting the physical world with digital content can{" "}
            <br className="max-md:hidden" />
            provide new value and experiences for users.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 pl-2 max-md:pt-8 md:mt-[52px] md:grid-cols-4 md:gap-6 md:pl-[4.5%] md:pr-[1.8%] xl:gap-[47px]">
            <HomeUseCasesItem
              imgSrc="/case-01.png"
              title="Proof of ownership"
              content="The association of a physical item with an NFT can provide proof of ownership and transparency of transactions. It can clarify the authenticity of the item and prevent reproduction or counterfeiting."
            />
            <HomeUseCasesItem
              imgSrc="/case-02.png"
              title="Event ticket "
              content="Event organizers can provide NFC tags to attendees, allowing them to earn NFTs by scanning them when accessing the venue. In addition, it enables the provision of limited edition digital content and special offers to enhance the appeal of the event."
            />
            <HomeUseCasesItem
              imgSrc="/case-03.png"
              title="Tourism PR"
              content="At tourist and historical sites, NFC tags can be provided to visitors to offer NFT and special offers, including exclusive information, to enrich the tourist experience and allow them to enjoy and gain knowledge and information."
            />
            <HomeUseCasesItem
              imgSrc="/case-04.png"
              title="Marketing and promotion"
              content="Effectively promote a specific product or brand. You can offer limited edition NFTs or discount coupons as a driver to access physical locations or attend events. This can increase customer loyalty."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
