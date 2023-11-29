"use client";
import React, { Component } from "react";

function lerp({ x, y }, { x: targetX, y: targetY }) {
  const fraction = 0.1;

  x += (targetX - x) * fraction;
  y += (targetY - y) * fraction;

  return { x, y };
}
class Slider extends Component {
  constructor(props) {
    super(props);
    this.IMG_CLASS = "slider__images-item";
    this.TEXT_CLASS = "slider__text-item";
    this.ACTIVE_IMG_CLASS = `${this.IMG_CLASS}--active`;
    this.ACTIVE_TEXT_CLASS = `${this.TEXT_CLASS}--active`;
    this.el = React.createRef();
    this.contentEl = React.createRef();
    this.images = [];
    this.activeImg = [];
    this.activeText = [];
    this.length = 0;
    this.timer = 0;
    this.animationRunning = false;
    this.mouseWatched = false;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.runAnimation = this.runAnimation.bind(this);
  }

  componentDidMount() {
    this.images = this.el.current.getElementsByTagName("img");
    this.activeImg = this.el.current.getElementsByClassName(
      this.ACTIVE_IMG_CLASS
    );
    this.activeText = this.el.current.getElementsByClassName(
      this.ACTIVE_TEXT_CLASS
    );

    document
      .getElementById("left")
      .addEventListener("click", this.prev.bind(this));
    document
      .getElementById("right")
      .addEventListener("click", this.next.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));

    this.length = this.images.length;
    this.lastX = this.lastY = this.targetX = this.targetY = 0;

    this.autoSlide();

    this.el.current.addEventListener("mousemove", this.stopAutoSlide);
    this.el.current.addEventListener("touchstart", this.stopAutoSlide);
    this.onResize();
  }

  onResize() {
    const htmlStyles = getComputedStyle(document.documentElement);
    const mobileBreakpoint = htmlStyles.getPropertyValue("--mobile-bkp");
    const isMobile = matchMedia(
      `only screen and (max-width: ${mobileBreakpoint})`
    ).matches;
    this.halfWidth = window.innerWidth / 2;
    this.halfHeight = window.innerHeight / 2;
    this.zDistance = htmlStyles.getPropertyValue("--z-distance");

    if (!isMobile && !this.mouseWatched) {
      this.mouseWatched = true;
      this.animationStopped = false;
      this.el.current.addEventListener("mousemove", this.onMouseMove);

      if (this.activeImg && this.activeImg[0]) {
        const activeImgId = parseInt(this.activeImg[0].dataset.id);
        const prevImageSrc = this.images[activeImgId - 1]?.src || "";
        this.el.current.style.setProperty("--img-prev", `url(${prevImageSrc})`);
        this.contentEl.current.style.setProperty(
          "transform",
          `translateZ(${this.zDistance})`
        );
      }
    } else if (isMobile && this.mouseWatched) {
      this.mouseWatched = false;
      this.animationStopped = true;
      this.positionImage({ xCoeff: -1, yCoeff: 1 });
      if (this.el.current) {
        this.el.current.removeEventListener("mousemove", this.onMouseMove);
      }
      this.contentEl.current.style.setProperty("transform", `none`);
    }
  }

  onMouseMove(event) {
    const boundingRect = this.el.current.getBoundingClientRect();
    const mouseX = event.clientX - boundingRect.left;
    const mouseY = event.clientY - boundingRect.top;
    this.targetX = mouseX;
    this.targetY = mouseY;
    if (!this.animationRunning) {
      this.animationRunning = true;
      this.runAnimation();
    }
  }

  runAnimation() {
    if (this.animationStopped) {
      this.animationRunning = false;
      return;
    }
    const maxX = 10;
    const maxY = 10;

    const newPos = lerp(
      {
        x: this.lastX,
        y: this.lastY,
      },
      {
        x: this.targetX,
        y: this.targetY,
      }
    );

    const { xCoeff, yCoeff } = this.getMouseCoefficients({
      pageX: newPos.x,
      pageY: newPos.y,
    });

    this.lastX = newPos.x;
    this.lastY = newPos.y;

    this.positionImage({ xCoeff, yCoeff });
    if (this.contentEl.current) {
      this.contentEl.current.style.setProperty(
        "transform",
        `
        translateZ(${this.zDistance})
        rotateX(${maxY * yCoeff}deg)
        rotateY(${maxX * xCoeff}deg)
      `
      );
    }

    if (this.reachedFinalPoint) {
      this.animationRunning = false;
    } else {
      requestAnimationFrame(this.runAnimation.bind(this));
    }
  }
  getMouseCoefficients({ pageX, pageY } = {}) {
    const halfWidth = this.halfWidth;
    const halfHeight = this.halfHeight;
    const xCoeff = ((pageX || this.targetX) - halfWidth) / halfWidth;
    const yCoeff = (halfHeight - (pageY || this.targetY)) / halfHeight;

    return { xCoeff, yCoeff };
  }

  get reachedFinalPoint() {
    const lastX = ~~this.lastX;
    const lastY = ~~this.lastY;
    const targetX = this.targetX;
    const targetY = this.targetY;

    return (
      (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) &&
      (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY)
    );
  }
  positionImage({ xCoeff, yCoeff }) {
    const maxImgOffset = 1;
    const currentImage = this.activeImg[0].children[0];

    currentImage.style.setProperty(
      "transform",
      `
      translateX(${maxImgOffset * -xCoeff}em)
      translateY(${maxImgOffset * yCoeff}em)
    `
    );
  }
  transitionItem(nextId) {
    function onImageTransitionEnd(e) {
      e.stopPropagation();

      nextImg.classList.remove(transitClass);

      self.inTransit = false;

      this.className = imgClass;
      this.removeEventListener("transitionend", onImageTransitionEnd);
    }

    const self = this;
    const el = this.el.current;
    const currentImg = this.activeImg[0];
    const currentId = currentImg.dataset.id;
    const imgClass = this.IMG_CLASS;
    const textClass = this.TEXT_CLASS;
    const activeImgClass = this.ACTIVE_IMG_CLASS;
    const activeTextClass = this.ACTIVE_TEXT_CLASS;
    const subActiveClass = `${imgClass}--subactive`;
    const transitClass = `${imgClass}--transit`;
    const nextImg = el.querySelector(`.${imgClass}[data-id='${nextId}']`);
    const nextText = el.querySelector(`.${textClass}[data-id='${nextId}']`);

    let outClass = "";
    let inClass = "";

    this.animationStopped = true;

    nextText.classList.add(activeTextClass);

    el.style.setProperty("--from-left", nextId);

    currentImg.classList.remove(activeImgClass);
    currentImg.classList.add(subActiveClass);

    if (currentId < nextId) {
      outClass = `${imgClass}--next`;
      inClass = `${imgClass}--prev`;
    } else {
      outClass = `${imgClass}--prev`;
      inClass = `${imgClass}--next`;
    }

    nextImg.classList.add(outClass);

    requestAnimationFrame(() => {
      nextImg.classList.add(transitClass, activeImgClass);
      nextImg.classList.remove(outClass);

      this.animationStopped = false;
      this.positionImage(this.getMouseCoefficients());

      currentImg.classList.add(transitClass, inClass);
      currentImg.addEventListener("transitionend", onImageTransitionEnd);
    });

    if (!this.isMobile) this.switchBackgroundImage(nextId);
  }
  startTransition(nextId) {
    function onTextTransitionEnd(e) {
      if (!e.pseudoElement) {
        e.stopPropagation();

        requestAnimationFrame(() => {
          self.transitionItem(nextId);
        });

        this.removeEventListener("transitionend", onTextTransitionEnd);
      }
    }

    if (this.inTransit) return;

    const activeText = this.activeText[0];
    const backwardsClass = `${this.TEXT_CLASS}--backwards`;
    const self = this;

    this.inTransit = true;

    activeText.classList.add(backwardsClass);
    activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
    activeText.addEventListener("transitionend", onTextTransitionEnd);

    requestAnimationFrame(() => {
      activeText.classList.remove(backwardsClass);
    });
  }
  next() {
    if (this.inTransit) return;

    let nextId = +this.activeImg[0].dataset.id + 1;

    if (nextId > this.length) nextId = 1;

    this.startTransition(nextId);
  }
  prev() {
    if (this.inTransit) return;

    let nextId = +this.activeImg[0].dataset.id - 1;

    if (nextId < 1) nextId = this.length;

    this.startTransition(nextId);
  }
  switchBackgroundImage(nextId) {
    function onBackgroundTransitionEnd(e) {
      if (e.target === this) {
        this.style.setProperty("--img-prev", imageUrl);
        this.classList.remove(bgClass);
        this.removeEventListener("transitionend", onBackgroundTransitionEnd);
      }
    }

    const bgClass = "slider--bg-next";
    const el = this.el.current;
    const imageUrl = `url(${this.images[+nextId - 1].src})`;

    el.style.setProperty("--img-next", imageUrl);
    el.addEventListener("transitionend", onBackgroundTransitionEnd);
    el.classList.add(bgClass);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.el.current.removeEventListener("mousemove", this.stopAutoSlide);
    this.el.current.removeEventListener("touchstart", this.stopAutoSlide);
  }

  autoSlide = () => {
    requestAnimationFrame(() => {
      this.next();
    });

    this.timer = setTimeout(this.autoSlide, 5000);
  };

  stopAutoSlide = () => {
    clearTimeout(this.timer);
    this.el.current.removeEventListener("mousemove", this.stopAutoSlide);
    this.el.current.removeEventListener("touchstart", this.stopAutoSlide);
  };
  render() {
    return (
      <div className="relative mt-[90px] overflow-hidden md:mt-[180px] md:h-screen">
        <div className="slider" id="slider" ref={this.el}>
          <div
            className="slider__content"
            id="slider-content"
            ref={this.contentEl}
          >
            <div className="slider__images">
              <div
                className="slider__images-item slider__images-item--active"
                data-id="1"
              >
                <img src="/images/slider-01.png" />
              </div>
              <div className="slider__images-item" data-id="2">
                <img src="/images/slider-02.png" />
              </div>
              <div className="slider__images-item" data-id="3">
                <img src="/images/slider-03.png" />
              </div>
            </div>
            <div className="slider__text">
              <div
                className="slider__text-item slider__text-item--active"
                data-id="1"
              >
                <div className="slider__text-item-head">
                  <h3>CONFLICT</h3>
                </div>
                <div className="slider__text-item-btn">
                  <a href="#">
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
                        stroke-width="2"
                      />
                    </svg>
                    <span>VIEW MORE</span>
                  </a>
                </div>
                <div className="slider__text-item-info">
                  <p>
                    Negative Environmental Impact of <br />
                    Current Computing Models
                  </p>
                </div>
              </div>
              <div className="slider__text-item" data-id="2">
                <div className="slider__text-item-head">
                  <h3>SOLUTION</h3>
                </div>
                <div className="slider__text-item-btn">
                  <a href="##">
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
                        stroke-width="2"
                      />
                    </svg>
                    <span>VIEW MORE</span>
                  </a>
                </div>
                <div className="slider__text-item-info">
                  <p>What is "Mist" Computing & IPDC?</p>
                </div>
              </div>
              <div className="slider__text-item" data-id="3">
                <div className="slider__text-item-head">
                  <h3>ACTION</h3>
                </div>
                <div className="slider__text-item-btn">
                  <a href="###">
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
                        stroke-width="2"
                      />
                    </svg>
                    <span>VIEW MORE</span>
                  </a>
                </div>
                <div className="slider__text-item-info">
                  <p>
                    Actions Individuals Should Take <br />
                    to Amplify Their Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__nav-arrow slider__nav-arrow--left" id="left">
          to left
        </div>
        <div className="slider__nav-arrow slider__nav-arrow--right" id="right">
          to right
        </div>
      </div>
    );
  }
}

export default Slider;
