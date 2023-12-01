import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SliderItem({title, body, image, link, containerRef }) {
  const elRef = useRef(null);
  const elContentRef = useRef(null);
  const imgRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    var lastX = 0;
    var lastY = 0;
    var targetX = 0;
    var targetY = 0;
    var animationRunning = false;
    var animationStopped = false;

    var whalfWidth = window.innerWidth / 2;
    var whalfHeight = window.innerHeight / 2;
    var zDistance = "8.519vw";
    var mouseWatched = true;
    

    elRef.current.addEventListener("mousemove", onMouseMove);
    onResize();
    window.addEventListener('resize', onResize);

    function onMouseMove(event) {
      const boundingRect = elRef.current.getBoundingClientRect();
      const mouseX = event.clientX - boundingRect.left;
      const mouseY = event.clientY - boundingRect.top;
      targetX = mouseX;
      targetY = mouseY;
      if (!animationRunning) {
        animationRunning = true;
        runAnimation();
      }
    }
    function runAnimation() {
      if (animationStopped) {
        animationRunning = false;
        return;
      }
      const maxX = 10;
      const maxY = 10;

      const newPos = lerp(
        {
          x: lastX,
          y: lastY,
        },
        {
          x: targetX,
          y: targetY,
        }
      );

      const { xCoeff, yCoeff } = getMouseCoefficients({
        pageX: newPos.x,
        pageY: newPos.y,
      });

      lastX = newPos.x;
      lastY = newPos.y;

      positionImage({ xCoeff, yCoeff });
      if (elContentRef.current) {
        elContentRef.current.style.setProperty(
          "transform",
          `
                    translateZ(${zDistance})
                    rotateX(${maxY * yCoeff}deg)
                    rotateY(${maxX * xCoeff}deg)
                `
        );
      }

      if (reachedFinalPoint) {
        animationRunning = false;
      } else {
        requestAnimationFrame(runAnimation.bind(this));
      }
    }

    function positionImage({ xCoeff, yCoeff }) {
      const maxImgOffset = 1;
      const currentImage = imgRef.current;

      currentImage.style.setProperty(
        "transform",
        `
                  translateX(${maxImgOffset * -xCoeff}em)
                  translateY(${maxImgOffset * yCoeff}em)
                `
      );
    }

    function lerp({ x, y }, { x: targetX, y: targetY }) {
      const fraction = 0.1;

      x += (targetX - x) * fraction;
      y += (targetY - y) * fraction;

      return { x, y };
    }

    function getMouseCoefficients({ pageX, pageY } = {}) {
      const halfWidth = whalfWidth;
      const halfHeight = whalfHeight;
      const xCoeff = ((pageX || targetX) - halfWidth) / halfWidth;
      const yCoeff = (halfHeight - (pageY || targetY)) / halfHeight;

      return { xCoeff, yCoeff };
    }

    function reachedFinalPoint() {
      const lastX = ~~lastX;
      const lastY = ~~lastY;
      const targetX = targetX;
      const targetY = targetY;

      return (
        (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) &&
        (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY)
      );
    }

    function onResize() {
        const htmlStyles = getComputedStyle(document.documentElement);
        const mobileBreakpoint = htmlStyles.getPropertyValue("--mobile-bkp");
        const isMobile = matchMedia(
          `only screen and (max-width: ${mobileBreakpoint})`
        ).matches;
        whalfWidth = window.innerWidth / 2;
        whalfHeight = window.innerHeight / 2;
        zDistance = htmlStyles.getPropertyValue("--z-distance");
    
        if (!isMobile && !mouseWatched) {
          mouseWatched = true;
          animationStopped = false;
          elRef.current.addEventListener("mousemove", onMouseMove);
    
        } else if (isMobile && mouseWatched) {
          mouseWatched = false;
          animationStopped = true;
          positionImage({ xCoeff: -1, yCoeff: 1 });
          if (elRef.current) {
            elRef.current.removeEventListener("mousemove", onMouseMove);
          }
          elContentRef.current.style.setProperty("transform", `none`);
        }
      }

      return () => {
        window.removeEventListener('resize', onResize);
      };
  }, []);

  return (
    <>
      <div ref={elRef} className="absolute inset-0 flex items-center justify-center">
        <img
          className="absolute inset-0 z-0 object-cover w-full h-full blur-2xl"
          src={image}
        />
        <div
            ref={elContentRef}
            className="relative z-10 mx-auto md:h-[32.5vw] h-screen md:max-h-[90vh] w-full  md:w-[65vw]"
        >
            <div
            className="slider__text-item slider__text-item--active"
            data-id="1"
            >
            <div ref={boxRef} className="slider__text-item-head">
                <h3>{title}</h3>
            </div>
            <div className="slider__text-item-btn">
                <a href={link}>
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                    cx="8.5"
                    cy="8.5"
                    r="7.5"
                    stroke="#EBEBEB"
                    strokeWidth="2"
                    />
                </svg>
                <span>VIEW MORE</span>
                </a>
            </div>
            <div className="slider__text-item-info">
                <p>
                {body}
                </p>
            </div>
            </div>
            <img ref={imgRef} className="w-full max-md:h-screen max-md:object-cover" src={image} />
        </div>
      </div>
    </>
  );
}

SliderItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };