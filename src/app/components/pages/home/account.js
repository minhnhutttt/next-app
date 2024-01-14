"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

const accountData = [
    {
      id: 1,
      image: "/images/account-01.jpg",
      title: "次世代アカウントとは？",
      text: (
        <>
          次世代アカウントとは、NFTの送受信や管理ができるユーザーIDです。次世代チャットや次世代スキャンなど、次世代シリーズアプリケーションを利用する際に必要となります。
        </>
      ),
    },
    {
        id: 2,
        image: "/images/account-02.jpg",
        title: "WEB3.0とは？",
        text: (
          <>
            WEB3.0とはユーザー一人一人が尊重され、オンラインでできることや役割が強化されたインターネットの進化版です。<br />個人の自由が重視され、サービス提供者によるアカウントの停止や削除のような事態は防がれます。
          </>
        ),
      },
      {
        id: 3,
        image: "/images/account-03.jpg",
        title: "NFTとは？",
        text: (
          <>
            NFTは、デジタルデータに対して付与される特別な証明書です。従来のデジタルデータは容易にコピーできるため、それらに独自の価値を付加することは困難でした。しかし、NFTの導入により、デジタルアイテムのオリジナリティが保証され、それにより新たな価値が生まれています。
          </>
        ),
      },
  ];

export default function Account() {
  const animateRefs = useScrollAnimation("fadeUp");
  const animatLefteRefs = useScrollAnimation("slideLeft");
    return (
        <div className="px-5 pt-20 md:pt-[200px]">
          <div className="w-full max-w-[1380px] mx-auto ">
            <h5 ref={animatLefteRefs} className="rotate-[-8.5deg]"><img className="max-md:w-full max-md:max-w-[240px]" src="/images/what-is-it.png" alt="What is it?" /></h5>
            <div className="bg-white rounded-[40px] skew-y-[-8.5deg] px-5 md:pl-9 md:pr-10 lg:pl-[92px] lg:pr-[100px] lg:pt-[170px] py-20 md:pt-[120px] lg:pb-[100px] md:pb-[80px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]">
              <div className="skew-y-[8.5deg] space-y-10">
              {accountData.map(({ id, image, title, text }) => (
                <div ref={animateRefs} key={id} className="group flex justify-start max-md:justify-center md:[&:nth-of-type(even)]:justify-end">
                  <div className="flex gap-5 md:gap-[30px] md:group-[&:nth-of-type(even)]:flex-row-reverse max-md:items-center max-md:flex-col">
                    <figure>
                      <img className="rounded-[10px]" src={image} alt={title} />
                    </figure>
                    <div className="flex-1">
                      <div className="flex gap-[5px] py-2 md:py-4">
                        <svg className="max-md:w-8" xmlns="http://www.w3.org/2000/svg" width="46" height="36" viewBox="0 0 46 36" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M35.3553 0.208126L-3.09944e-06 35.5635L9.99783 35.3555L45.3532 0.000130296L35.3553 0.208126Z" fill="#2A5297"/>
                        </svg>
                        <h5 className="lg:text-[32px] md:text-[24px] text-[20px] font-bold">{title}</h5>
                      </div>
                      <div className="md:pl-[57px]">
                        <p className="md:text-[16px] text-[13px] w-full max-w-[340px] leading-[1.4] tracking-wide">{text}</p>
                      </div>
                    </div>
                  </div>
                  </div>
              ))}
              </div>
            </div>
            </div>
        </div>
    )
  }
  