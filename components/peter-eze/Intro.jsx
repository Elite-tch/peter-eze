import React from 'react';

function Intro() {
  return (
    <section
      className="intro-crev section-padding pt-12"
      style={{ background: '#ffffff', backgroundColor: '#ffffff' }}
    >
      <div className="container">
        <div className="sec-head">
          <div className="row">
            <div className="col-lg-7 offset-lg-5">
              <h2 className="stroke">ABOUT ME</h2>
            </div>
          </div>
        </div>
        <div className="row md-marg align-items-end">
          <div className="col-12 col-lg-6">
            <div className="img md-mb50">
              <img
                src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691105/FB_IMG_1795690743109_ourqhe.jpg"
                alt="Hon. Peter Ogbonna Eze"
              />
            {/*   <div className="exp">
                <h3>FCC</h3>
                <h6>
                  Enugu State <br /> Commissioner
                </h6>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="cont">
              <p className="fz-24">
                Hon. Peter Ogbonna Eze is the Federal Character Commissioner
                representing Enugu State at the Federal Character Commission
                (FCC), and Chairman of the Committee on Works, Transport, and
                Aviation.
              </p>
              <a
                href="/about-nidefeast"
                className="butn-crev d-flex align-items-center mt-30"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="ti-arrow-top-right"></i>
                  </span>
                </span>
                <span className="text">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
