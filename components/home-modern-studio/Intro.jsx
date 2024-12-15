import React from 'react';

function Intro() {
  return (
    <section className="intro-crev section-padding pt-12">
      <div className="container">
        <div className="sec-head">
          <div className="row">
           
            <div className="col-lg-7 offset-lg-5">
              <h2 className="stroke"> NIDFEST</h2>
            </div>
          </div>
        </div> 
        <div className="row md-marg align-items-end">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/intro/2.jpg" alt="" />
              <div className="exp">
                <h3>30th</h3>
                <h6>
                  December <br /> 2024
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cont">
              <p className="fz-24">
              NIDFEST is a special program created to celebrate the rich and vibrant culture of the
Niger Delta region. From its mesmerizing landscapes to its rich traditions, the Niger
Delta is bursting with stories waiting to be told. At NIDFEST, we&apos;re putting this treasure
trove on the map
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
