'use client';
import React from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function AboutTestimonials() {
  const swiperOptions = {
    modules: [Navigation, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 'auto',
      },
    },
    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };

  return (
    <section className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Constitutional Mandate</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  WHY <span className="fw-200">EQUITY MATTERS.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Constitutional Equity</h6>
                  <div className="text">
                    <p>
                      The Federal Character Commission is established to foster
                      national unity and ensure no state, senatorial zone, or
                      ethnic group is left out of federal opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Enugu State Voice</h6>
                  <div className="text">
                    <p>
                      Championing the rightful representation of Enugu citizens
                      across Federal Ministries, Departments, Agencies (MDAs),
                      and public sector institutions.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Infrastructural Oversight</h6>
                  <div className="text">
                    <p>
                      Guiding monitoring across works, transport, and aviation to
                      ensure federal infrastructure distribution reflects fairness,
                      balance, and tangible impact.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Youth Leadership</h6>
                  <div className="text">
                    <p>
                      Embodying a dynamic generation of public administrators who
                      prioritize merit, technological efficiency, transparency, and
                      community responsiveness.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default AboutTestimonials;
