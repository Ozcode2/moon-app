import React, { useState, useEffect, useRef } from "react";
import "./Content.css";
import { FaArrowTurnUp } from "react-icons/fa6";

const Content = () => {
  const [range, setRange] = useState(1);
  const sliderRef = useRef(null);
  const sliderNumberRef = useRef(null);

  useEffect(() => {
    swiperFuncRange();
    doOnRangeChange();
  }, [range]);

  const doOnRangeChange = () => {
    document.querySelector(".pages-number").textContent = range;
    document.querySelector(".eth-number").textContent = (range * 0.5).toFixed(
      1
    );
  };

  const swiperFuncRange = () => {
    const slider = sliderRef.current;
    let rangeVal = parseFloat(range);
    const rangeWidth = slider.offsetWidth - 10;
    const rangeMax = slider.max;
  };

  const handleRangeChange = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="container">
      <div className="image-section">
        <img
          src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65be4df79dcf5b3bba7fff3b_Group%201321314337.webp"
          loading="lazy"
          alt="Conducive Classroom"
          className="invite-ui-1"
        />
        <img
          src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65be4df522fa5cd707f8c29b_Group%201321314351%20(1).webp"
          loading="lazy"
          alt="Classroom Image"
          className="invite-ui-2"
        />
      </div>
      <div className="text-section">
        <h2>
          Earn up to 40% trading fee commission on every trade your friends
          make.
        </h2>
        <div className="text-wrap">
          <div className="text-group">
            <div className="pages-number" id="note-info"></div>
            <div className="label-text">Friends Invited</div>
          </div>
          <div className="text-group">
            <div className="note-wrap">
              <img
                className="note-img"
                src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d2d23c514f7de1811f90cc_ETH%20icon.svg"
                alt="ETH icon"
              />
              <div className="eth-number" id="note-info"></div>
            </div>
            <div className="label-text">Projected Earnings (INJ)</div>
            <div className="label-span">Project Earnings</div>
          </div>
        </div>
        <div className="range-wrapper">
          <div className="range-box w-embed">
            <input
              type="range"
              value={range}
              className="slider"
              name="range"
              min="1"
              max="50"
              onChange={handleRangeChange}
              ref={sliderRef}
            />
          </div>
          <div ref={sliderNumberRef} className="slider-number"></div>
          <div className="range-dot-2"></div>
          <div className="range-dot-1"></div>
        </div>
        <div className="scroll-wrap">
          <div className="scroll-right-wrapper">
            <div className="arrow-2-copy w-embed">
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.4L4.2 4.6L1 7.8"
                  stroke="CurrentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="arrow-2 w-embed">
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.19922 1.2L7.59922 7.6L1.19922 14"
                  stroke="CurrentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="arrow-3 w-embed">
              <svg
                width="13"
                height="21"
                viewBox="0 0 13 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.39844 1L10.9984 10.6L1.39844 20.2"
                  stroke="CurrentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="wrap-btn">
          <button className="invite-btn">
            Invite & earn <FaArrowTurnUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
