import HomeFeatureItem from "./homeFeaturesItem";

export default function HomeFeatures() {
  return (
    <div className="relative mb-16 bg-[url('/bg-features-rp-sp.png')] bg-[length:100%_auto] bg-left-top max-md:pb-5 md:mb-[160px] md:bg-[url('/bg-features-rp.png')]">
      <div className="bg-[url('/bg-features-sp.png')] bg-[length:100%_auto] bg-left-top bg-no-repeat px-5 md:bg-[url('/bg-features.png')]">
        <div className="relative mx-auto w-full max-w-[400px] pb-5 pt-10 md:max-w-[1440px] md:pb-[60px] md:pr-[98px] md:pt-[76px]">
          <h3 className="text-[32px] font-bold md:text-[48px]">Features</h3>
          <div className="mt-5 grid gap-8 max-md:w-[95%] md:mt-7 md:grid-cols-3 md:gap-10">
            <HomeFeatureItem
              imgSrc="/feature-item-01.png"
              title="Easy and simple"
              content="Set NFT to NCT tag with high-speed communication and intuitive operation. Transfer NFTs with one touch. Provides a smooth user experience."
            />
            <HomeFeatureItem
              imgSrc="/feature-item-02.png"
              title="Fusion of physical and digital"
              content="Working together, NFT and NFC tags enable seamless integration of physical and digital items. At exhibitions and events, you can share art information and stories with just a touch."
            />
            <HomeFeatureItem
              imgSrc="/feature-item-03.png"
              title="Secure and safe"
              content="NFC tags support encrypted communication, which in combination with NFT's blockchain technology provides stronger security and safety."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
