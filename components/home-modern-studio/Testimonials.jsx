'use client';
import React from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation, Autoplay],
    slidesPerView: 'auto',

    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
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
              <span className="sub-title main-color mb-5">Importance</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                WHY <span className="fw-200">NIDEFEST MATTERS.</span>
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
                  <h6 className="sub-title mb-15">We Preserve Culture</h6>
                  <div className="text">
                    <p>
                       Every performance, every bite of food, every handmade craft
                      helps keep the rich traditions of the Niger Delta alive.
                    </p>
                  </div>
                </div>
               {/*       <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/t2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Haitham Al-Dukhin</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Envato Customer
                      </span>
                    </div>
                  </div>
                </div>*/}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15"> We Empower Communities</h6>
                  <div className="text">
                    <p>
                    By spotlighting local artists, traders, and farmers, we create
 opportunities that fuel growth and prosperity.

                    </p>
                  </div>
                </div>
         {/*       <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/t2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Haitham Al-Dukhin</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Envato Customer
                      </span>
                    </div>
                  </div>
                </div>*/}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15"> We Unite People</h6>
                  <div className="text">
                    <p>
                    Whether you’re from the Niger Delta or the other side of the globe,
                    NIDEFEST is a shared space to celebrate, connect, and belong.
                    </p>
                  </div>
                </div>
                {/*       <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/t2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Haitham Al-Dukhin</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Envato Customer
                      </span>
                    </div>
                  </div>
                </div>*/}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15"> We Inspire Tourism</h6>
                  <div className="text">
                    <p>
                    Showcasing the Niger Delta’s wonders leaves visitors with lasting memories and newfound admiration.</p>
                  </div>
                </div>
                {/*       <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="/assets/imgs/testim/t2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Haitham Al-Dukhin</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Envato Customer
                      </span>
                    </div>
                  </div>
                </div>*/}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
