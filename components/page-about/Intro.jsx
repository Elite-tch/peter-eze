import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1734439927/New_Project_19_l2g96e.png" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1734439694/New_Project_18_pgkxbb.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
              NIDEFEST {' '}
                <span className="fw-200">A Celebration</span> of Culture<span className="fw-200">and</span>
                Unity.
              </h3>
              <p className="mb-30">
              NIDEFEST is more than a festival, it is a vibrant movement where traditions, cultures, and energy converge. It showcases the unmatched beauty of our region, uniting communities and giving the world a front-row seat to experience the magic of our heritage.
              </p>

              <h3 className="mb-30">
             Our{' '}
                <span className="fw-200">Vision</span> 
              </h3>
              <p>
              NIDEFEST shines a global spotlight on the Niger Delta&apos;s diversity, resilience, and creativity. It ignites pride, celebrates achievements, and shares our unique stories with the world, preserving and promoting our heritage for the future.  </p>

           {/*   <a href="/page-services" className="underline main-color mt-40">
                <span className="text">
                  Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a> */}
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
