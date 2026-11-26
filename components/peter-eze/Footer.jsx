import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev" style={{ zIndex: '1' }}>
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <div className="column md-mb50">
              <h6 className="sub-title mb-20">FEDERAL CHARACTER COMMISSION</h6>
              <p className="fz-14 opacity-7">
                Office of Hon. Peter Ogbonna Eze
                <br />
                Federal Commissioner Representing Enugu State
                <br />
                Chairman, Committee on Works, Transport & Aviation
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column md-mb50">
              <h6 className="sub-title mb-20">Official Address</h6>
              <h6 className="p-color fw-400 fz-14 opacity-8">
                Federal Character Commission Headquarters
                <br />
                No 3, Maputo Street, Wuse Zone 3
                <br />
                P.M.B. 5008, Wuse, Abuja, Nigeria
              </h6>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-20">Navigation</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/peter-eze">Home</a>
                </li>
                <li className="mb-15">
                  <a href="/about-nidefeast">About Hon. Peter Eze</a>
                </li>
                <li className="mb-15">
                  <a href="/peter-eze">Public Mandates</a>
                </li>
                <li>
                  <a href="/about-nidefeast">Contact & Enquiries</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-20">Constituent Updates</h6>
              <div className="form-group mb-30">
                <input
                  type="text"
                  name="subscrib"
                  placeholder="Enter email for official updates"
                />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="https://fcc.gov.ng" target="_blank" rel="noreferrer" className="hover-anim">
                    <i className="fas fa-globe"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2026 Office of Hon. Peter Ogbonna Eze · Federal Character Commission. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
