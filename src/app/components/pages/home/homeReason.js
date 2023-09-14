export default function HomeReason() {
  return (
    <div className="mb-16 px-5 md:mb-[170px]">
      <div className="relative mx-auto w-full max-w-[440px] md:max-w-[1440px]">
        <div className="flex items-center bg-[url('/bg-circle.png')] bg-[length:100%_auto] bg-no-repeat pb-[11.5%] pt-[17.8%] max-md:flex-col md:bg-[length:auto_100%] md:pl-[21.8%]">
          <div className="max-md:mb-5 md:mr-[5.5%]">
            <img src="/tag.png" alt="" />
          </div>
          <div className="flex-1">
            <h5 className="text-[24px] font-bold tracking-[-0.04em] md:text-[48px]">
              Why use NFC tags instead of QR codes?
            </h5>
            <p className="mt-3 text-[14px] leading-[1.4] md:mt-5 md:text-[18px]">
              NFC tags are an irreplaceable and unique physical product.This is
              because only NFC tags, in combination with blockchain technology,
              can provide true uniqueness and ownership of physical items and
              digital information, maximizing the value of NFT.NFC tags support
              encrypted communications and are highly secure, so there is no
              risk of duplication or information leakage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
