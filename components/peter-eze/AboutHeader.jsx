'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function AboutHeader() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
   <div
  className="header page-header valign about-hero-header"
  style={{
    backgroundImage:
      'url(https://res.cloudinary.com/dibwnfwk9/image/upload/v1795696810/831456872_2596858367435964_4774435641693202844_n_ertzte.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
    borderBottom: '1px solid rgba(1, 105, 72, 0.12)',
  }}
>
      <div className="container pt-80">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-u ls1 fz-80 about-hero-title">
                About <span className="fw-200">Hon. Peter Eze</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
