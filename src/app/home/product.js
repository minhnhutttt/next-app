export default function Product() {
  return (
    <div className="relative bg-[url('/product-bg.png')] py-[10.5%]" id="product">
      <div className="h-full px-5">
        <div className="mx-auto flex h-full w-full max-w-[1640px] items-center justify-end max-md:flex-col-reverse">
          <div className="max-md:mt-5 md:w-[54%] md:pl-[7.5%]">
            <h3 className="text-[28px] font-bold tracking-[0.04em] text-[#0047ab] md:text-[42px]">
              Product
            </h3>
            <p className="mt-3 text-[16px] leading-relaxed md:mb-10 md:text-[18px]">
              DIVER Connect is a protocol for secure communication and data
              sharing between blockchain wallets and DApps. We focus on security
              and privacy, protecting users' private keys and information.{" "}
              <br />
              It supports DIVER Network and provides seamless connectivity for
              sharing data between wallets and DApps. It provides a convenient
              and secure blockchain experience, including sending and receiving
              digital assets and real-time mutual authentication between wallets
              and DApps.
            </p>
          </div>
          <div className="px-[2.5%] md:w-[46%]">
            <div className="">
              <img src="/product-logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
