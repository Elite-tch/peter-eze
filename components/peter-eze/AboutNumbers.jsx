import React from 'react';

function AboutNumbers() {
  return (
    <section className="numbers-crev section-padding o-hidden">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">
                CORE TENETS OF STEWARDSHIP
              </span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Constitutional Integrity.{' '}
                  <span className="fw-200">Equitable Governance.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row lg-marg justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">Equity</h3>
              </div>
              <h6 className="p-color sub-title">
                Upholding Section 14(3) of the Nigerian Constitution to ensure that Enugu
                State and all geo-political zones receive their rightful, balanced share
                of federal opportunities and appointments.
              </h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">Oversight</h3>
              </div>
              <h6 className="p-color sub-title">
                Guiding the FCC Committee on Works, Transport, and Aviation to enforce
                rigorous compliance, fairness, and geographic balance across national
                civil works and infrastructural projects.
              </h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center">
              <div className="o-hidden">
                <h3 className="stroke">Impact</h3>
              </div>
              <h6 className="p-color sub-title">
                Championing human capital development, youth leadership, and grassroots
                community interventions that build sustainable opportunities for all
                constituents.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutNumbers;
