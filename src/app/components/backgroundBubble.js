"use client";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { loadImageShape } from "tsparticles-shape-image";
import dropWater from "../../../public/images/drop-water.svg";
const BackgroundBubble = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadImageShape(engine);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] h-full w-full">
      <Particles
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 44,
              density: {
                enable: false,
                value_area: 600,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "image",
              image: {
                src: dropWater.src,
              },
            },
            shadow: {
              enable: true,
              blur: 5,
              color: "hsl(0, 0%, 92%)",
              offset: {
                x: 2,
                y: 4,
              },
            },
            opacity: {
              value: { min: 0.5, max: 1 },
              random: true,
              anim: {
                enable: false,
                speed: 10,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: { min: 12, max: 24 },
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 6,
              direction: "bottom",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};
export default BackgroundBubble;
