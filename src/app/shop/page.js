import Link from "next/link";
import PropTypes from "prop-types";
import Title from "../components/common/title";
import Header from "../components/header";

function ShopAnchor({children, link}) {
    return(
        <Link href={link} className="w-full md:text-[18px] font-bold text-[14px] max-w-[300px] md:h-[70px] h-[48px] border border-black flex items-center justify-center relative">
            <span>{children}</span>
            <svg className="absolute right-3 max-md:w-2" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 1.5L8 7.75L14.25 1.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </Link>
    )
}

ShopAnchor.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
};

function ShopCard({area, name, date, time, address, addressLink, service, image, button}) {
    return(
        <div className="w-full max-w-[1200px] border border-black p-2.5 flex max-lg:flex-col-reverse gap-3 md:gap-5">
            <div className="py-2.5 px-3 md:px-[30px] flex-1">
                <div className="max-w-[533px]">
                    <div className="md:pb-5 pb-4 border-b border-[#999]">
                        <p className="w-[120px] h-8 bg-[#D9D9D9] rounded-[5px] flex items-center justify-center md:text-[15px] text-[13px] font-bold mb-1">{area}</p>
                        <h5 className="md:text-[25px] font-bold text-[18px] mb-2">{name}</h5>
                        <p className="md:text-[18px] text-[14px] flex gap-1 mb-2"><span>期間 :  </span><span>{date}</span></p>
                        <p className="md:text-[18px] text-[14px] flex gap-1 mb-2"><span>営業時間 :  </span><span>{time}</span></p>
                        <p className="md:text-[18px] text-[14px] flex gap-1"><span>住所 :  </span><a href={addressLink} className="flex items-center text-[#0026EE] font-bold">
                            <img src="/images/icon-location.png" alt="" />
                            {address}</a></p>
                    </div>
                    <div className="md:pt-5 pt-4">
                        <p className="h-[26px] md:text-[16px] text-[14px] font-bold pl-4 border-l-[6px] border-black">サービス</p>
                        <p className="md:text-[18px] text-[14px] mt-2.5">
                            {service}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={image} alt="" />
                <Link href="#" className="absolute flex items-center justify-between right-4 bottom-3 bg-black w-full md:max-w-[202px] max-w-[180px] h-[35px] text-white md:text-[16px] text-[14px] font-medium pl-5 pr-1.5 rounded-[5px]">
                    <span>{button}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                        <path d="M1 9L5 5L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    area: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    addressLink: PropTypes.string.isRequired,
    service: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
};

export default function Shop() {
  return (
    <main>
      <Header />
      <div className="w-full max-w-[1300px] px-5 mx-auto md:py-20 py-10">
        <Title head="SHOP">設置店舗一覧</Title>
        <div className="flex justify-center md:mt-10 mt-5">
            <Link href="#" className="w-full md:max-w-[448px] max-w-[320px] md:h-[90px] h-[60px] flex items-center justify-center md:rounded-[50px] rounded-[25px] bg-[#F7F71A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
                <p className="flex items-center md:text-[28px] text-[18px] font-medium tracking-widest">
                    <img className="max-md:w-[44px]" src="/images/map-jp.png" alt="" />
                    <span>地図から探す</span>
                </p>
                <svg className="absolute right-5 max-md:w-2.5" width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.21291 21.0962L13.1085 13.2006C13.3911 12.9186 13.6153 12.5836 13.7683 12.2148C13.9213 11.846 14 11.4507 14 11.0514C14 10.6522 13.9213 10.2568 13.7683 9.88806C13.6153 9.51927 13.3911 9.18428 13.1085 8.90225L5.21291 1.00667C3.29237 -0.913873 1.88327e-06 0.457946 1.64607e-06 3.1711L2.65568e-07 18.9623C2.83769e-08 21.6754 3.29236 23.0167 5.21291 21.0962Z" fill="black"/>
                </svg>

            </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10 md:mt-[88px] mb-10">
            <ShopAnchor link="#hokkaido-tohoku">北海道・東北</ShopAnchor>
            <ShopAnchor link="#Hokuriku-china">北陸・中国</ShopAnchor>
            <ShopAnchor link="#kanto">関東</ShopAnchor>
            <ShopAnchor link="#kinki">近畿</ShopAnchor>
            <ShopAnchor link="#central">中国</ShopAnchor>
            <ShopAnchor link="#hokkaido-tohoku">四国</ShopAnchor>
            <ShopAnchor link="#hokkaido-tohoku">九州・沖縄</ShopAnchor>
        </div>
        <div className="md:space-y-[100px] space-y-[50px] w-full lg:max-w-[1200px] max-w-[530px] mx-auto">
            <div id="hokkaido-tohoku">
                <h5 className="text-center md:text-[28px] text-[20px] font-bold">北海道・東北</h5>
                <div className="md:mt-[30px] mt-5 space-y-5 md:space-y-[30px]">
                    <ShopCard area="北海道・東北" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-01.png" button="NFT MAPで見る" />
                    <ShopCard area="北海道・東北" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-02.png" button="NFT MAPで見る" />
                </div>
            </div>
            <div id="hokuriku-china">
                <h5 className="text-center md:text-[28px] text-[20px] font-bold">北陸・中国</h5>
                <div className="md:mt-[30px] mt-5 space-y-5 md:space-y-[30px]">
                    <ShopCard area="北陸・中国" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-03.png" button="NFT MAPで見る" />
                    <ShopCard area="北陸・中国" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-04.png" button="店舗をMAPで見る" />
                </div>
            </div>
            <div id="kanto">
                <h5 className="text-center md:text-[28px] text-[20px] font-bold">関東</h5>
                <div className="md:mt-[30px] mt-5 space-y-5 md:space-y-[30px]">
                    <ShopCard area="関東" name="アイウエオ 東京店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-03.png" button="店舗をMAPで見る" />
                    <ShopCard area="関東" name="かきくけこさしす 千葉店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-04.png" button="店舗をMAPで見る" />
                    <ShopCard area="関東" name="ABC" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-05.png" button="店舗をMAPで見る" />
                    <ShopCard area="関東" name="サンプル屋さん" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-06.png" button="店舗をMAPで見る" />
                </div>
            </div>
            <div id="kinki">
                <h5 className="text-center md:text-[28px] text-[20px] font-bold">近畿</h5>
                <div className="md:mt-[30px] mt-5 space-y-5 md:space-y-[30px]">
                    <ShopCard area="近畿" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-07.png" button="NFT MAPで見る" />
                    <ShopCard area="近畿" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-08.png" button="店舗をMAPで見る" />
                </div>
            </div>
            <div id="central">
                <h5 className="text-center md:text-[28px] text-[20px] font-bold">中部</h5>
                <div className="md:mt-[30px] mt-5 space-y-5 md:space-y-[30px]">
                    <ShopCard area="中部" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-09.png" button="NFT MAPで見る" />
                    <ShopCard area="中部" name="CHAIN PIN 北海道店" date="2023.11.20 - 2023.12.30" time="10:00-20:00" address="千葉県浦安市舞浜１−１" addressLink="#" service={<>4,000円以上お買い上げの方に〇〇プレゼント！brテキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</>} image="/images/shop-card-10.png" button="店舗をMAPで見る" />
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
