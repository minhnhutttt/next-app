import Button from "../components/common/button";
import PageTitle from "../components/common/pageTitle";
import ProductFeature from "../components/pages/product/productFeature";

export default function Product() {
  return (
    <main>
      <PageTitle>PRODUCT</PageTitle>
      <div className="px-5">
        <div className="mx-auto w-full max-w-[440px] md:max-w-[1440px]">
          <div className="pt-12 md:pt-24">
            <p className="mb-5 text-center text-[24px] font-medium text-[#f7aa46] md:mb-8 md:text-[48px] md:tracking-[0.08em]">
              Anyone can use it / Anyone can make it
            </p>
            <h2 className="flex items-center justify-center">
              <img
                className="max-md:w-full max-md:max-w-[400px]"
                src="/diver-dimain.png"
                alt="DIVER Dimain"
              />
            </h2>
            <p className="mx-auto mt-6 w-full max-w-[730px] text-[14px] md:mt-12 md:text-[16px]">
              DIVER domain is a domain on the blockchain dtesigned to resolve
              the names of WEB3 content such as wallet addresses and
              decentralized website addresses using smart contracts.
            </p>
          </div>
          <div className="md:px-5">
            <div className="flex justify-between pt-[58px] max-md:flex-col-reverse">
              <div className="mt-[5.5%] max-w-[644px] flex-1">
                <p className="text-[20px] font-bold tracking-wide md:text-[30px]">
                  Own your own decentralized username.
                </p>
                <p className="mb-8 mt-2 text-[14px] leading-[1.8] md:mb-[60px] md:mt-3.5 md:text-[18px]">
                  No more copying and pasting long addresses. Manage all your
                  distributed services easily and securely with unique user IDs
                  as common usernames, Wallet addresses, etc. across your apps
                  and websites.
                </p>
                <div className="flex max-md:justify-center">
                  <Button link="/">Official DIVER Domain</Button>
                </div>
              </div>
              <div className="px-[3.5%] md:w-1/2">
                <img src="/img-color.png" alt="" />
              </div>
            </div>
            <div className="flex justify-between gap-5 pt-20 max-md:flex-col">
              <div className="shadow-[12px_0px_18px_rgba(119,120,121,0.5)]">
                <img src="/connectiong.png" alt="Connectiong" />
              </div>
              <div className="shadow-[12px_0px_18px_rgba(119,120,121,0.5)]">
                <img src="/connected.png" alt="Connected" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/bg-product.png')] bg-[length:100%_auto] bg-top bg-no-repeat pt-16 md:pt-[8.8%]">
        <div className="mx-auto w-full max-w-[440px] bg-[#f5f5f5]/[0.5] pb-[5.5%] pt-[3%] md:max-w-[1440px]">
          <div className="mx-auto w-full max-w-[1380px] px-5">
            <h3 className="text-center text-[32px] font-bold tracking-widest md:text-[72px]">
              DIVER Domain Features
            </h3>
            <div className="mt-8 grid gap-8 md:mt-[54px] md:grid-cols-3 lg:gap-[64px]">
              <ProductFeature
                imgSrc="/diver-ic-01.png"
                title="Self-custody"
                content="Domains are decentralized through blockchain technology, giving you complete control over your domain."
              />
              <ProductFeature
                imgSrc="/diver-ic-02.png"
                title="Anonymity"
                content="Just as Bitcoin transactions are anonymous, so is the DIVER Domain registered on the blockchain."
              />
              <ProductFeature
                imgSrc="/diver-ic-03.png"
                title="Security"
                content="Highly secure and censorship-resistant because it is managed by a network of distributed nodes rather than controlled by a single entity."
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pb-16 pt-10 md:pb-[10%] md:pt-[3%]">
          <Button link="/">Official DIVER Domain</Button>
        </div>
      </div>
    </main>
  );
}
