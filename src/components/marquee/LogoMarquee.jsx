import React from "react";
import Marquee from "react-fast-marquee";
const LogoMarquee = () => {
  return (
    <div
      className="logo-section mb-110 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>We Worked With Global Largest Brand</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2">
              <Marquee>
                <a href="#">
                  <img style={{height:"80px", width:"100px"}} src="assets/brandings/infibrain.png" alt="" />
                </a>
                <a href="#">
                  <img style={{height:"80px", width:"150px"}}  src="assets/brandings/walmart.png" alt="" />
                </a>
                <a href="#">
                  <img style={{height:"80px", width:"150px"}} src="assets/brandings/raytheon.png" alt="" />
                </a>
                <a href="#">
                  <img style={{height:"80px", width:"150px"}} src="assets/brandings/facetec.png" alt="" />
                </a>
                {/* <a href="#">
                  <img style={{height:"50px", width:"50px"}} src="https://www.svgrepo.com/show/70839/warm-drink.svg" alt="" />
                </a>
                <a href="#">
                  <img style={{height:"50px", width:"50px"}} src="https://www.svgrepo.com/show/306504/openaigym.svg" alt="" />
                </a>
                <a href="#">
                  <img style={{height:"50px", width:"50px"}} src="https://www.svgrepo.com/show/112318/electric-light-bulb.svg" alt="" />
                </a> */}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
