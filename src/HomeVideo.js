import React, { useEffect, useState } from "react";
import "./HomeVideo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaGlobe, FaApple } from "react-icons/fa";

const HomeVideo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const homeTitleTwoText =
    windowWidth < 768
      ? "Get The Most Powerful Crypto Bots In Your Pocket"
      : "Moon App Is The Layer0 + Launchpad Of The Injective Ecosystem";

  return (
    <div className="video">
      <div className="overlay"></div>
      <video className="home__video" autoPlay muted loop>
        <source
          src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65a0ec33d5658a2afa48d3e9_Cut-transcode.mp4"
          type="video/mp4"
        />
      </video>

      <div className="home__wrapper">
        <h1 className="home__titleOne">Layer0 of Injective</h1>

        {windowWidth > 768 && (
          <h1 className="home__titleTwo">
            <span>Moon App</span> Is The Layer0 + <br />
            Launchpad Of The Injective
            <br />
            Ecosystem
          </h1>
        )}

        {windowWidth <= 768 && (
          <h1 className="home__titleTwo">
            Get The <span>Most Powerful Crypto</span> Bots In Your Pocket
          </h1>
        )}

        <div className="home__socialMedia">
          <a
            href="https://twitter.com/MoonAppOfficial"
            target="_blank"
            rel="noreferrer"
          >
            <div className="home__x">
              <FontAwesomeIcon
                className="home__socialIcon"
                icon={faXTwitter}
                color="lightBlue"
              />
            </div>
          </a>

          <a href="https://t.me/MoonAppChat" target="_blank" rel="noreferrer">
            <div className="home__x">
              <img
                height={20}
                width={20}
                src="https://img.icons8.com/fluency-systems-filled/66a8f0/telegram-app.png"
                alt="telegram-app"
                className="home__socialIcon"
              />
            </div>
          </a>

          <a href="https://www.moonapp.io" target="_blank" rel="noreferrer">
            <div className="home__x">
              <FaGlobe className="home__socialIcon" />
            </div>
          </a>

          <a
            href="https://apps.apple.com/am/app/moon-app-wallet/id6459883134"
            target="_blank"
            rel="noreferrer"
          >
            <div className="home__x">
              <FaApple className="home__socialIcon" />
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=io.moonapp"
            target="_blank"
            rel="noreferrer"
          >
            <div className="home__x">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/66a8f0/android-os.png"
                alt="android-os"
              />
            </div>
          </a>

          <a href="https://app.moonapp.io" target="_blank" rel="noreferrer">
            <div className="home__x">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/66a8f0/application-window.png"
                alt="application-window"
                className="home__socialIcon"
              />
            </div>
          </a>

          <button className="home__button">Enter LaunchPad</button>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
