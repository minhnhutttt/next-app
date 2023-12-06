"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SliderItem from "./sliderItem";
export default function Slider2() {
  const sliderContainerRef = useRef(null);
  const sliderContainer1Ref = useRef(null);
  const sliderContainer2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timelineOptions = {
      defaults: {
        ease: "power4.inOut",
        duration: 1,
      },
      paused: true,
    };

    function getTimelineCallback(mainTl, tl) {
      return () => {
        if (mainTl.scrollTrigger.direction === 1) {
          tl.timeScale(1).play();
        } else {
          tl.timeScale(2).reverse();
        }
      };
    }

    const sliderTl = {
      slideConflict: gsap.timeline(timelineOptions).to(sliderContainer1Ref.current, {
        autoAlpha: 0
      }),
      slideConflictTitle: gsap.timeline(timelineOptions).to(sliderContainer1Ref.current.querySelector('.slider__text-item-head'), {
        x: "-100%"
      }),
      slideConflictBody: gsap.timeline(timelineOptions).to(sliderContainer1Ref.current.querySelector('.slider__text-item-info'), {
        x: "100%"
      }),
      slideConflictImage: gsap.timeline(timelineOptions).to(sliderContainer1Ref.current.querySelector('.slider__image'), {
        y: "-100%"
      }),
      slideSolution: gsap.timeline(timelineOptions).to(sliderContainer2Ref.current, {
        autoAlpha: 0
      }),
      slideSolutionTitle: gsap.timeline(timelineOptions).to(sliderContainer2Ref.current.querySelector('.slider__text-item-head'), {
        x: "-100%"
      }),
      slideSolutionBody: gsap.timeline(timelineOptions).to(sliderContainer2Ref.current.querySelector('.slider__text-item-info'), {
        x: "100%"
      }),
      slideSolutionImage: gsap.timeline(timelineOptions).to(sliderContainer2Ref.current.querySelector('.slider__image'), {
        y: "-100%"
      }),
      slideTitleAnimation: gsap.timeline(timelineOptions),
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sliderContainerRef.current,
        start: "bottom bottom",
        end: "+=350%",
        pin: true,
        scrub: true,
      },
    });

    timeline
      .to(null, { duration: 3 })
      .add(getTimelineCallback(timeline, sliderTl.slideConflict), 1)
      .add(getTimelineCallback(timeline, sliderTl.slideConflictTitle), 1)
      .add(getTimelineCallback(timeline, sliderTl.slideConflictBody), 1)
      .add(getTimelineCallback(timeline, sliderTl.slideConflictImage), 1)
      .add(getTimelineCallback(timeline, sliderTl.slideSolutionTitle), 2)
      .add(getTimelineCallback(timeline, sliderTl.slideSolutionBody), 2)
      .add(getTimelineCallback(timeline, sliderTl.slideSolutionImage), 2)
      .add(getTimelineCallback(timeline, sliderTl.slideSolution), 2);

    window.sliderTl = timeline;

    console.log(sliderContainer1Ref.current)
    return () => {
      window.sliderTl.kill();
    };
  }, []);
  return (
    <div className="relative mt-[90px] overflow-hidden md:mt-[180px] ">
    <div ref={sliderContainerRef} className="h-[100lvh]">
      <section
        ref={sliderContainer1Ref}
        className="absolute inset-0 z-[10] bg-black"
      >
        <SliderItem title="CONFLICT" body={<>Negative Environmental Impact of <br />Current Computing Models</>} image="/images/slider-01.png" link="/conflict" />
      </section>
      <section
        ref={sliderContainer2Ref}
        className="absolute inset-0 z-[9] bg-black">
        <SliderItem title="SOLUTION" body={<>What is "Mist" Computing & IPDC?</>} image="/images/slider-02.png" link="/solution" />
      </section>
      <section className="absolute inset-0 z-[8] ">
        <SliderItem title="ACTION" body={<>Actions Individuals Should Take <br />to Amplify Their Impact</>} image="/images/slider-03.png" link="/action" />
      </section>
    </div>
    </div>
  );
}
