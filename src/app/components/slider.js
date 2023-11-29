"use client"
import React, { Component } from 'react';

function lerp({ x, y }, { x: targetX, y: targetY }) {
    const fraction = 0.1;

    x += (targetX - x) * fraction;
    y += (targetY - y) * fraction;

    return { x, y };
  }
class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.IMG_CLASS = 'slider__images-item';
      this.TEXT_CLASS = 'slider__text-item';
      this.ACTIVE_IMG_CLASS = `${this.IMG_CLASS}--active`;
      this.ACTIVE_TEXT_CLASS =  `${this.TEXT_CLASS}--active`;
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
      this.images = this.el.current.getElementsByTagName('img');
      this.activeImg = this.el.current.getElementsByClassName(this.ACTIVE_IMG_CLASS);
      this.activeText = this.el.current.getElementsByClassName(this.ACTIVE_TEXT_CLASS);

      document.getElementById('left')
        .addEventListener('click', this.prev.bind(this));
      document.getElementById('right')
        .addEventListener('click', this.next.bind(this));
      window.addEventListener('resize', this.onResize.bind(this));

      this.length = this.images.length;
      this.lastX = this.lastY = this.targetX = this.targetY = 0;

      this.autoSlide();

      this.el.current.addEventListener('mousemove', this.stopAutoSlide);
      this.el.current.addEventListener('touchstart', this.stopAutoSlide);
      this.onResize();

    }


  onResize() {
    const htmlStyles = getComputedStyle(document.documentElement);
    const mobileBreakpoint = htmlStyles.getPropertyValue('--mobile-bkp');
    const isMobile = matchMedia(`only screen and (max-width: ${mobileBreakpoint})`).matches;
    this.halfWidth = window.innerWidth / 2;
    this.halfHeight = window.innerHeight / 2;
    this.zDistance = htmlStyles.getPropertyValue('--z-distance');

    if (!isMobile && !this.mouseWatched) {
      this.mouseWatched = true;
      this.animationStopped = false;
      this.el.current.addEventListener('mousemove', this.onMouseMove);

      if (this.activeImg && this.activeImg[0]) {
        const activeImgId = parseInt(this.activeImg[0].dataset.id);
        const prevImageSrc = this.images[activeImgId - 1]?.src || '';
        this.el.current.style.setProperty('--img-prev', `url(${prevImageSrc})`);
        this.contentEl.current.style.setProperty('transform', `translateZ(${this.zDistance})`);
      }
    } else if (isMobile && this.mouseWatched) {
      this.mouseWatched = false;
      this.animationStopped = true;
      this.positionImage({xCoeff: -1, yCoeff: 1});
      this.el.current.removeEventListener('mousemove', this.onMouseMove);
      this.contentEl.current.style.setProperty('transform', `none`);
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

    const newPos = lerp({
      x: this.lastX,
      y: this.lastY
    }, {
      x: this.targetX,
      y: this.targetY
    });

    const { xCoeff, yCoeff } = this.getMouseCoefficients({
      pageX: newPos.x, 
      pageY: newPos.y
    });

    this.lastX = newPos.x;
    this.lastY = newPos.y;

    this.positionImage({ xCoeff, yCoeff });
    if (this.contentEl.current) {
      this.contentEl.current.style.setProperty('transform', `
        translateZ(${this.zDistance})
        rotateX(${maxY * yCoeff}deg)
        rotateY(${maxX * xCoeff}deg)
      `);
    }

    if (this.reachedFinalPoint) {
      this.animationRunning = false;
    } else {
      requestAnimationFrame(this.runAnimation.bind(this));
    }
  }
  getMouseCoefficients ({ pageX, pageY } = {}) {
    const halfWidth = this.halfWidth;
    const halfHeight = this.halfHeight;
    const xCoeff = ((pageX || this.targetX) - halfWidth) / halfWidth;
    const yCoeff = (halfHeight - (pageY || this.targetY)) / halfHeight;
    
    return { xCoeff,  yCoeff }
  }
  
  get reachedFinalPoint () {
    const lastX = ~~this.lastX;
    const lastY = ~~this.lastY;
    const targetX = this.targetX;
    const targetY = this.targetY;
    
    return (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) 
        && (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY);
  }
  positionImage ({ xCoeff, yCoeff }) {
    const maxImgOffset = 1;
    const currentImage = this.activeImg[0].children[0];
    
    currentImage.style.setProperty('transform', `
      translateX(${maxImgOffset * -xCoeff}em)
      translateY(${maxImgOffset * yCoeff}em)
    `);
  }
  transitionItem (nextId) {
    function onImageTransitionEnd (e) {
      e.stopPropagation();
      
      nextImg.classList.remove(transitClass);
      
      self.inTransit = false;
      
      this.className = imgClass;
      this.removeEventListener('transitionend', onImageTransitionEnd);
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
    
    let outClass = '';
    let inClass = '';

    this.animationStopped = true;
    
    nextText.classList.add(activeTextClass);
    
    el.style.setProperty('--from-left', nextId);
    
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
      currentImg.addEventListener('transitionend', onImageTransitionEnd);
    });

    if (!this.isMobile)
      this.switchBackgroundImage(nextId);
  }
  startTransition (nextId) {
    function onTextTransitionEnd(e) {
      if (!e.pseudoElement) {
        e.stopPropagation();

        requestAnimationFrame(() => {
          self.transitionItem(nextId);
        });

        this.removeEventListener('transitionend', onTextTransitionEnd);
      }
    }
    
    if (this.inTransit) return;

    const activeText = this.activeText[0];
    const backwardsClass = `${this.TEXT_CLASS}--backwards`;
    const self = this;
    
    this.inTransit = true;
    
    activeText.classList.add(backwardsClass);
    activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
    activeText.addEventListener('transitionend', onTextTransitionEnd);
    
    requestAnimationFrame(() => {
      activeText.classList.remove(backwardsClass);
    });
  }
  next () {
    if (this.inTransit) return;
    
    let nextId = +this.activeImg[0].dataset.id + 1;
    
    if (nextId > this.length)
        nextId = 1;
    
    this.startTransition(nextId);
  }
  prev () {
    if (this.inTransit) return;
    
    let nextId = +this.activeImg[0].dataset.id - 1;
    
    if (nextId < 1)
        nextId = this.length;
    
    this.startTransition(nextId);
  }
  switchBackgroundImage (nextId) {
    function onBackgroundTransitionEnd (e) {
      if (e.target === this) {
        this.style.setProperty('--img-prev', imageUrl);
        this.classList.remove(bgClass);
        this.removeEventListener('transitionend', onBackgroundTransitionEnd);
      }
    }

    const bgClass = 'slider--bg-next';
    const el = this.el.current;
    const imageUrl = `url(${this.images[+nextId - 1].src})`;
    
    el.style.setProperty('--img-next', imageUrl);
    el.addEventListener('transitionend', onBackgroundTransitionEnd);
    el.classList.add(bgClass);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.el.current.removeEventListener('mousemove', this.stopAutoSlide);
    this.el.current.removeEventListener('touchstart', this.stopAutoSlide);
  }

  autoSlide = () => {
    requestAnimationFrame(() => {
      this.next()
    });

    this.timer = setTimeout(this.autoSlide, 5000);
  };

  stopAutoSlide = () => {
    clearTimeout(this.timer);
    this.el.current.removeEventListener('mousemove', this.stopAutoSlide);
    this.el.current.removeEventListener('touchstart', this.stopAutoSlide);
  };
  render() {
    const imgPrevUrl = 'https://lh3.googleusercontent.com/aC9nyW5dhaYFmWD8fcf8DApjpH08eHEkbCHqmUPHRQ5T3jK-QyNKZYVMehmrvyPdEA_KxWvgZ3_kyOOYOAv99Ow3UoKSvEloleVKGSfLOwOyDV3Q6Dwi1G-NYoa9-t_ofmmskE6BYnVIOnIz2HWlMcijzIEwvKAL_R4z63DaLgG0z_OcGiSQHunwGAPXrBQUv42ZXuIMODq4zxDHczSxJ72b0-_udtdQK3JuT2X8nXCwFoF7GxmOpzXS0H5f50DuCbXoXcx-O7bgBMCXZdMpTxB27-wdXeLmxpYUySXgjSN2NAKmK16DmGLYvw5tMlrqwb8h4MJEEbXjP1pjPxXsahb7UZseEGyn80uLjATANJvusyJWCtzkkxYXPz-yI1rDvfEJKe2eyA-5AvFlzFBSwBMASn8f7mXinUrXMMREkJQjoi89NfZ91G7253OEVQOqcWxddiYtcHCO5v6Pl3QfV2SUTWXgggscDSY2ezjSPpYERNTXnIM_aCyWmIG7ybrfqOB0eVYBAgynyuPVbjd4KuZWZq2Dfu33HX1RuPKglbOuZGD1QbpJnruvUVkAmjDXI40ENN7X=w1600-h766';

    const sliderStyle = {
    '--img-prev': `url(${imgPrevUrl})`
    };
    return (
      <div className="h-screen overflow-hidden">
      <div className="slider" id="slider" ref={this.el} style={sliderStyle}> 
        <div className="slider__content" id="slider-content" ref={this.contentEl} >
            <div className="slider__images">
            <div className="slider__images-item slider__images-item--active" data-id="1"><img src="https://lh3.googleusercontent.com/aC9nyW5dhaYFmWD8fcf8DApjpH08eHEkbCHqmUPHRQ5T3jK-QyNKZYVMehmrvyPdEA_KxWvgZ3_kyOOYOAv99Ow3UoKSvEloleVKGSfLOwOyDV3Q6Dwi1G-NYoa9-t_ofmmskE6BYnVIOnIz2HWlMcijzIEwvKAL_R4z63DaLgG0z_OcGiSQHunwGAPXrBQUv42ZXuIMODq4zxDHczSxJ72b0-_udtdQK3JuT2X8nXCwFoF7GxmOpzXS0H5f50DuCbXoXcx-O7bgBMCXZdMpTxB27-wdXeLmxpYUySXgjSN2NAKmK16DmGLYvw5tMlrqwb8h4MJEEbXjP1pjPxXsahb7UZseEGyn80uLjATANJvusyJWCtzkkxYXPz-yI1rDvfEJKe2eyA-5AvFlzFBSwBMASn8f7mXinUrXMMREkJQjoi89NfZ91G7253OEVQOqcWxddiYtcHCO5v6Pl3QfV2SUTWXgggscDSY2ezjSPpYERNTXnIM_aCyWmIG7ybrfqOB0eVYBAgynyuPVbjd4KuZWZq2Dfu33HX1RuPKglbOuZGD1QbpJnruvUVkAmjDXI40ENN7X=w1600-h766"/></div>
            <div className="slider__images-item" data-id="2"><img src="https://lh3.googleusercontent.com/4Bn4zdADhWhegRcmxS1xmHxbxIBzEgB8ADfeaCmiwT9iF7y2mN9Wc5L7gFLxUo2bgl3V-97EFrOyE9OXfkvip3pkpNxYe50GiapeT41p7D7tNJm3oEdV8Y-7toGyvz0UZ8VgDACVTUEdzzVVm2NtQSCroSvmo4gL3u0ty-KAyKnah9vIitfw2Rs1MuNzQq6vmzUcw1_4obGAKmk_Nx0dD33RSy1jbT8D61kxERbOu0pHUciywIO2EeUX8iOcJfHHQwVW3lGYcZKSiimGjBUvzHILrSpVZQ1xUlj0U21EeY4Hil1ZaJQaX47hQezcxZj7H8GyWhNv2TzQ7EU8DS3_MonCLxXlnXfk-80nncPa8DxN_UlIzJeOPDiWPSLXFaDJn_ywCutx-0onw5rcSC815_krGHXKt3L_weD5pq_e_2WI3BRZndcR2jOYLz9BiUp52ouDBIDw2OzrDtUgxne9NaQ2tOJwaIR26N1un92ChTLhXZF2F2NoS3Do96TY6A5dP6RsXQzK6G0Z6oj5XtYx-p--PrdP8wiDPAzOqXQkXbJaX8l2qPi3nTYrD8rB-eKyL2E1q9xQ=w1600-h766"/></div>
            <div className="slider__images-item" data-id="3"><img src="https://lh3.googleusercontent.com/r29_BOXT9GjEA49-KbPtzHtTxD16dilHpFROmoJyZdQbvCelXqgG8bcApe8OgIY-avTrFOUWO-lDsmI-muMIgRVc5IFHCIyrOR18DrnwTLh70aSNY6cTY0bNbyt4QCXBlj9R4fmA8PJMRYkTA-nB5zSvlZii9NnP9kG8w__DUrYfo9IbOZAxGY_DsheGuHA0CSWLB-lQwvHo7_sSNabsiZJ2C_878r7uEfaIR6XkjcyrWMKi529UtPl9Ikln3cXphy9HrzElIL6200dGL9GHiMMoASseLp_Z950xjT2smzTrOJSADFCG9EmScicKDbFTYZH6gyc2DEP0mUFRArhTSPa4TIUwLy9KR8bG7kV-ljmSPKv4pbtH4ByXgQ5DEm5ydOkR-DTkYkLBkcFL8cjiBPPuUdK3xkjoOciwjglMF5xAXhpnTj0VUnk3RWc9YDD-AQI2uvDatV_Ae0zzLQUIm2gfV3QiDXdkkzeLWsRmCXrr0bFf42s_1NrWD0GLfrTtHNqzBCfYbAWtjeBxHfMxlESqJLAvGketLMscx5PndptC0MRhGZESjWdRUE3kNxg7PA9EhTZg=w1600-h766"/></div>
            <div className="slider__images-item" data-id="4"><img src="https://lh3.googleusercontent.com/7MsdX710gvwl8YRxuiPIlIbGP8d3ypDASWqIOad9SpHHAPwMATjCoftyvoHjpy9eeD8aJVxVup-Zb02QMeBSFOXyqOlVc8ib3TVIXtktozy6sJK07H8Jo8UlJSpYcfgUq83Z5rJOiGQQAaZPhRYUcCR0aenU8Eh8aTuqvttfZA-PjsU39q5_I1HcpWDF1mXIxJTmlGqsoQNIuL75GDE-I2im2tAjEk6bkJkJEbDntxB5cLJEfV8TuKRsQwenkiN5opF4ttHGXYtJlS7adu-IO4wVIFcEOzdx4c1Eri3O6f9qjsTpXQH3BmpkTaLAtL5xzJit9qa0a4Dp-aZOZp1QzWeB6-dLM5HRxSiPFkku3S1umwm_GBeY3glxd3Ftata1mFIxpis6gR76oTiNO33vjxn1UZXYhCQUDByGyyuE6WOoPtu9iXJxfmUF9UMXiXVl7qyH-U7NJmq18qcU0Q6U7H3VucD_d2Vg8WTZmqVq7aA4jQ7MLuQASgMZIerxgwV_aW98z7xsS8isHgF9rN4Qtez18OjyabQxRXlC6shvRTqTDCpt1MPlfBWwyR2BKO3dHzk7h8T5=w1600-h766"/></div>
            <div className="slider__images-item" data-id="5"><img src="https://lh3.googleusercontent.com/lqd5x1eNHsfzWpPeHNPe4u-ycQh1LyxWLp_mXi8tLvQGh4aNCbANfSfSWQdqhQy7c2J2V3a4dGIw6tRcMJCpFvsRrLLpXcFgHIjWpCWoxtgWC--0tMjb6W-YYKJX55zIhS1omxmSGPuQx1sZtsAL-XnRiqXbEIjGX1A_vbDObqVEc8TP3nVsraN5xLtektJbccNriwqqZ2CqpiuHagXKCRt3oa7D8N2ZygR-i04o8YP2pHr6I0Z76R6lZj1HDY65Sj-mkPJpN6nWKY-V_6htmMndJRY615MHntdsfZ82k5_IBbJXxdIN5MjJvgk41eyFXxzTKIXSGms-itEbW7FqMlZT8bIAigDoXYub9rh-FjtfdmVRVdwIIngzFzJrJQBroyHPxW9kW2JjH8foZCzX5YMStsHvfm1s4uAhZtbwK4KI_-x9GuXI3-cCUmtuFdQ-E2z_l3Hom57dasvYj6tFcqhRS9X_popdYTxR-4IeSE-NAjp71LDevvejtAqQTvpIRMFhV9um8qOb-xkPRe0xSoR6-chA2cQE--cbFJiLxe6ywBIqW6lI-aSI9Kv924s-OfRUGz0u=w1600-h766"/></div>
            </div>
            <div className="slider__text">
            <div className="slider__text-item slider__text-item--active" data-id="1">
                <div className="slider__text-item-head">
                <h3>Forest</h3>
                </div>
                <div className="slider__text-item-info">
                <p>“And into the forest I go, to lose my mind and find my soul”</p>
                </div>
            </div>
            <div className="slider__text-item" data-id="2">
                <div className="slider__text-item-head">
                <h3>Lake</h3>
                </div>
                <div className="slider__text-item-info">
                <p>“Mist to mist, drops to drops. For water thou art, and unto water shalt thou return”</p>
                </div>
            </div>
            <div className="slider__text-item" data-id="3">
                <div className="slider__text-item-head">
                <h3>Cliffs</h3>
                </div>
                <div className="slider__text-item-info">
                <p>“Go to the edge of the cliff and jump off. Build your wings on the way down”</p>
                </div>
            </div>
            <div className="slider__text-item" data-id="4">
                <div className="slider__text-item-head">
                <h3>Mountains</h3>
                </div>
                <div className="slider__text-item-info">
                <p>“What are men to rocks and mountains?”</p>
                </div>
            </div>
            <div className="slider__text-item" data-id="5">
                <div className="slider__text-item-head">
                <h3>Peaks</h3>
                </div>
                <div className="slider__text-item-info">
                <p>“On all the peaks lies peace”</p>
                </div>
            </div>
            </div>
        </div>
        <div className="slider__nav">
            <div className="slider__nav-arrows">
            <div className="slider__nav-arrow slider__nav-arrow--left" id="left">to left</div>
            <div className="slider__nav-arrow slider__nav-arrow--right" id="right">to right</div>
            </div>
        </div>
        </div>
        </div>
    );
  }
}

export default MyComponent;
