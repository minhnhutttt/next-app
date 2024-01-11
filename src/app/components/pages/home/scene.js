"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import SectionTitle from "./components/sectionTitle";

const scenes = [
    {
        id: 1,
        imageSrc: '/images/scene-01.png',
        text: '外出先のカフェで'
    },
    {
        id: 2,
        imageSrc: '/images/scene-02.png',
        text: '旅行やキャンプで'
    },
    {
        id: 3,
        imageSrc: '/images/scene-03.png',
        text: '動画の視聴などで'
    },
    {
        id: 4,
        imageSrc: '/images/scene-04.png',
        text: 'ゲームや端末ようで'
    },
];

export default function Scene() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="pt-10 md:pt-20 overflow-hidden">
            <div className="px-5">
                <SectionTitle>ご利用シーン</SectionTitle>
                <p ref={animateRefs} className="text-center md:text-[22px] font-bold text-[16px] mt-10 md:mt-20">Wi-Fi＋ストレージは、使いたい時どこでも追加できいます。<br />ご利用シーンに合わせてお楽しみください。</p>
            </div>

                <div className="pl-[5.2%] mt-8 md:mt-16 mx-[-10px]">
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
                    768: {
                    
                    },
                },
                }}
            >
                    {scenes.map(({ id, imageSrc, text }) => (
                        <SplideSlide key={id} className="pb-2 px-[10px]">
                                <div ref={animateRefs} key={id} className="rounded-[20px] overflow-hidden bg-white [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
                                <figure>
                                    <img className="max-md:w-[260px]" src={imageSrc} alt="" />
                                </figure>
                                <div className="md:text-[22px] text-[14px] font-bold text-center font-montserrat py-3 md:py-5">{text}</div>
                            </div>
                        </SplideSlide>
                    ))}
            </Splide>
            </div>
        </div>
    )
  }
  