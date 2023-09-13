import HomeFeatureItem from "./homeFeaturesItem";

export default function HomeFeatures() {
    return (
      <div className="px-5 relative mb-[160px] bg-[url('/bg-features.png')] bg-[length:87.45%_100%] bg-no-repeat bg-left-top">
        <div className="relative w-full max-w-[1440px] mx-auto pt-[76px] pr-[98px] pb-[60px]">
            <h3 className="text-[48px] font-bold">Features</h3>
            <div className="grid grid-cols-3 gap-10 mt-7">
              <HomeFeatureItem imgSrc="/feature-item-01.png" title="Easy and simple" content="Set NFT to NCT tag with high-speed communication and intuitive operation. Transfer NFTs with one touch. Provides a smooth user experience." />
              <HomeFeatureItem imgSrc="/feature-item-02.png" title="Fusion of physical and digital" content="Working together, NFT and NFC tags enable seamless integration of physical and digital items. At exhibitions and events, you can share art information and stories with just a touch." />
              <HomeFeatureItem imgSrc="/feature-item-03.png" title="Secure and safe" content="NFC tags support encrypted communication, which in combination with NFT's blockchain technology provides stronger security and safety." />
            </div>
        </div>
      </div>
    );
  }
  