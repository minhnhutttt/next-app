"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

const exampleData = [
    {
      id: 1,
      image: "/images/example-01.png",
      title: <>Aというゲームで買った武器を<br />Bというゲームで使えちゃう</>,
      text: (
        <>
            なぜならゲーム内でのみ存在していたアイテムが <br />
            あなたのスマートフォンの中に実在しているからです
        </>
      ),
    },
    {
        id: 2,
        image: "/images/example-02.png",
        title: <>現実世界のようにデジタルデー<br />タを売買できちゃう </>,
        text: (
          <>
            電子書籍を買って、読み終えたらマーケットプレ<br />イスで販売できるんです
          </>
        ),
      },
      {
        id: 3,
        image: "/images/example-03.png",
        title: <>寄付したものやお金が、どのよ<br />うに使われたか分かっちゃう</>,
        text: (
          <>
            インターネット上に記録されるから <br />
            いつでも誰でもチェックできるんです
          </>
        ),
      },
  ];

export default function Example() {
  const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="px-5 pt-[100px] md:pt-[170px]">
            <div className="w-full md:max-w-[1300px] max-w-[440px] mx-auto">
                <SectionTitle>
                    WEB3.0は例えばこんなことができちゃう！
                </SectionTitle>
                <div className="bg-[url('/images/background-example.png')] bg-contain">
                  <div className="flex flex-wrap justify-center md:mt-[56px] mt-8 max-md:px-3 md:pt-[64px] gap-x-[10.2%] w-full max-w-[1180px] mx-auto">
                      {exampleData.map(({ id, image, title, text }) => (
                          <div ref={animateRefs} key={id} className="bg-[url('/images/bg-circle.png')] bg-cover w-full md:w-[44.9%] md:max-w-[530px] max-w-[380px] aspect-square flex justify-center text-white lg:mt-[-64px] mt-6 md:mt-[-44px]">
                              <div className="w-full max-w-[382px] flex flex-col justify-center items-center mt-6">
                                  <h5 className="xl:text-[24px] md:text-[1.7vw] [font-size:_min(4vw,18px)] leading-[1.3] font-bold text-center mb-2">{title}</h5>
                                  <p className="text-center xl:text-[15px] md:text-[1.2vw] [font-size:_min(3vw,12px)] mb-3 md:mb-6">{text}</p>
                                  <figure className="flex justify-center">
                                      <img className="max-xl:w-[80%] max-lg:w-[70%] max-md:w-[50%]" src={image} alt={title} />
                                  </figure>
                              </div>
                          </div>
                      ))}
                  </div>
                </div>
            </div>
        </div>
    )
  }
  