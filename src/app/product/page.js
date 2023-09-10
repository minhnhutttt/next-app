import Button from "../components/common/button";
import PageTitle from "../components/common/pageTitle";
import ProductFeature from "../components/pages/product/productFeature";

export default function Product() {
  return (
    <main>
        <PageTitle>PRODUCT</PageTitle>
        <div className="px-5">
            <div className="w-full max-w-[440px] md:max-w-[1440px] mx-auto">
                <div className="pt-12 md:pt-24">
                    <p className="text-[24px] md:text-[48px] text-[#f7aa46] text-center font-medium md:tracking-[0.08em] mb-5 md:mb-8">Anyone can use it / Anyone can make it</p>
                    <h2 className="flex items-center justify-center">
                        <img className="max-md:max-w-[400px] max-md:w-full" src="/diver-dimain.png" alt="DIVER Dimain" />
                    </h2>
                    <p className="text-[14px] md:text-[16px] max-w-[730px] w-full mx-auto mt-6 md:mt-12">
                        DIVER domain is a domain on the blockchain dtesigned to resolve the names of WEB3 content such as wallet addresses and decentralized website addresses using smart contracts.
                    </p>
                </div>
                <div className="md:px-5">
                    <div className="flex justify-between max-md:flex-col-reverse pt-[58px]">
                        <div className="flex-1 max-w-[644px] mt-[5.5%]">
                            <p className="text-[20px] md:text-[30px] font-bold tracking-wide">Own your own decentralized username.</p>
                            <p className="text-[14px] md:text-[18px] leading-[1.8] mt-2 md:mt-3.5 mb-8 md:mb-[60px]">
                            No more copying and pasting long addresses. Manage all your distributed services easily and securely with unique user IDs as common usernames, Wallet addresses, etc. across your apps and websites.
                            </p>
                            <div className="flex max-md:justify-center">
                                <Button link="/">Official DIVER Domain</Button>
                            </div>
                        </div>
                        <div className="px-[3.5%] md:w-1/2">
                            <img src="/img-color.png" alt="" />
                        </div>
                    </div>
                    <div className="flex max-md:flex-col justify-between pt-20 gap-5">
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
            <div className="w-full max-w-[440px] md:max-w-[1440px] mx-auto bg-[#f5f5f5]/[0.5] pt-[3%] pb-[5.5%]">
                <div className="w-full max-w-[1380px] px-5 mx-auto">
                    <h3 className="text-[32px] md:text-[72px] font-bold text-center tracking-widest">DIVER Domain Features</h3>
                    <div className="grid md:grid-cols-3 mt-8 md:mt-[54px] gap-8 lg:gap-[64px]">
                        <ProductFeature imgSrc="/diver-ic-01.png" title="Self-custody" content="Domains are decentralized through blockchain technology, giving you complete control over your domain." />
                        <ProductFeature imgSrc="/diver-ic-02.png" title="Anonymity" content="Just as Bitcoin transactions are anonymous, so is the DIVER Domain registered on the blockchain." />
                        <ProductFeature imgSrc="/diver-ic-03.png" title="Security" content="Highly secure and censorship-resistant because it is managed by a network of distributed nodes rather than controlled by a single entity." />
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-center pt-10 pb-16 md:pt-[3%] md:pb-[10%]">
                    <Button link="/">Official DIVER Domain</Button>
                </div>
        </div>
    </main>
  )
}
