import React from 'react';

function AboutIntro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          {/* Left side – hero image */}
          <div className="col-lg-6 col-12">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img
                    src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691110/FB_IMG_1795690675573_z4fki2.jpg"
                    alt="About hero"
                  />
                </div>
                <div className="col-6 mt-40">
                  <img
                    src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691103/FB_IMG_1795690833091_cuuhuv.jpg"
                    alt="Federal Character Commission"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side – text content */}
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Hon. Peter Ogbonna Eze{' '}
                <span className="fw-200">A Commitment to</span> Equity{' '}
                <span className="fw-200">and</span> Fair Representation.
              </h3>
              <p className="mb-30">
                Born in Aji in the Igbo‑Eze North Local Government Area of Enugu State,
                Hon. Peter Ogbonna Eze (<em>Ezembanabo</em>) is an economist, seasoned public
                administrator, and corporate leader. He graduated with Second Class Upper
                Honours in Economics from the University of Nigeria, Nsukka (UNN), and holds
                a Master’s degree in Public Administration (MPA) from the University of
                International Business and Economics (UIBE) in Beijing, China, where he emerged
                as the Most Outstanding Student of his graduating cohort.
              </p>

              
            </div>
          </div>
          <h3 className="mb-10">
                Public Service{' '}
                <span className="fw-200">&amp; Leadership</span>
              </h3>
              <p>
                Appointed by President Bola Ahmed Tinubu and confirmed by the Nigerian Senate,
                Hon. Eze serves as the Federal Character Commissioner representing Enugu State
                at the Federal Character Commission (FCC), where he chairs the Committee on
                Works, Transport, and Aviation. He brings extensive national and international
                experience spanning legislative advisory, media strategy, public affairs, and
                human capital empowerment.
              </p>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;


