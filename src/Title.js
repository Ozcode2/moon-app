import "./Title.css";
import React, { useState, useEffect } from "react";
const Title = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(scrollTop);
      setMaxScroll(scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getScrollPercentage = () => {
    return maxScroll ? scrollY / maxScroll : 0;
  };

  const scrollPercentage = getScrollPercentage();

  const getTransformStyles = (rotateZValue, translateXValue) => {
    const speedMultiplier = 1; // Increase the value to speed up the transformation

    return {
      transform: `translate3d(${
        scrollPercentage * translateXValue * speedMultiplier
      }%, 0px, 0px)
                scale3d(1, 1, 1)
                rotateX(${scrollPercentage * 0}deg)
                rotateY(${scrollPercentage * 0}deg)
                rotateZ(${scrollPercentage * rotateZValue * speedMultiplier}deg)
                skew(0deg, 0deg)`,
      willChange: "transform",
      transformStyle: "preserve-3d",
    };
  };

  return (
    <div className="missed">
      <div className="missed-container">
        <div className="missed-title-wrapper">
          <div className="missed-title-block">
            <h1
              data-w-id="8c481721-7b8c-27cf-bb0e-24fd4a9481ac"
              class="h1 centred"
            >
              Missed $PEPE?{" "}
              <span class="blue-span">
                Still
                <br />
                make money
              </span>{" "}
              on $PEPE
            </h1>
          </div>
          <div className="missed-download-wrapper">
            <a
              href="/"
              className="download-app-button w-inline-block"
              target="_blank"
            >
              <img
                src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d6c802b28e329b903b02ea_Download%20-%20Apple.svg"
                loading="lazy"
                alt=""
              ></img>
            </a>
            <a
              href="/"
              className="download-app-button w-inline-block"
              target="_blank"
            >
              <img
                src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d6c8027a2a36cb642e3bc8_Download%20-%20Goolge.svg"
                loading="lazy"
                alt=""
              ></img>
            </a>
          </div>
        </div>
        <div className="missed-animation-wrapper">
          <div class="missed-animation-img-wrapper">
            <img
              src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65be4ed2cde3efe1ffad3344_Group%201321314353.png"
              loading="lazy"
              alt="phone"
              className="image-8"
            />
          </div>
          <div className="missed-animation-content">
            <div className="folder-wrapper">
              <div className="folder-1">
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64da914efdcfef76471d8eaa_Sandwich%20Attacks.svg"
                  className="folder-img-1"
                  loading="lazy"
                  style={getTransformStyles(-20, 0)}
                ></img>
                <div
                  className="folder-1-text"
                  style={getTransformStyles(0, 125)}
                >
                  <div className="missed-copy">
                    When PEPE FOMO started, people rushed to buy. Moon App bots
                    sandwich DEX trades to rake in profits.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d76dcacfd44ca4dd509c39_BG%20Block.svg"
                  className="folder-bg-1"
                  loading="lazy"
                  style={getTransformStyles(-20, 0)}
                ></img>
                <div
                  className="missed-folder-title-1"
                  style={getTransformStyles(-20, 0)}
                >
                  Sandwich <br /> Attacks
                </div>
              </div>
            </div>
            <div className="folder-wrapper right">
              <div className="folder-2">
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64da914e825ef463bf0e4fc1_Sniping%20LP%20Pools.svg"
                  className="folder-img-2"
                  loading="lazy"
                  style={getTransformStyles(-20, 0)}
                ></img>
                <div
                  className="missed-folder-title-2"
                  style={getTransformStyles(-20, 0)}
                >
                  Snipe LP <br /> Pools
                </div>
                <div
                  className="folder-2-text"
                  style={getTransformStyles(0, -125)}
                >
                  <div className="missed-copy">
                    Moon App allows to snipe LP of recently launched tokens like
                    PEPE, before the pump started.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d76dcacfd44ca4dd509c39_BG%20Block.svg"
                  className="folder-bg-2"
                  loading="lazy"
                  style={getTransformStyles(-20, 0)}
                ></img>
              </div>
            </div>
            <div className="folder-wrapper">
              <div className="folder-3">
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64da914decb16939364b9c34_Mooon%20App%20Automation.svg"
                  className="folder-img--3"
                  loading="lazy"
                  style={getTransformStyles(20, 0)}
                ></img>
                <div
                  className="missed-folder-title-3"
                  style={getTransformStyles(20, 0)}
                >
                  Moon App <br /> Automation
                </div>
                <div
                  className="folder-3-text"
                  style={getTransformStyles(0, 125)}
                >
                  <div className="missed-copy">
                    Moon App allows to automate PEPE accumulation at low prices
                    with limit orders in a certain price range.
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d76dcacfd44ca4dd509c39_BG%20Block.svg"
                  className="folder-bg-3"
                  loading="lazy"
                  style={getTransformStyles(20, 0)}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
