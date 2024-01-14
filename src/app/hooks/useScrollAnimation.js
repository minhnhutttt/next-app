"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (animationType, delay = 0) => {
  const elements = useRef([]);

  useEffect(() => {
    const animateElements = () => {
      elements.current.forEach((el) => {
        gsap.set(el, { opacity: 0 });
        let animation = {};

        switch (animationType) {
          case "fadeUp":
            animation = { y: 50, opacity: 0 };
            break;
          case "slideLeft":
            animation = { x: -50, opacity: 0 };
            break;
          case "slideRight":
            animation = { x: 50, opacity: 0 };
            break;
          case "zoom":
            animation = { opacity: 0, scaleX: 0.9, scaleY: 0.9 };
            break;
          default:
            animation = { autoAlpha: 0 };
            break;
        }

        gsap.fromTo(el, animation, {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.5,
          scaleX: 1,
          scaleY: 1,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=60",
            toggleActions: "play none none reverse",
          },
        });
      });
    };

    animateElements();

    return () => {
      elements.current.forEach((el) => {
        ScrollTrigger.getById(elements.current.id)?.kill();
      });
    };
  }, [animationType]);

  const addToRefs = (el) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  return addToRefs;
};

export default useScrollAnimation;
