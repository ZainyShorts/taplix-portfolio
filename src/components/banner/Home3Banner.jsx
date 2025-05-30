"use client";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const Home3Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="home3-banner-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="banner-content">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                  </svg>
                  Expertise You Can Trust
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                  </svg>
                </span>
                <h1>
                  Elevate Your Business with <span>Tapplix Solutions</span> in the
                  Cloud.
                </h1>
                <p>
                  Welcome toTapplix, where digital innovation meets strategic
                  excellence as a dynamic force in the realm of digital
                  marketing, we are dedicated tourat propelling businesses into
                  the spotlight of online success.
                </p>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <path d="M18 9C18 9.768 17.0565 10.401 16.8675 11.109C16.6725 11.841 17.166 12.861 16.7955 13.5015C16.419 14.1525 15.2865 14.2305 14.7585 14.7585C14.2305 15.2865 14.1525 16.419 13.5015 16.7955C12.861 17.166 11.841 16.6725 11.109 16.8675C10.401 17.0565 9.768 18 9 18C8.232 18 7.599 17.0565 6.891 16.8675C6.159 16.6725 5.139 17.166 4.4985 16.7955C3.8475 16.419 3.7695 15.2865 3.2415 14.7585C2.7135 14.2305 1.581 14.1525 1.2045 13.5015C0.834 12.861 1.3275 11.841 1.1325 11.109C0.9435 10.401 0 9.768 0 9C0 8.232 0.9435 7.599 1.1325 6.891C1.3275 6.159 0.834 5.139 1.2045 4.4985C1.581 3.8475 2.7135 3.7695 3.2415 3.2415C3.7695 2.7135 3.8475 1.581 4.4985 1.2045C5.139 0.834 6.159 1.3275 6.891 1.1325C7.599 0.9435 8.232 0 9 0C9.768 0 10.401 0.9435 11.109 1.1325C11.841 1.3275 12.861 0.834 13.5015 1.2045C14.1525 1.581 14.2305 2.7135 14.7585 3.2415C15.2865 3.7695 16.419 3.8475 16.7955 4.4985C17.166 5.139 16.6725 6.159 16.8675 6.891C17.0565 7.599 18 8.232 18 9Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.3797 5.3256L8.02828 12.7355L3.64648 8.35375L4.35359 7.64665L7.9718 11.2649L13.6204 4.6748L14.3797 5.3256Z"
                      />
                    </svg>
                    7-day Free Trail
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <path d="M18 9C18 9.768 17.0565 10.401 16.8675 11.109C16.6725 11.841 17.166 12.861 16.7955 13.5015C16.419 14.1525 15.2865 14.2305 14.7585 14.7585C14.2305 15.2865 14.1525 16.419 13.5015 16.7955C12.861 17.166 11.841 16.6725 11.109 16.8675C10.401 17.0565 9.768 18 9 18C8.232 18 7.599 17.0565 6.891 16.8675C6.159 16.6725 5.139 17.166 4.4985 16.7955C3.8475 16.419 3.7695 15.2865 3.2415 14.7585C2.7135 14.2305 1.581 14.1525 1.2045 13.5015C0.834 12.861 1.3275 11.841 1.1325 11.109C0.9435 10.401 0 9.768 0 9C0 8.232 0.9435 7.599 1.1325 6.891C1.3275 6.159 0.834 5.139 1.2045 4.4985C1.581 3.8475 2.7135 3.7695 3.2415 3.2415C3.7695 2.7135 3.8475 1.581 4.4985 1.2045C5.139 0.834 6.159 1.3275 6.891 1.1325C7.599 0.9435 8.232 0 9 0C9.768 0 10.401 0.9435 11.109 1.1325C11.841 1.3275 12.861 0.834 13.5015 1.2045C14.1525 1.581 14.2305 2.7135 14.7585 3.2415C15.2865 3.7695 16.419 3.8475 16.7955 4.4985C17.166 5.139 16.6725 6.159 16.8675 6.891C17.0565 7.599 18 8.232 18 9Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.3797 5.3256L8.02828 12.7355L3.64648 8.35375L4.35359 7.64665L7.9718 11.2649L13.6204 4.6748L14.3797 5.3256Z"
                      />
                    </svg>
                    Moneyback Guarantee
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <path d="M18 9C18 9.768 17.0565 10.401 16.8675 11.109C16.6725 11.841 17.166 12.861 16.7955 13.5015C16.419 14.1525 15.2865 14.2305 14.7585 14.7585C14.2305 15.2865 14.1525 16.419 13.5015 16.7955C12.861 17.166 11.841 16.6725 11.109 16.8675C10.401 17.0565 9.768 18 9 18C8.232 18 7.599 17.0565 6.891 16.8675C6.159 16.6725 5.139 17.166 4.4985 16.7955C3.8475 16.419 3.7695 15.2865 3.2415 14.7585C2.7135 14.2305 1.581 14.1525 1.2045 13.5015C0.834 12.861 1.3275 11.841 1.1325 11.109C0.9435 10.401 0 9.768 0 9C0 8.232 0.9435 7.599 1.1325 6.891C1.3275 6.159 0.834 5.139 1.2045 4.4985C1.581 3.8475 2.7135 3.7695 3.2415 3.2415C3.7695 2.7135 3.8475 1.581 4.4985 1.2045C5.139 0.834 6.159 1.3275 6.891 1.1325C7.599 0.9435 8.232 0 9 0C9.768 0 10.401 0.9435 11.109 1.1325C11.841 1.3275 12.861 0.834 13.5015 1.2045C14.1525 1.581 14.2305 2.7135 14.7585 3.2415C15.2865 3.7695 16.419 3.8475 16.7955 4.4985C17.166 5.139 16.6725 6.159 16.8675 6.891C17.0565 7.599 18 8.232 18 9Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.3797 5.3256L8.02828 12.7355L3.64648 8.35375L4.35359 7.64665L7.9718 11.2649L13.6204 4.6748L14.3797 5.3256Z"
                      />
                    </svg>
                    24/7 Support
                  </li>
                </ul>
                <div className="banner-content-bottom">
                  <Link
                    href="/contact"
                    className="primary-btn1 hover-white"
                    data-text="Start free trail"
                  >
                    <span>Start free trial</span>
                  </Link>
                  <a
                    data-fancybox="popup-video"
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(true)}
                    className="video-area"
                  >
                    <div className="icon">
                      <svg
                        className="video-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="51px"
                        viewBox="0 0 206 206"
                        style={{ enableBackground: "new 0 0 206 206" }}
                        xmlSpace="preserve"
                      >
                        <circle
                          className="circle"
                          strokeMiterlimit={10}
                          cx={103}
                          cy={103}
                          r={100}
                        />
                        <path
                          className="circle-half top-half"
                          strokeWidth={4}
                          strokeMiterlimit={10}
                          d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6"
                        />
                        <path
                          className="circle-half bottom-half"
                          strokeWidth={4}
                          strokeMiterlimit={10}
                          d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53"
                        />
                      </svg>
                      <i className="bi bi-play" />
                    </div>
                    <h6>Watch a Demo</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/home3/banner-bottom-img1.png"
          alt=""
          className="bottom-img1 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        />
        <img
          src="assets/img/home3/banner-bottom-img2.png"
          alt=""
          className="bottom-img2"
        />
        <img
          src="assets/img/home3/banner-bottom-img3.png"
          alt=""
          className="bottom-img3 wow animate fadeInUp"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        />
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </>
  );
};

export default Home3Banner;
