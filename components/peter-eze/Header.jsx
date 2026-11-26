'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { opacity: 0.8 }, { opacity: 1, duration: 0.5 });
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 30 },
      { opacity: 1, translateY: 0, duration: 0.8 },
      '+=0.2'
    );

    return () => tl.kill();
  }, []);

  const [galleryImg, setGalleryImg] = useState(null);
  const [galleryText, setGalleryText] = useState(null);

  const swiperGalleryImageOptions = {
    modules: [Navigation, Autoplay, Keyboard, Pagination, EffectFade],
    onSwiper: function (swiper) {
      setGalleryImg(swiper);
    },
    spaceBetween: 0,
    slidesPerView: 1,
    effect: 'fade',
    effectfade: {
      crossFade: true,
    },
    loop: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    loopedSlides: 4,
    mousewheel: true,
    speed: 1500,
    navigation: {
      nextEl: '.modern-slider .swiper-controls .swiper-button-next',
      prevEl: '.modern-slider .swiper-controls .swiper-button-prev',
    },
    pagination: {
      el: '.modern-slider .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '">' +
          '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
          '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
          'stroke-opacity="1" stroke-width="1px"></circle>' +
          '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
          '</svg></span>'
        );
      },
    },
    keyboard: {
      enabled: true,
    },
  };

  const swiperGalleryTextOptions = {
    onSwiper: function (swiper) {
      setGalleryText(swiper);
    },
    modules: [Navigation, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    loopedSlides: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    mousewheel: true,
    speed: 1500,
    navigation: {
      nextEl: '.modern-slider .swiper-controls .swiper-button-next',
      prevEl: '.modern-slider .swiper-controls .swiper-button-prev',
    },
  };

  useEffect(() => {
    if (galleryImg && galleryText) {
      galleryImg.on('slideChangeTransitionStart', function () {
        galleryText.slideTo(galleryImg.activeIndex);
      });
      galleryText.on('transitionStart', function () {
        galleryImg.slideTo(galleryText.activeIndex);
      });
    }
  }, [galleryImg, galleryText]);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="header modern-slider valign"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        background: '#ffffff',
      }}
    >
      {/* Full-bleed right image slider with zero blank space on right */}
      <div
        className="gallery-img"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50vw',
          height: '100%',
          zIndex: 2,
        }}
      >
        <Swiper
          {...swiperGalleryImageOptions}
          className="swiper-container"
          style={{ height: '100%', width: '100%' }}
        >
          <SwiperSlide style={{ height: '100%' }}>
            <div
              className="bg-img"
              data-background="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691110/FB_IMG_1795690640748_a0qkm0.jpg"
              style={{ height: '100vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'top center' }}
            >
              <a href="/about-nidefeast"></a>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: '100%' }}>
            <div
              className="bg-img"
              data-background="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691105/FB_IMG_1795690719669_kthzxr.jpg"
              style={{ height: '100vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'top center' }}
            >
              <a href="/about-nidefeast"></a>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: '100%' }}>
            <div
              className="bg-img"
              data-background="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691105/FB_IMG_1795690775304_luqpkb.jpg"
              style={{ height: '100vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'top center' }}
            >
              <a href="/about-nidefeast"></a>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ height: '100%' }}>
            <div
              className="bg-img"
              data-background="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691103/FB_IMG_1795690833091_cuuhuv.jpg"
              style={{ height: '100vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'top center' }}
            >
              <a href="/about-nidefeast"></a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Left text content container */}
      <div
        className="container position-re"
        style={{
          zIndex: 4,
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          className="gallery-text"
          style={{
            maxWidth: '44vw',
            width: '44vw',
            top: 'calc(50% + 40px)',
            left: '1%',
            position: 'absolute',
            transform: 'translateY(-50%)',
            pointerEvents: 'auto',
          }}
        >
          <Swiper
            {...swiperGalleryTextOptions}
            className="swiper-container swiper-container-initialized swiper-container-vertical"
            style={{ height: '450px' }}
          >
            <SwiperSlide style={{ height: '450px', display: 'flex', alignItems: 'center' }}>
              <div className="text" style={{ width: '100%' }}>
                <h5 className="main-color mb-15">01</h5>
                <h1>
                  Federal Character <br /> Commission.
                </h1>
                <p>Federal Commissioner Representing Enugu State</p>
                <a
                  href="/about-nidefeast"
                  className="butn-crev d-flex align-items-center mt-30"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Explore Profile</span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: '450px', display: 'flex', alignItems: 'center' }}>
              <div className="text" style={{ width: '100%' }}>
                <h5 className="main-color mb-15">02</h5>
                <h1>
                  Works, Transport <br /> & Aviation.
                </h1>
                <p>Chairman, FCC Committee on Works, Transport & Aviation</p>
                <a
                  href="/about-nidefeast"
                  className="butn-crev d-flex align-items-center mt-30"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">View Mandate</span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: '450px', display: 'flex', alignItems: 'center' }}>
              <div className="text" style={{ width: '100%' }}>
                <h5 className="main-color mb-15">03</h5>
                <h1>
                  Equitable Growth <br /> & Fairness.
                </h1>
                <p>Promoting constitutional equity across Federal MDAs</p>
                <a
                  href="/about-nidefeast"
                  className="butn-crev d-flex align-items-center mt-30"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Public Records</span>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: '450px', display: 'flex', alignItems: 'center' }}>
              <div className="text" style={{ width: '100%' }}>
                <h5 className="main-color mb-15">04</h5>
                <h1>
                  Stewardship & <br /> Youth Leadership.
                </h1>
                <p>Bridging governance, human capital, and community impact</p>
                <a
                  href="/about-nidefeast"
                  className="butn-crev d-flex align-items-center mt-30"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Our Vision</span>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Navigation Controls docked on bottom right of image */}
      <div
        className="swiper-controls"
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <div
          className="swiper-button-next swiper-nav-ctrl cursor-pointer"
          style={{ background: '#007a3d' }}
        >
          <span className="ti-angle-up" style={{ color: '#ffffff' }}></span>
        </div>
        <div
          className="swiper-button-prev swiper-nav-ctrl cursor-pointer"
          style={{ background: '#007a3d' }}
        >
          <span className="ti-angle-down" style={{ color: '#ffffff' }}></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
