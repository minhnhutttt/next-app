"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import SectionTitle from "./components/sectionTitle";

const scenes = [
  {
    id: 1,
    imageSrc: "/images/scene-01.png",
    text: "スマホ/PCの保存容量を増やしたい",
  },
  {
    id: 2,
    imageSrc: "/images/scene-02.png",
    text: "思い出の動画を残しておきたい",
  },
  {
    id: 3,
    imageSrc: "/images/scene-03.png",
    text: "重要な書類を安全に保存したい",
  },
  {
    id: 4,
    imageSrc: "/images/scene-04.png",
    text: <>セキュリティが高いところで<br />保存したい</>,
  },
  {
    id: 5,
    imageSrc: "/images/scene-01.png",
    text: "スマホ/PCの保存容量を増やしたい",
  },
  {
    id: 6,
    imageSrc: "/images/scene-02.png",
    text: "思い出の動画を残しておきたい",
  },
  {
    id: 7,
    imageSrc: "/images/scene-03.png",
    text: "重要な書類を安全に保存したい",
  },
  {
    id: 8,
    imageSrc: "/images/scene-04.png",
    text: <>セキュリティが高いところで<br />保存したい</>,
  },
];

export default function Scene() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="pt-10 overflow-hidden md:pt-20">
      <div className="px-5">
        <SectionTitle>ご利用用途</SectionTitle>
        <p
          ref={animateRefs}
          className="mt-10 text-center text-[16px] font-bold md:mt-20 md:text-[22px]"
        >
          オンラインストレージは、使いたい時どこでも追加できいます。<br />
          ご利用用途に合わせてお楽しみください。
        </p>
      </div>

      <div className="mx-[-10px] mt-8 pl-[5.2%] md:mt-16">
        <Splide
          aria-label=""
          options={{
            perPage: 3,
            perMove: 1,
            gap: "0",
            type: "loop",
            autoWidth: true,
            arrows: false,
            pagination: false,
            breakpoints: {
              768: {},
            },
          }}
        >
          {scenes.map(({ id, imageSrc, text }) => (
            <SplideSlide key={id} className="px-[10px] pb-2">
              <div
                ref={animateRefs}
                key={id}
                className="overflow-hidden rounded-[20px] bg-white [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] max-w-[378px]"
              >
                <figure>
                  <img className="max-md:w-[260px]" src={imageSrc} alt="" />
                </figure>
                <div className="p-2 flex items-center justify-center h-[75px] leading-tight text-center font-montserrat text-[14px] font-bold  md:text-[22px]">
                  {text}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
