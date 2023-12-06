import Link from "next/link";
import DiverFeature from "./diverFeature";

export default function Diver() {
  return (
    <main className="relative overflow-hidden pb-[225px] pt-[160px] md:pt-[14%]">
      <div className="w-full">
        <div className="relative flex items-center justify-center">
          <img src="/images/diver-head.png" alt="Diver Storage" />
          <p className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-5 text-center text-[24px] font-bold text-white md:text-[36px]">
            Embrace Your Role as a Pilot of the Earth
          </p>
        </div>
        <div className="flex justify-center px-5 max-md:mt-7">
          <p className="max-w-[690px] text-[14px] leading-loose tracking-[0.1em] text-white md:text-[16px]">
            Step into a new era of environmental stewardship with our
            next-generation Hyper-distributed data storage. Our technology
            ensures the safety of your data while contributing to a sustainable
            future for our planet.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="mb-8 flex items-center justify-center md:mb-10">
            <img
              className="max-md:max-w-[260px]"
              src="/images/logo-diver.png"
              alt="DIVER Storage"
            />
          </h3>
          <div className="md:flex">
            <div className="flex h-[600px] justify-center bg-white px-6 md:h-[900px] md:w-1/2 md:px-[70px]">
              <div className="flex w-full max-w-[580px] flex-col items-center justify-center">
                <figure>
                  <img
                    className="max-md:w-[100px]"
                    src="/images/logo-environment.png"
                    alt=""
                  />
                </figure>
                <h5 className="mt-8 text-[24px] font-black tracking-widest text-[#2A5293] md:mt-[54px]">
                  Environmental Protection and Contribution to the Futur
                </h5>
                <p className="mt-9 text-[13px] tracking-widest text-[#2A5293] md:mt-[58px] md:text-[16px]">
                  Protecting the future of our planet is of utmost importance to
                  us. DIVER Storage leads a new era of data protection with
                  consideration for the Earth's environment. Our eco-friendly
                  approach is part of our effort to preserve the planet's
                  natural resources and leave a thriving Earth for future
                  generations.
                </p>
              </div>
            </div>
            <div className="flex h-[600px] justify-center bg-[#2A5293] px-6 md:h-[900px] md:w-1/2 md:px-[70px]">
              <div className="flex w-full max-w-[580px] flex-col items-center justify-center">
                <figure>
                  <img
                    className="max-md:w-[100px]"
                    src="/images/logo-eco.png"
                    alt=""
                  />
                </figure>
                <h5 className="mt-8 text-[24px] font-black tracking-widest text-white md:mt-[54px]">
                  Eco-Friendly  Hyper-Distributed Data Storage System
                </h5>
                <p className="mt-9 text-[13px] tracking-widest text-white md:mt-[58px] md:text-[16px]">
                  Our hyper-distributed data storage system aims to minimize
                  environmental impact while providing functionality equal to or
                  greater than existing cloud data storage solutions. Through
                  energy-efficient operations, we also contribute to reducing
                  CO2 emissions. Despite being eco-friendly, our system ensures
                  the highest level of security, keeping your data safe at all
                  times.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DiverFeature />
        <div className="px-5">
          <div className="mt-[100px] md:mt-[140px]">
            <h4 className="mb-6 text-center text-[28px] font-semibold text-white md:mb-8 md:text-[48px]">
              Available Features
            </h4>
            <div className="flex justify-center">
              <p className="max-w-[695px] text-[14px] leading-loose tracking-[0.15em] text-white md:text-[18px]">
                Our platform provides a range of functionalities for an enhanced
                user experience. You can effortlessly preview, upload, and
                download files thanks to our intuitive interface. Organize your
                data efficiently with our folder management feature and easily
                share information with other users via our sharing function.
                Security is paramount; therefore, we implement end-to-end
                encryption and two-factor authentication to ensure comprehensive
                data protection.
              </p>
            </div>
          </div>
          <div className="mt-[100px] md:mt-[140px]">
            <h4 className="mb-6 text-center text-[28px] font-semibold text-white md:mb-8 md:text-[48px]">
              Pricing
            </h4>
            <div className="flex justify-center">
              <p className="max-w-[695px] text-center text-[14px] leading-loose tracking-[0.15em] text-white md:text-[18px]">
                Get a lifetime DIVER Storage plan! <br />
                <br />
                Encrypted file storage and sharing
                <br />
                Files stored forever
                <br />
                Zero knowledge encryption
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[440px] px-5 pt-[60px] md:max-w-[800px] md:pt-[100px] xl:max-w-[1340px]">
          <div className="flex bg-white px-5 max-xl:flex-wrap max-xl:justify-center md:gap-[54px] md:px-20">
            <div className="max-w-[232px] flex-1 py-8 md:py-[60px]">
              <div className="mb-4 md:mb-6">
                <p className="pl-6 text-[18px] font-extrabold leading-tight text-[#231D4F] md:text-[24px]">
                  25,000 DIV
                </p>
                <p className="pr-10 text-right font-['Work_Sans'] text-[14px] text-[#848199] md:text-[17px]">
                  /Lifetime
                </p>
              </div>
              <p className="mb-1 text-[20px] font-bold text-[#231D4F] md:text-[28px]">
                Starter
              </p>
              <p className="text-[13px] text-[#848199] md:text-[15px]">
                100% encrypted communication
              </p>
              <div className="mb-9 mt-6 space-y-2.5 md:mb-[56px] md:mt-8">
                <p className="flex gap-2.5">
                  <span>
                    <img src="/images/check.png" alt="" />
                  </span>
                  <span className="text-[13px] text-[#848199] md:text-[16px]">
                    2 GB Storage
                  </span>
                </p>
                <p className="flex gap-2.5">
                  <span>
                    <img src="/images/check.png" alt="" />
                  </span>
                  <span className="text-[13px] text-[#848199] md:text-[16px]">
                    Unlimited devices
                  </span>
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="flex h-[45px] w-[207px] items-center justify-center rounded-[24px] bg-[#6DB8E5]/[.2] text-[13px] font-semibold text-black md:text-[15px]"
                >
                  Choose plan
                </Link>
              </div>
            </div>
            <div className="max-w-[232px] flex-1 py-8 md:py-[60px]">
              <div className="mb-4 md:mb-6">
                <p className="pl-6 text-[18px] font-extrabold leading-tight text-[#231D4F] md:text-[24px]">
                  2,500,000 DIV
                </p>
                <p className="pr-10 text-right font-['Work_Sans'] text-[14px] text-[#848199] md:text-[17px]">
                  /Lifetime
                </p>
              </div>
              <p className="mb-1 text-[20px] font-bold text-[#231D4F] md:text-[28px]">
                Standard
              </p>
              <p className="text-[13px] text-[#848199] md:text-[15px]">
                100% encrypted communication
              </p>
              <div className="mb-9 mt-6 space-y-2.5 md:mb-[56px] md:mt-8">
                <p className="flex gap-2.5">
                  <span>
                    <img src="/images/check.png" alt="" />
                  </span>
                  <span className="text-[13px] text-[#848199] md:text-[16px]">
                    500 GB Storage
                  </span>
                </p>
                <p className="flex gap-2.5">
                  <span>
                    <img src="/images/check.png" alt="" />
                  </span>
                  <span className="text-[13px] text-[#848199] md:text-[16px]">
                    Unlimited devices
                  </span>
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="flex h-[45px] w-[207px] items-center justify-center rounded-[24px] bg-[#6DB8E5]/[.2] text-[13px] font-semibold text-black md:text-[15px]"
                >
                  Choose plan
                </Link>
              </div>
            </div>
            <div className="relative max-w-[292px] flex-1 bg-[#2A5293] px-5 drop-shadow-[0_42px_34px_rgba(82,67,194,0.3)] max-md:mt-5 md:top-[-32px] md:px-[30px]">
              <div className="py-8 md:pb-[60px] md:pt-[40px] ">
                <div className="mb-3 flex justify-end">
                  <div className="flex h-7 w-[127px] items-center justify-center rounded-[13px] bg-[#9541FF] text-[10px] font-bold text-white">
                    MOST POPULAR
                  </div>
                </div>
                <div className="mb-4 md:mb-6">
                  <p className="text-[24px] font-extrabold leading-tight text-white max-md:pl-2.5 md:text-[34px]">
                    8,000,000 DIV
                  </p>
                  <p className="pr-10 text-right font-['Work_Sans'] text-[14px] text-white md:text-[17px]">
                    /Lifetime
                  </p>
                </div>
                <p className="mb-1 text-[20px] font-bold text-white md:text-[28px]">
                  Pro
                </p>
                <p className="text-[13px] text-white md:text-[15px]">
                  100% encrypted communication
                </p>
                <div className="mb-9 mt-6 space-y-2.5 md:mb-[56px] md:mt-8">
                  <p className="flex gap-2.5">
                    <span>
                      <img src="/images/check-w.png" alt="" />
                    </span>
                    <span className="text-[13px] text-white md:text-[16px]">
                      2 TB Storage
                    </span>
                  </p>
                  <p className="flex gap-2.5">
                    <span>
                      <img src="/images/check-w.png" alt="" />
                    </span>
                    <span className="text-[13px] text-white md:text-[16px]">
                      Unlimited devices
                    </span>
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link
                    href="#"
                    className="flex h-[45px] w-[232px] items-center justify-center rounded-[24px] bg-[#0047FF] text-[13px] font-semibold text-white md:text-[15px]"
                  >
                    Choose plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-[232px] flex-1 py-[60px]">
              <div className="mb-4 md:mb-6">
                <p className="pl-6 text-[18px] font-extrabold leading-tight text-[#231D4F] md:text-[24px]">
                  14,000,000 DIV
                </p>
                <p className="pr-10 text-right font-['Work_Sans'] text-[14px] text-[#848199] md:text-[17px]">
                  /Lifetime
                </p>
              </div>
              <p className="mb-1 text-[20px] font-bold text-[#231D4F] md:text-[28px]">
                Business
              </p>
              <p className="text-[13px] text-[#848199] md:text-[15px]">
                100% encrypted communication
              </p>
              <div className="mb-9 mt-6 space-y-2.5 md:mb-[56px] md:mt-8">
                <p className="flex gap-2.5">
                  <span>
                    <img src="/images/check.png" alt="" />
                  </span>
                  <span className="text-[13px] text-[#848199] md:text-[16px]">
                    5 TB Storage
                  </span>
                </p>
                <p className="flex gap-2.5">
                  <span>
                    <img src="/images/check.png" alt="" />
                  </span>
                  <span className="text-[13px] text-[#848199] md:text-[16px]">
                    Unlimited devices
                  </span>
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="flex h-[45px] w-[207px] items-center justify-center rounded-[24px] bg-[#6DB8E5]/[.2] text-[13px] font-semibold text-black md:text-[15px]"
                >
                  Choose plan
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="mt-[100px] md:mt-[140px]">
            <h4 className="mb-6 text-center text-[28px] font-semibold text-white md:mb-8 md:text-[48px]">
              Pricing and Value of Our System
            </h4>
            <div className="flex justify-center">
              <p className="max-w-[695px] text-[14px] leading-loose tracking-[0.15em] text-white md:text-[18px]">
                Each plan of DIVER Storage is offered at an affordable price,
                with the expectation of increased value through future
                enhancements. The current features are not the final version, as
                new functionalities will be added in line with updates. As more
                features are integrated, the prices of the plans will gradually
                rise. Starting at the current price allows you to secure an
                eco-friendly and cost-effective data storage solution.
              </p>
            </div>
          </div>
          <div className="mt-[100px] md:mt-[140px]">
            <h4 className="mb-6 text-center text-[28px] font-semibold text-white md:mb-8 md:text-[48px]">
              To Those Looking Toward the Future,
            </h4>
            <div className="flex justify-center">
              <p className="max-w-[695px] text-[14px] leading-loose tracking-[0.15em] text-white md:text-[18px]">
                Join DIVER Storage and help build a sustainable future together.
                Our eco-friendly data management system protects your data
                securely while minimizing environmental impact. Choosing DIVER
                Storage now is a significant step towards a healthier future for
                our planet. As pioneers of an eco-friendly digital world, let's
                pave the way to the future together.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-[823px] items-center justify-center bg-white px-6 py-[60px] md:mt-[60px] md:py-[118px]">
          <div className="w-full max-w-[360px] md:max-w-[502px]">
            <figure className="flex items-center justify-center">
              <img
                className="max-md:max-w-[280px]"
                src="/images/diver-download.png"
                alt=""
              />
            </figure>
            <div className="mt-5 flex justify-center md:mt-7">
              <Link href="/" className="">
                <img
                  className="max-md:max-w-[180px]"
                  src="/images/chrome-web-store.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-7 flex justify-center md:mt-10">
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
