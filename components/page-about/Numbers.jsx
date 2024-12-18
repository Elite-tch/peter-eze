import React from 'react';

function Numbers() {
  return (
    <section className="numbers-crev section-padding o-hidden">
      <div className="container">
      <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">WHAT MAKES NIDEFEST UNIQUE?</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                A cultural revival.<span className="fw-200">Imagine a festival where.</span>
                </span>
              </h3>
            </div>
          
          {/* <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div> */}
          </div>
        </div> 
        <div className="row lg-marg justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">Rhythms</h3>
              </div>
              <h6 className="p-color sub-title"> Theair is filled with rhythm, energetic dances, soul-stirring music, and the iconic beats
              of the Niger Delta.</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">Flavors</h3>
              </div>
              <h6 className="p-color sub-title">Yourtaste buds travel through time, sampling local delicacies passed down through
 generations, alongside bold new culinary creations.

</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center">
              <div className="o-hidden">
                <h3 className="stroke">Creativity</h3>
              </div>
              <h6 className="p-color sub-title"> Artcomes alive with breathtaking exhibitions, live craft-making, and cutting-edge
              fashion inspired by the colors and textures of our land.</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
