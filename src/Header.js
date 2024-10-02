import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      {/* <img src="./moon.png" className="header__logo" alt="Moon Logo" /> */}
      <svg
        width="81"
        height="18"
        viewBox="0 0 81 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="logo"
        className="header__logo"
      >
        <path
          d="M26.6532 6.70021V17.9469H22.6512V7.28653C22.6512 4.808 21.6374 3.60871 19.6364 3.60871H19.3162C17.2352 3.60871 15.3142 5.52758 15.3142 8.27262V17.9735H11.3123V7.31318C11.3123 4.94126 10.3785 3.63536 8.29743 3.63536H8.03063C5.86957 3.63536 4.02866 5.55423 4.02866 8.29927V18.0002H0V0.570514H4.02866V3.04904C5.14921 1.23679 7.0168 0.224052 9.20455 0.224052C11.7125 0.224052 13.6868 1.26344 14.7006 3.31555C15.9545 1.18348 18.0623 0.224052 20.4368 0.224052C24.5988 0.224052 26.6532 2.75589 26.6532 6.70021ZM74.837 0.224052C72.4624 0.224052 70.5415 1.31674 69.4743 3.0757V0.570514H65.4723V17.9469H69.501V8.24597C69.501 5.52758 71.3419 3.47546 73.663 3.47546H73.9032C75.9575 3.47546 76.998 4.83465 76.998 7.20658V17.9469H81V6.59361C81 2.83584 78.8656 0.224052 74.837 0.224052ZM61.1582 2.51869C61.0515 2.41209 60.9181 2.30549 60.8114 2.19888C57.5831 -0.706063 52.594 -0.732714 49.3124 2.11893C46.4042 4.65076 45.6039 8.59509 46.9112 11.8998C47.4714 13.2856 49.2323 13.7121 50.3262 12.6727L51.3934 11.6599L51.4201 11.6333C51.9803 11.047 51.927 10.0875 51.34 9.55452C50.8598 9.10146 50.4062 8.7017 50.006 8.35523L50.9665 7.3958C51.6335 6.72953 52.674 6.72953 53.341 7.3958L54.5149 6.22316C55.6622 5.07718 57.8499 4.67741 58.8104 4.54416C58.9171 4.51751 59.0238 4.57081 59.1039 4.65076C59.1839 4.73072 59.2106 4.83732 59.2106 4.94392C59.0772 5.8767 58.6503 8.08873 57.5297 9.23471L56.3558 10.4074C57.0228 11.0736 57.0228 12.113 56.3558 12.7793L55.3954 13.7387C55.0485 13.3389 54.6483 12.8859 54.1948 12.4062C53.6345 11.8198 52.674 11.7399 52.1137 12.3262L52.0871 12.3529L51.0732 13.4189C50.0327 14.5116 50.4596 16.2705 51.8469 16.8302C55.1552 18.1361 59.1039 17.3366 61.6384 14.4316C64.4932 11.1536 64.4398 6.16986 61.5584 2.94511C61.3716 2.7319 61.2649 2.6253 61.1582 2.51869ZM36.6848 0.570514C31.8824 0.570514 27.9872 4.46154 27.9872 9.2587C27.9872 14.0559 31.8824 17.9469 36.6848 17.9469C41.4872 17.9469 45.3824 14.0559 45.3824 9.2587C45.3824 4.46154 41.4872 0.570514 36.6848 0.570514ZM57.3777 7.40646C57.6631 7.1213 57.6631 6.65757 57.3777 6.37241C57.0922 6.08724 56.628 6.08724 56.3425 6.37241C56.2304 6.48434 56.1637 6.62559 56.1397 6.76951C55.8703 6.74819 55.5928 6.8308 55.3954 7.02802C55.2193 7.20392 55.1206 7.44111 55.1206 7.68896C55.1206 7.93682 55.2193 8.17401 55.3954 8.3499C55.5714 8.5258 55.8062 8.62441 56.057 8.62441C56.3078 8.62441 56.5426 8.5258 56.7187 8.3499C56.8948 8.17401 56.9935 7.93682 56.9935 7.68896C56.9935 7.65965 56.9881 7.633 56.9855 7.60634C57.1295 7.58236 57.2656 7.51573 57.375 7.40646H57.3777Z"
          fill="CurrentColor"
        ></path>
      </svg>

      {/* Hamburger Menu Icon */}
      <a className="header__click" href="/" target="blank">
        <button className="header__buttonThree">Download App</button>
      </a>

      <div
        className={`header__menuIcon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="menuIcon__bar"></span>
        <span className="menuIcon__bar"></span>
        <span className="menuIcon__bar"></span>
      </div>

      {/* Navigation Links */}
      <div className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
        <div className="header__option">
          <span className="header__optionLineOne" id="header__app">
            Home
          </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">App</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Injective SDK</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Refer</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Litepaper</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Economy</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Video Guides</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Metrics</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Moon Drop</span>
        </div>

        <div className="header__option">
          <div className="header__button">
            <a className="header__link" href="/" target="blank">
              <button className="header__buttonOne">INJ Launchpad</button>
            </a>
            <a className="header__link" href="/" target="blank">
              <button className="header__buttonTwo">Download App</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
