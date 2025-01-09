'use client'
import React from 'react';
import { useState } from 'react';

function Blogs() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <section className="blog-main blog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="item mb-50">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404638/New_Project_25_ylf797.png" alt="" />
              </div>
              <div className="cont pt-40">
               
                <h4 className="fz-30">
                  Niger Delta
                </h4>
                <a
                  href="https://www.facebook.com/share/p/coz3rkvedtbc9GfA/?mibextid=qi2Omg"
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
          <div className="col-md-6 col-lg-4">
            <div className="item mb-50">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404467/New_Project_24_uxgqfa.png" alt="" />
              </div>
              <div className="cont pt-40">
              
                <h4 className="fz-30">
                  The Mene Sirabara Bateera 1 of Ogoni Kingdom Receives NIDEFEST Team 
                  </h4>
                <a
                  href="/https://osibanews.com/blog/2024/08/24/the-mene-sirabara-bateera-1-of-ogoni-kingdom-receives-nidefest-team/"
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
          <div className="col-md-6 col-lg-4">
            <div className="item mb-50">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404463/New_Project_23_yearb9.png" alt="" />
              </div>
              <div className="cont pt-40">
               
                <h4 className="fz-30">
                 Niger Delta     </h4>
                <a
                  href="https://www.facebook.com/share/p/6dB3V6eGbtyVE6Fi/?mibextid=qi2Omg"
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
          <div className="col-md-6 col-lg-4">
            <div className="item md-mb50">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404458/New_Project_22_gkt7eg.png" alt="" />
              </div>
              <div className="cont pt-40">
                
                <h4 className="fz-30">
                 Niger Delta     </h4>
                <a
                  href="https://www.facebook.com/share/p/fuYKzng1vG9CF7FC/?mibextid=qi2Omg"
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
          <div className="col-md-6 col-lg-4">
            <div className="item sm-mb50">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404426/New_Project_21_v2sb52.png" alt="" />
              </div>
              <div className="cont pt-40">
                <h4 className="fz-30">
                  Live Appearance On The Cross Broadcasting Corporation
                </h4>
                <a
                  href="https://www.facebook.com/share/v/UkFyabUEBtwUdBro/?mibextid=qi2Omg"
                  className="butn-crev d-flex align-items-center mt-40"
                  onClick={openModal}
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
            {modalIsOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close-button" onClick={closeModal}>&times;</span>
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.facebook.com/share/v/UkFyabUEBtwUdBro/?mibextid=qi2Omg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Video"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          


          </div>
          <div className="col-md-6 col-lg-4">
            <div className="item">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404467/New_Project_24_uxgqfa.png" alt="" />
              </div>
              <div className="cont pt-40">
                
                <h4 className="fz-30">
                 Group seeks partnership with Niger Delta Governors on Regional Festival.     </h4>
                <a
                  href="/blog-details"
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
        </div>
      </div>
      <style jsx>{`
        .custom-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          position: relative;
          width: 90%;
        }
            .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
          color: #000;
        }
        .video-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}

export default Blogs;
