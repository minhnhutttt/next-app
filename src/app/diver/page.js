import Link from "next/link";
import DiverFeature from "./diverFeature";

export default function Diver() {
  return (
    <main className="relative overflow-hidden pt-[160px] md:pt-[14%] pb-[225px]">
      <div className="w-full">
        <div className="relative flex items-center justify-center">
            <img src="/images/diver-head.png" alt="Diver Storage" />
            <p className="absolute top-1/2 left-0 text-center right-0 -translate-y-1/2 md:text-[36px] text-[24px] text-white font-bold px-5">Embrace Your Role as a Pilot of the Earth</p>
        </div>
        <div className="flex justify-center px-5 max-md:mt-7">
            <p className="md:text-[16px] text-[14px] text-white max-w-[690px] leading-loose tracking-[0.1em]">
            Step into a new era of environmental stewardship with our next-generation Hyper-distributed data storage. Our technology ensures the safety of your data while contributing to a sustainable future for our planet.
            </p>
        </div>
        <div className="mt-12">
            <h3 className="flex items-center justify-center md:mb-10 mb-8">
                <img className="max-md:max-w-[260px]" src="/images/logo-diver.png" alt="DIVER Storage" />
            </h3>
            <div className="md:flex">
                <div className="md:w-1/2 px-6 md:px-[70px] flex justify-center bg-white md:h-[900px] h-[600px]">
                    <div className="flex flex-col items-center justify-center w-full max-w-[580px]">
                        <figure>
                            <img className="max-md:w-[100px]" src="/images/logo-environment.png" alt="" />
                        </figure>
                        <h5 className="text-[24px] font-black text-[#2A5293] mt-8 md:mt-[54px] tracking-widest">
                        Environmental Protection and Contribution to the Futur
                        </h5>
                        <p className="md:text-[16px] text-[13px] text-[#2A5293] mt-9 md:mt-[58px] tracking-widest">
                        Protecting the future of our planet is of utmost importance to us. DIVER Storage leads a new era of data protection with consideration for the Earth's environment. Our eco-friendly approach is part of our effort to preserve the planet's natural resources and leave a thriving Earth for future generations.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 px-6 md:px-[70px] flex justify-center bg-[#2A5293] md:h-[900px] h-[600px]">
                    <div className="flex flex-col items-center justify-center w-full max-w-[580px]">
                        <figure>
                            <img className="max-md:w-[100px]" src="/images/logo-eco.png" alt="" />
                        </figure>
                        <h5 className="text-[24px] font-black text-white mt-8 md:mt-[54px] tracking-widest">
                        Eco-Friendly  Hyper-Distributed Data Storage System
                        </h5>
                        <p className="md:text-[16px] text-[13px] text-white mt-9 md:mt-[58px] tracking-widest">
                        Our hyper-distributed data storage system aims to minimize environmental impact while providing functionality equal to or greater than existing cloud data storage solutions. Through energy-efficient operations, we also contribute to reducing CO2 emissions. Despite being eco-friendly, our system ensures the highest level of security, keeping your data safe at all times.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <DiverFeature />
        <div className="px-5">
            <div className="md:mt-[140px] mt-[100px]">
                <h4 className="md:text-[48px] font-semibold text-white text-center text-[28px] mb-6 md:mb-8">Available Features</h4>
                <div className="flex justify-center">
                    <p className="md:text-[18px] text-[14px] text-white max-w-[695px] leading-loose tracking-[0.15em]">
                    Our platform provides a range of functionalities for an enhanced user experience. You can effortlessly preview, upload, and download files thanks to our intuitive interface. Organize your data efficiently with our folder management feature and easily share information with other users via our sharing function. Security is paramount; therefore, we implement end-to-end encryption and two-factor authentication to ensure comprehensive data protection.
                    </p>
                </div>
            </div>
            <div className="md:mt-[140px] mt-[100px]">
                <h4 className="md:text-[48px] font-semibold text-white text-center text-[28px] mb-6 md:mb-8">Pricing</h4>
                <div className="flex justify-center">
                    <p className="md:text-[18px] text-[14px] text-white max-w-[695px] leading-loose tracking-[0.15em] text-center">
                        Get a lifetime DIVER Storage plan! <br />
                        <br />
                        Encrypted file storage and sharing<br />
                        Files stored forever<br />
                        Zero knowledge encryption
                    </p>
                </div>
            </div>
        </div>
        <div className="md:pt-[100px] pt-[60px] w-full md:max-w-[800px] xl:max-w-[1340px] max-w-[440px] px-5 mx-auto">
        <div className="bg-white px-5 md:px-20 flex max-xl:flex-wrap max-xl:justify-center md:gap-[54px]">
            <div className="flex-1 max-w-[232px] py-8 md:py-[60px]">
                <div className="md:mb-6 mb-4">
                    <p className="md:text-[24px] text-[18px] font-extrabold text-[#231D4F] leading-tight pl-6">25,000 DIV</p>
                    <p className="text-right font-['Work_Sans'] text-[#848199] md:text-[17px] text-[14px] pr-10">/Lifetime</p>
                </div>
                <p className="md:text-[28px] text-[20px] font-bold text-[#231D4F] mb-1">Starter</p>
                <p className="text-[#848199] md:text-[15px] text-[13px]">100% encrypted communication</p>
                <div className="md:mt-8 mt-6 space-y-2.5 md:mb-[56px] mb-9">
                    <p className="flex gap-2.5">
                        <span><img src="/images/check.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-[#848199]">2 GB Storage</span>
                    </p>
                    <p className="flex gap-2.5">
                        <span><img src="/images/check.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-[#848199]">Unlimited devices</span>
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link href="#" className="w-[207px] h-[45px] bg-[#6DB8E5]/[.2] flex items-center justify-center text-black md:text-[15px] text-[13px] font-semibold rounded-[24px]">Choose plan</Link>
                </div>
            </div>
            <div className="flex-1 max-w-[232px] py-8 md:py-[60px]">
                <div className="md:mb-6 mb-4">
                    <p className="md:text-[24px] text-[18px] font-extrabold text-[#231D4F] leading-tight pl-6">2,500,000 DIV</p>
                    <p className="text-right font-['Work_Sans'] text-[#848199] md:text-[17px] text-[14px] pr-10">/Lifetime</p>
                </div>
                <p className="md:text-[28px] text-[20px] font-bold text-[#231D4F] mb-1">Standard</p>
                <p className="text-[#848199] md:text-[15px] text-[13px]">100% encrypted communication</p>
                <div className="md:mt-8 mt-6 space-y-2.5 md:mb-[56px] mb-9">
                    <p className="flex gap-2.5">
                        <span><img src="/images/check.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-[#848199]">500 GB Storage</span>
                    </p>
                    <p className="flex gap-2.5">
                        <span><img src="/images/check.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-[#848199]">Unlimited devices</span>
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link href="#" className="w-[207px] h-[45px] bg-[#6DB8E5]/[.2] flex items-center justify-center text-black md:text-[15px] text-[13px] font-semibold rounded-[24px]">Choose plan</Link>
                </div>
            </div>
          <div className="bg-[#2A5293] px-5 md:px-[30px] drop-shadow-[0_42px_34px_rgba(82,67,194,0.3)] relative md:top-[-32px] flex-1 max-w-[292px] max-md:mt-5">
            <div className="py-8 md:pb-[60px] md:pt-[40px] ">
              <div className="flex justify-end mb-3">
                <div className="w-[127px] h-7 bg-[#9541FF] rounded-[13px] flex items-center justify-center text-[10px] font-bold text-white">
                MOST POPULAR
                </div>
              </div>
                <div className="md:mb-6 mb-4">
                    <p className="md:text-[34px] text-[24px] font-extrabold text-white leading-tight max-md:pl-2.5">8,000,000 DIV</p>
                    <p className="text-right font-['Work_Sans'] text-white md:text-[17px] text-[14px] pr-10">/Lifetime</p>
                </div>
                <p className="md:text-[28px] text-[20px] font-bold text-white mb-1">Pro</p>
                <p className="text-white md:text-[15px] text-[13px]">100% encrypted communication</p>
                <div className="md:mt-8 mt-6 space-y-2.5 md:mb-[56px] mb-9">
                    <p className="flex gap-2.5">
                        <span><img src="/images/check-w.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-white">2 TB Storage</span>
                    </p>
                    <p className="flex gap-2.5">
                        <span><img src="/images/check-w.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-white">Unlimited devices</span>
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link href="#" className="w-[232px] h-[45px] bg-[#0047FF] flex items-center justify-center text-white md:text-[15px] text-[13px] font-semibold rounded-[24px]">Choose plan</Link>
                </div>
            </div>
            </div>
            <div className="flex-1 max-w-[232px] py-[60px]">
                <div className="md:mb-6 mb-4">
                    <p className="md:text-[24px] text-[18px] font-extrabold text-[#231D4F] leading-tight pl-6">14,000,000 DIV</p>
                    <p className="text-right font-['Work_Sans'] text-[#848199] md:text-[17px] text-[14px] pr-10">/Lifetime</p>
                </div>
                <p className="md:text-[28px] text-[20px] font-bold text-[#231D4F] mb-1">Business</p>
                <p className="text-[#848199] md:text-[15px] text-[13px]">100% encrypted communication</p>
                <div className="md:mt-8 mt-6 space-y-2.5 md:mb-[56px] mb-9">
                    <p className="flex gap-2.5">
                        <span><img src="/images/check.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-[#848199]">5 TB Storage</span>
                    </p>
                    <p className="flex gap-2.5">
                        <span><img src="/images/check.png" alt="" /></span>
                        <span className="md:text-[16px] text-[13px] text-[#848199]">Unlimited devices</span>
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link href="#" className="w-[207px] h-[45px] bg-[#6DB8E5]/[.2] flex items-center justify-center text-black md:text-[15px] text-[13px] font-semibold rounded-[24px]">Choose plan</Link>
                </div>
            </div>
        </div>
        </div>
        <div className="px-5">
            <div className="md:mt-[140px] mt-[100px]">
                <h4 className="md:text-[48px] font-semibold text-white text-center text-[28px] mb-6 md:mb-8">Pricing and Value of Our System</h4>
                <div className="flex justify-center">
                    <p className="md:text-[18px] text-[14px] text-white max-w-[695px] leading-loose tracking-[0.15em]">
                    Each plan of DIVER Storage is offered at an affordable price, with the expectation of increased value through future enhancements. The current features are not the final version, as new functionalities will be added in line with updates. As more features are integrated, the prices of the plans will gradually rise. Starting at the current price allows you to secure an eco-friendly and cost-effective data storage solution.
                    </p>
                </div>
            </div>
            <div className="md:mt-[140px] mt-[100px]">
                <h4 className="md:text-[48px] font-semibold text-white text-center text-[28px] mb-6 md:mb-8">To Those Looking Toward the Future,</h4>
                <div className="flex justify-center">
                    <p className="md:text-[18px] text-[14px] text-white max-w-[695px] leading-loose tracking-[0.15em]">
                    Join DIVER Storage and help build a sustainable future together. Our eco-friendly data management system protects your data securely while minimizing environmental impact. Choosing DIVER Storage now is a significant step towards a healthier future for our planet. As pioneers of an eco-friendly digital world, let's pave the way to the future together.
                    </p>
                </div>
            </div>
        </div>
        <div className="w-full max-w-[823px] mx-auto bg-white flex items-center justify-center md:mt-[60px] mt-10 py-[60px] md:py-[118px] px-6">
            <div className="w-full md:max-w-[502px] max-w-[360px]">
                <figure className="flex items-center justify-center">
                    <img className="max-md:max-w-[280px]" src="/images/diver-download.png" alt="" />
                </figure>
                <div className="flex justify-center md:mt-7 mt-5">
                    <Link href="/" className="">
                        <img className="max-md:max-w-[180px]" src="/images/chrome-web-store.png" alt="" />
                    </Link>
                </div>
                <div className="flex justify-center md:mt-10 mt-7">
                    <img src="/images/coming-soon.png" alt="" />
                </div>
                <div className="flex gap-4 opacity-50">
                    <p>
                        <img src="/images/btn-app-store.png" alt="" />
                    </p>
                    <p>
                        <img src="/images/btn-google-play.png" alt="" />
                    </p>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
