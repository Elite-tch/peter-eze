'use client'
import React, { useState } from 'react';

function Blog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="blog">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Blogs</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Latest <span className="fw-200">News.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/blogs"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404638/New_Project_25_ylf797.png" alt="" />
              </div>
              <div className="cont pt-40">
                <h4>NIger Delta</h4>
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
          <div className="col-lg-6">
            <div className="item">
              <div className="img fit-img">
                <img src="https://res.cloudinary.com/dnbnev9lr/image/upload/v1736404426/New_Project_21_v2sb52.png" alt="" />
              </div>
              <div className="cont pt-40">
                <h4>Live Appearance On The Cross Broadcasting Corporation</h4>
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
        </div>
      </div>
      <style jsx>{`
        .custom-modal {
          position: fixed;
          top: 0;
          left: 0;
          right:0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          margin:auto;
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
          color:black;
        }
        .video-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content:center;
        }
      `}</style>
    </section>
  );
}

export default Blog;