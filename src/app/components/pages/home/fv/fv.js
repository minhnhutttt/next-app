"use client"
import useScrollAnimation from '@/app/hooks/useScrollAnimation';
import FVItem from "./fvItem";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FV() {
    const animateRefs = useScrollAnimation('fadeUp');
    const animate3Refs = useScrollAnimation('fadeUp', 0.3);
    const animate5Refs = useScrollAnimation('fadeUp', 0.5);
    const animate7Refs = useScrollAnimation('fadeUp', 0.7);
    const animate9Refs = useScrollAnimation('fadeUp', 0.9);
    const animate11Refs = useScrollAnimation('fadeUp', 1.1);

    const fvRef = useRef();
    useEffect(() => {
        gsap.fromTo(fvRef.current, { autoAlpha: 0, scaleX: 0.9,
            scaleY: 0.9, }, {
            autoAlpha: 1, left: 0, scaleX: 1,
            scaleY: 1,
            duration: 0.5, scrollTrigger: {
                trigger: fvRef.current,
                start: "top bottom-=30%",
                toggleActions: "play none none reverse"
            }
        })
    }, [])
    return (
        <div className="pt-3 md:pt-[25px] px-2 md:px-5">
            <div ref={fvRef} className="w-full max-w-[1380px] mx-auto md:min-h-[670px] flex items-center justify-center flex-col overflow-visible bg-white py-4 md:py-[23px] px-2 md:px-[18px] md:rounded-[20px] rounded-[10px]">
                <div className="w-full h-full flex-1 transition-transform duration-300 [transform-style:_preserve-3d]">
                    <div className="absolute w-full h-full justify-center flex-col flex items-center overflow-hidden before:absolute before:content-[''] before:block before:bg-[#98FE01] before:w-[25%] before:h-[300%] before:animate-[rotation\_481_5000ms_infinite_linear] [backface-visibility:_hidden]">
                        <div className="absolute flex justify-center md:w-[calc(100%-10px)] w-[calc(100%-8px)] md:h-[calc(100%-10px)] h-[calc(100%-8px)] gap-10 text-black bg-white"></div>
                    </div>
                    <div className="relative md:w-[calc(100%-10px)] w-[calc(100%-8px)] md:h-[calc(100%-10px)] h-[calc(100%-8px)] md:max-w-[1166px] max-w-[400px] px-3 md:px-5 mx-auto text-black grid col-span-3 pb-[6%] pt-[5%]">
                            <figure ref={animateRefs} className="col-[1_/_2] row-[1_/_3] mr-5 md:mr-10 max-md:flex max-md:justify-end max-md:items-center">
                                <img className="max-md:w-[80px]" src="/images/peep-standing.png" alt="" />
                            </figure>
                            <div className="pr-5 max-w-[915px] flex-1 md:col-[2_/_4] md:row-[1] col-[2] row-[1]">
                                <h1 ref={animate3Refs} className="font-dela leading-[1.3]"><span className="text-[28px] md:text-[66px]">WEB3.0</span><span className="text-[20px] md:text-[51px]">でも</span><br className="md:hidden" /><span className="text-[32px] md:text-[80px]">自分らしく</span></h1>
                                <p ref={animate5Refs} className="text-[16px] md:text-[29px] font-dela">次世代ドメイン（＝Web3.0アカウントの名前）を簡単取得</p>
                            </div>
                            <div className="space-y-2.5 md:col-[2_/_4] md:row-[2] col-[1_/_3] row-[3] max-w-[915px] mt-4">
                                    <div ref={animate7Refs} className="flex gap-x-0.5 gap-y-1.5 flex-wrap">
                                        <FVItem size="lg">.red</FVItem>
                                        <FVItem size="lg">.orange</FVItem>
                                        <FVItem size="lg">.yellow</FVItem>
                                        <FVItem size="lg">.green</FVItem>
                                        <FVItem size="lg">.blue</FVItem>
                                        <FVItem size="lg">.indigo</FVItem>
                                        <FVItem size="lg">.purple</FVItem>
                                        <FVItem size="lg">.gold</FVItem>
                                        <FVItem size="lg">.black</FVItem>
                                    </div>
                                    <div ref={animate9Refs} className="flex gap-x-0.5 gap-y-1.5 flex-wrap">
                                        <FVItem size="md">.web3</FVItem>
                                        <FVItem size="md">.star</FVItem>
                                        <FVItem size="md">.hero</FVItem>
                                        <FVItem size="md">.king</FVItem>
                                        <FVItem size="md">.queen</FVItem>
                                        <FVItem size="md">.samurai</FVItem>
                                        <FVItem size="md">.sengoku</FVItem>
                                        <FVItem size="md">.ninja</FVItem>
                                        <FVItem size="md">.bushi</FVItem>
                                        <FVItem size="md">.player</FVItem>
                                        <FVItem size="md">.dreamer</FVItem>
                                        <FVItem size="md">.kitty</FVItem>
                                        <FVItem size="md">.fairy</FVItem>
                                    </div>
                                    <div ref={animate11Refs} className="flex gap-x-0.5 gap-y-1.5 flex-wrap">
                                        <FVItem size="sm">.a</FVItem>
                                        <FVItem size="sm">.b</FVItem>
                                        <FVItem size="sm">.c</FVItem>
                                        <FVItem size="sm">.d</FVItem>
                                        <FVItem size="sm">.e</FVItem>
                                        <FVItem size="sm">.f</FVItem>
                                        <FVItem size="sm">.g</FVItem>
                                        <FVItem size="sm">.h</FVItem>
                                        <FVItem size="sm">.i</FVItem>
                                        <FVItem size="sm">.j</FVItem>
                                        <FVItem size="sm">.k</FVItem>
                                        <FVItem size="sm">.l</FVItem>
                                        <FVItem size="sm">.m</FVItem>
                                        <FVItem size="sm">.n</FVItem>
                                        <FVItem size="sm">.o</FVItem>
                                        <FVItem size="sm">.p</FVItem>
                                        <FVItem size="sm">.q</FVItem>
                                        <FVItem size="sm">.r</FVItem>
                                        <FVItem size="sm">.s</FVItem>
                                        <FVItem size="sm">.t</FVItem>
                                        <FVItem size="sm">.u</FVItem>
                                        <FVItem size="sm">.v</FVItem>
                                        <FVItem size="sm">.w</FVItem>
                                        <FVItem size="sm">.x</FVItem>
                                        <FVItem size="sm">.y</FVItem>
                                        <FVItem size="sm">.z</FVItem>
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
}