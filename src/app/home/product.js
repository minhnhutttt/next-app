export default function Product() {
  return (
    <div className="relative py-[10.5%] bg-[url('/product-bg.png')]">
        <div className="h-full px-5">
          <div className="w-full max-w-[1640px] mx-auto h-full flex max-md:flex-col-reverse justify-end items-center">
            <div className="md:w-[54%] max-md:mt-5 md:pl-[7.5%]">
              <h3 className="text-[28px] md:text-[42px] text-[#0047ab] font-bold tracking-[0.04em]">
              Product
              </h3>
              <p className="text-[16px] md:text-[18px] mt-3 md:mb-10 leading-relaxed">
                DIVER Connect is a protocol for secure communication and data sharing between blockchain wallets and DApps. We focus on security and privacy, protecting users' private keys and information. <br />
                It supports DIVER Network and provides seamless connectivity for sharing data between wallets and DApps. It provides a convenient and secure blockchain experience, including sending and receiving digital assets and real-time mutual authentication between wallets and DApps.
              </p>
            </div>
            <div className="md:w-[46%] px-[2.5%]">
              <div className=""><img src="/product-logo.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
  )
}
