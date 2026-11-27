'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Portfolio() {
  // Initialize GSAP scroll‑pin effect on mount
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);
    // Removed mobile‑width guard – we want the effect on all devices
    const cards = document.querySelectorAll('.cards .card-item');
    if (!cards.length) return;
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });
    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });
      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }

  useEffect(() => {
    Playing();
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section className="work-card section-padding pb-0" style={{ paddingTop: '60px', paddingBottom: 0 }}>
      <div className="container">
        <div className="sec-head mb-40">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Public Stewardship</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Key <span className="fw-200">Mandates.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a href="/about" className="butn butn-sm butn-bord radius-30">
                <span>View Profile</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        {/* Static cards – this layout now works on both desktop and mobile */}
        <div className="cards">
          {/* Card 1 */}
          <div className="card-item sub-bg" style={{ background: '#007a3d', backgroundColor: '#007a3d' }}>
            <div className="row" style={{ margin: 0, minHeight: '480px' }}>
              <div className="col-lg-5" style={{ display: 'flex', alignItems: 'stretch' }}>
                <div className="cont" style={{ width: '100%' }}>
                  <div>
                    <div className="mb-15">
                      <a href="/about" className="tag">Constitutional</a>
                      <a href="/about" className="tag">Enugu State</a>
                    </div>
                    <h4>Enugu State Representation</h4>
                  </div>
                  <div>
                    <p>
                      Safeguarding Section 14(3) of the Nigerian Constitution to
                      ensure equitable distribution of public offices, federal
                      employment, and socio‑economic opportunities for the good
                      people of Enugu State.
                    </p>
                    <a href="/about" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7" style={{ padding: 0, minHeight: '480px', overflow: 'hidden' }}>
                <div className="img" style={{ height: '100%', minHeight: '480px', padding: 0, overflow: 'hidden' }}>
                  <img src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691104/FB_IMG_1795690879013_o7erhn.jpg" alt="Enugu Representation"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card-item sub-bg" style={{ background: '#007a3d', backgroundColor: '#007a3d' }}>
            <div className="row" style={{ margin: 0, minHeight: '480px' }}>
              <div className="col-lg-5" style={{ display: 'flex', alignItems: 'stretch' }}>
                <div className="cont" style={{ width: '100%' }}>
                  <div>
                    <div className="mb-15">
                      <a href="/about" className="tag">Oversight</a>
                      <a href="/about" className="tag">Infrastructure</a>
                    </div>
                    <h4>Works, Transport &amp; Aviation</h4>
                  </div>
                  <div>
                    <p>
                      Leading legislative and regulatory oversight across key
                      federal ministries and agencies to enforce fair character
                      principles in federal civil works, transport frameworks,
                      and aviation infrastructure.
                    </p>
                    <a href="/about" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7" style={{ padding: 0, minHeight: '480px', overflow: 'hidden' }}>
                <div className="img" style={{ height: '100%', minHeight: '480px', padding: 0, overflow: 'hidden' }}>
                  <img src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691105/FB_IMG_1795690817619_f4frhv.jpg" alt="Works &amp; Aviation"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card-item sub-bg" style={{ background: '#007a3d', backgroundColor: '#007a3d' }}>
            <div className="row" style={{ margin: 0, minHeight: '480px' }}>
              <div className="col-lg-5" style={{ display: 'flex', alignItems: 'stretch' }}>
                <div className="cont" style={{ width: '100%' }}>
                  <div>
                    <div className="mb-15">
                      <a href="/about" className="tag">Youth Leadership</a>
                      <a href="/about" className="tag">Human Capital</a>
                    </div>
                    <h4>Empowerment &amp; Interventions</h4>
                  </div>
                  <div>
                    <p>
                      Championing education, capacity development, skills
                      acquisition, and youth mentorship to empower grassroots
                      communities across Enugu State and beyond.
                    </p>
                    <a href="/about" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7" style={{ padding: 0, minHeight: '480px', overflow: 'hidden' }}>
                <div className="img" style={{ height: '100%', minHeight: '480px', padding: 0, overflow: 'hidden' }}>
                  <img src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1795691104/FB_IMG_1795690879013_o7erhn.jpg" alt="Empowerment"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card-item sub-bg" style={{ background: '#007a3d', backgroundColor: '#007a3d' }}>
            <div className="row" style={{ margin: 0, minHeight: '480px' }}>
              <div className="col-lg-5" style={{ display: 'flex', alignItems: 'stretch' }}>
                <div className="cont" style={{ width: '100%' }}>
                  <div>
                    <div className="mb-15">
                      <a href="/about" className="tag">Accountability</a>
                      <a href="/about" className="tag">Public Records"</a>
                    </div>
                    <h4>Transparency &amp; Open Records</h4>
                  </div>
                  <div>
                    <p>
                      Establishing verifiable public documentation, digital
                      stewardship records, and direct feedback channels for
                      citizens to follow ongoing legislative and executive
                      interventions.
                    </p>
                    <a href="/about" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Learn More <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7" style={{ padding: 0, minHeight: '480px', overflow: 'hidden' }}>
                <div className="img" style={{ height: '100%', minHeight: '480px', padding: 0, overflow: 'hidden' }}>
                  <img src="https://res.cloudinary.com/dibbnfwk9/image/upload/v1795691105/FB_IMG_1795690817619_f4frhv.jpg" alt="Transparency"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              Dedicated to <span className="fw-600">Equitable Representation</span> and Constitutional Fairness
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
