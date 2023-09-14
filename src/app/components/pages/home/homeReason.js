export default function HomeReason() {
    return (
      <div className="px-5 mb-16 md:mb-[170px]">
        <div className="relative w-full md:max-w-[1440px] max-w-[440px] mx-auto">
            <div className="bg-[url('/bg-circle.png')] md:bg-[length:auto_100%] bg-[length:100%_auto] bg-no-repeat flex items-center md:pl-[21.8%] pt-[17.8%] pb-[11.5%] max-md:flex-col">
              <div className="md:mr-[5.5%] max-md:mb-5">
                  <img src="/tag.png" alt="" />
              </div>
              <div className="flex-1">
                  <h5 className="text-[24px] md:text-[48px] font-bold tracking-[-0.04em]">Why use NFC tags instead of QR codes?</h5>
                  <p className="text-[14px] md:text-[18px] leading-[1.4] mt-3 md:mt-5">
                  NFC tags are an irreplaceable and unique physical product.This is because only NFC tags, in combination with blockchain technology, can provide true uniqueness and ownership of physical items and digital information, maximizing the value of NFT.NFC tags support encrypted communications and are highly secure, so there is no risk of duplication or information leakage.
                  </p>
              </div>
            </div>
        </div>
      </div>
    );
  }
  