import React from 'react';

function Blog() {
  return (
    <section className="blog mb-60">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Latest <span className="fw-200">Updates</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <a
                href="/about-nidefeast"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon  ti-arrow-top-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Official Releases & Press</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="item md-mb50" style={{ height: '800px', overflow: 'hidden' }}>
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691110/FB_IMG_1795690640748_a0qkm0.jpg" alt="Senate Confirmation"
                     style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className="cont pt-40">
                <div className="info sub-title p-color d-flex align-items-center mb-15">
                  <div>
                    <a href="/about-nidefeast">By : Office of the Commissioner</a>
                  </div>
                  <div className="ml-30">
                    <a href="/about-nidefeast">Official Bulletin</a>
                  </div>
                </div>
                <h4>
                  Senate Confirms Hon. Peter Ogbonna Eze as FCC Commissioner Representing Enugu State
                </h4>
                <a
                  href="/about-nidefeast"
                  className="butn-crev d-flex align-items-center mt-40"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Read more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="item" style={{ height: '800px', overflow: 'hidden' }}>
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691107/FB_IMG_1795690705286_rdkct1.jpg" alt="Award"
                     style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div className="cont pt-40">
                <div className="info sub-title p-color d-flex align-items-center mb-15">
                  <div><a href="/about-nidefeast">By : Hon. Peter Eze</a></div>
                  <div className="ml-30"><a href="/about-nidefeast">Awards &amp; Honors</a></div>
                </div>
                <h4>Received the Excellence in Public Service Award 2024</h4>
                <a href="/about-nidefeast" className="butn-crev d-flex align-items-center mt-40">
                  <span className="hover-this"><span className="circle hover-anim"><i className="ti-arrow-top-right"></i></span></span>
                  <span className="text">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
