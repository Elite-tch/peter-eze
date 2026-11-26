import React from 'react';

function AboutJoinUs() {
  return (
    <section className="intro-crev about-join-us pt-80 pb-40">
      <div className="container">
        <div className="sec-head">
          <div className="row">
            <div className="col-lg-7 offset-lg-5">
              <h2 className="stroke">PUBLIC STEWARDSHIP</h2>
            </div>
          </div>
        </div>
        <div className="row md-marg align-items-end">
          <div className="col-12 col-lg-6">
            <div className="img md-mb50">
              <img
                src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795696811/910133599_27983226378019981_8411724330340939756_n_vewiyz.jpg"
                alt="Public Stewardship"
                style={{ maxWidth: '100%', height: '450px' }}
              />
            {/*  <div className="exp">
                <h3>FCC</h3>
                <h6>
                  Federal Character <br /> Commission
                </h6>
              </div> */} 
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="cont">
              <p className="fz-24">
                The Office of Hon. Peter Ogbonna Eze operates an open, accountable,
                and transparent public service mandate representing Enugu State.
              </p>
              <p className="fz-24">
                Explore official public records, monitor ongoing initiatives, and
                connect directly with the Commission for fair representation,
                inquiries, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutJoinUs;
