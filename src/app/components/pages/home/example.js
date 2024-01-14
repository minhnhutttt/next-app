"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

const exampleData = [
  {
    id: 1,
    image: "/images/example-01.png",
    title: (
      <>
        Aというゲームで買った武器を
        <br />
        Bというゲームで使えちゃう
      </>
    ),
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
    title: (
      <>
        現実世界のようにデジタルデー
        <br />
        タを売買できちゃう{" "}
      </>
    ),
    text: (
      <>
        電子書籍を買って、読み終えたらマーケットプレ
        <br />
        イスで販売できるんです
      </>
    ),
  },
  {
    id: 3,
    image: "/images/example-03.png",
    title: (
      <>
        寄付したものやお金が、どのよ
        <br />
        うに使われたか分かっちゃう
      </>
    ),
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
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1300px]">
        <SectionTitle>WEB3.0は例えばこんなことができちゃう！</SectionTitle>
        <div className="bg-[url('/images/background-example.png')] bg-contain">
          <div className="mx-auto mt-8 flex w-full max-w-[1180px] flex-wrap justify-center gap-x-[10.2%] max-md:px-3 md:mt-[56px] md:pt-[64px]">
            {exampleData.map(({ id, image, title, text }) => (
              <div
                ref={animateRefs}
                key={id}
                className="mt-6 flex aspect-square w-full max-w-[380px] justify-center bg-[url('/images/bg-circle.png')] bg-cover text-white md:mt-[-44px] md:w-[44.9%] md:max-w-[530px] lg:mt-[-64px]"
              >
                <div className="mt-6 flex w-full max-w-[382px] flex-col items-center justify-center">
                  <h5 className="mb-2 text-center font-bold leading-[1.3] [font-size:_min(4vw,18px)] md:text-[1.7vw] xl:text-[24px]">
                    {title}
                  </h5>
                  <p className="mb-3 text-center [font-size:_min(3vw,12px)] md:mb-6 md:text-[1.2vw] xl:text-[15px]">
                    {text}
                  </p>
                  <figure className="flex justify-center">
                    <img
                      className="max-xl:w-[80%] max-lg:w-[70%] max-md:w-[50%]"
                      src={image}
                      alt={title}
                    />
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
