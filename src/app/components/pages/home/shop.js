import Link from "next/link";
import PropTypes from "prop-types";
import Title from "../../common/title";

function ShopItem({logo, title, content, link}) {
    return(
        
        <div className="border border-[#D9D9D9] py-5 md:py-[33px] px-4 md:px-[29px] space-y-[9px]">
            <div>
                <img src={logo} alt="" />
            </div>
            <p className="md:text-[24px] text-[18px] leading-loose">{title}</p>
            <p className="font-['Manrope'] md:text-[16px] text-[13px] md:min-h-[175px] leading-[1.75]">
                {content}
            </p>
            <div className="flex items-center justify-center">
                <Link href={link} className="md:max-w-[300px] max-w-[240px] w-full tracking-[0.6rem] h-[48px] md:h-[60px] md:text-[24px] text-[18px] font-medium text-white flex items-center justify-center relative bg-black md:rounded-[50px] rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <span>店舗一覧</span>
                    <svg className="absolute right-2" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.35116 14.419L8.42689 9.34325C8.60856 9.16195 8.75269 8.9466 8.85104 8.70952C8.94938 8.47244 9 8.2183 9 7.96164C9 7.70497 8.94938 7.45083 8.85104 7.21375C8.75269 6.97667 8.60856 6.76132 8.42689 6.58002L3.35116 1.50429C2.11652 0.269652 1.21067e-06 1.15154 1.05819e-06 2.8957L1.70722e-07 13.0472C1.82423e-08 14.7913 2.11652 15.6536 3.35116 14.419Z" fill="white"/>
                    </svg>
                    </Link>
            </div>
        </div>
    )
}

ShopItem.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default function Shop() {
  return (
    <div className="flex bg-[#fff]/[0.1] py-10 md:pt-[74px] md:pb-[102px]" id="shop">
        <div className="w-full md:max-w-[1340px] max-w-[440px] px-5 mx-auto">
            <Title head="SHOP">設置店舗一覧</Title>
            <div className="mt-10 space-y-5">
                <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 lg:gap-7">
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                    <ShopItem title="丸亀製麺" logo="/images/logo-maru.png" link="/shop"  content={<>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</>} />
                </div>
            </div>
        </div>
    </div>
  );
}