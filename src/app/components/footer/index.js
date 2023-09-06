import Link from "next/link";

export default function Footer() {
    return (
      <div className="bg-[#e1e2e7] pt-10 md:pt-[5%] px-5">
          <div className="w-full max-w-[1640px] mx-auto flex justify-center mb-10 md:mb-16 max-md:flex-col">
            <div className="md:w-1/2 flex justify-center md:justify-end px-[7%]">
                <Link href="/">
                    <img className="max-md:w-[220px]" src="/logo-footer.png" alt="CONNECT TO WORLD" />
                </Link>
            </div>
            <div className="flex md:w-1/2 md:px-5 gap-5 max-md:mt-8 md:gap-[60px]">
                <div>
                    <p className="text-[16px] md:text-[18px] font-medium uppercase">Service</p>
                    <ul className="flex flex-col mt-4 gap-3">
                        <li>
                            <Link className="text-[14px]" href="/">Blockchain development</Link>
                        </li>
                        <li><Link className="text-[14px]" href="/">NFT development</Link></li>
                        <li><Link className="text-[14px]" href="/">Smart contracts development</Link></li>
                        <li><Link className="text-[14px]" href="/">dApp development</Link></li>
                        <li><Link className="text-[14px]" href="/">DEX development</Link></li> 
                        <li><Link className="text-[14px]" href="/">Cryptocurrency development</Link></li> 
                    </ul>
                </div>
                <div>
                    <p className="text-[16px] md:text-[18px] font-medium uppercase flex items-center gap-1"><img src="/ic-contact.png" alt="" />Contact</p>
                    <ul className="flex flex-col mt-4 gap-3">
                        <li>
                            <Link className="text-[14px]" href="/">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
          <p className="text-center text-[13px] py-2">© 2023 CONNECT TO WORLD</p>
      </div>
    )
  }
  