import "./Move.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
const Move = () => {
  // State to track which move-block is expanded
  const [expanded, setExpanded] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="move">
      <div className="move__camera">
        <div className="move__container">
          <div className="move__wrapper">
            <div
              className="move-block"
              id="move-block-1"
              onClick={() => toggleDropdown(1)}
            >
              <div className="move-block-title-wrapper">
                <div className="move-title">Sandwich Trades</div>
                <div className="dropdown-icon">
                  {expanded === 1 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className="move-safe-zone"></div>
              <div className={`bullets-1 ${expanded === 1 ? "show" : ""}`}>
                <div className="bullets-wrapper">
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Select any coin in your wallet</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Approve it for sandwiching others on DEX</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Generate yield in stablecoins or INJ</strong>
                    </div>
                  </div>
                </div>
                <div className="move-video">
                  <img
                    src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3d1f9f6f24c7543de95ac_Moon-ui-blue.svg"
                    loading="lazy"
                    alt=""
                    className="move-mask"
                  ></img>
                  <video className="move-mask__video" autoPlay muted loop>
                    <source
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65c56827fffbd79a6d18a494_Swap-transcode.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="move-block-gradient-r"></div>
              <div className="move-block-gradient-l"></div>
            </div>

            <div
              className="move-block"
              id="move-block-2"
              onClick={() => toggleDropdown(2)}
            >
              <div className="move-block-title-wrapper">
                <div className="move-title" id="move1-title">
                  Snipe Liquidity Pools
                </div>
                <div className="move-title1">
                  Snipe Liquidity
                  <br />
                  Pools
                </div>
                <div className="dropdown-icon">
                  {expanded === 2 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className="move-safe-zone"></div>
              <div className={`bullets-2 ${expanded === 2 ? "show" : ""}`}>
                <div className="bullets-wrapper">
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Choose a custom contract or scan chain</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Verify token contracts with anti-rug</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Snipe liquidity as soon as it's live</strong>
                    </div>
                  </div>
                </div>
                <div className="move-video">
                  <img
                    src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3d1f9f6f24c7543de95ac_Moon-ui-blue.svg"
                    loading="lazy"
                    alt=""
                    className="move-mask"
                  ></img>
                  <video className="move-mask__video" autoPlay muted loop>
                    <source
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65c56827fffbd79a6d18a494_Swap-transcode.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="move-block-gradient-l"></div>
              <div className="move-block-gradient-r"></div>
            </div>

            <div
              className="move-block"
              id="move-block-3"
              onClick={() => toggleDropdown(3)}
            >
              <div className="move-block-title-wrapper">
                <div className="move-title">Snipe Presales</div>
                <div className="dropdown-icon">
                  {expanded === 3 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className="move-safe-zone"></div>
              <div className={`bullets-3 ${expanded === 3 ? "show" : ""}`}>
                <div className="bullets-wrapper">
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Choose a presale to snipe</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Select gas cost and maximum gas</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Bots automatically snipe the sale</strong>
                    </div>
                  </div>
                </div>
                <div className="move-video">
                  <img
                    src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3d1f9f6f24c7543de95ac_Moon-ui-blue.svg"
                    loading="lazy"
                    alt=""
                    className="move-mask"
                  ></img>
                  <video className="move-mask__video" autoPlay muted loop>
                    <source
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65c56827fffbd79a6d18a494_Swap-transcode.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="move-block-gradient-l"></div>
              <div className="move-block-gradient-r"></div>
            </div>

            <div
              className="move-block"
              id="move-block-4"
              onClick={() => toggleDropdown(4)}
            >
              <div className="move-block-title-wrapper">
                <div className="move-title">Limit Orders</div>
                <div className="dropdown-icon">
                  {expanded === 4 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className="move-safe-zone"></div>
              <div className={`bullets-4 ${expanded === 4 ? "show" : ""}`}>
                <div className="bullets-wrapper">
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Choose limit sell or limit buy</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Set take profit or stop loss</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Bot can copytrade followed whales</strong>
                    </div>
                  </div>
                </div>
                <div className="move-video">
                  <img
                    src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3d1f9f6f24c7543de95ac_Moon-ui-blue.svg"
                    loading="lazy"
                    alt=""
                    className="move-mask"
                  ></img>
                  <video className="move-mask__video" autoPlay muted loop>
                    <source
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65c56827fffbd79a6d18a494_Swap-transcode.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="move-block-gradient-l"></div>
              <div className="move-block-gradient-r"></div>
            </div>
            <div
              className="move-block"
              id="move-block-5"
              onClick={() => toggleDropdown(5)}
            >
              <div className="move-block-title-wrapper">
                <div className="move-title" id="move1-title">
                  Spot Trades &amp; Copytrade
                </div>
                <div className="move-title1">
                  Spot Trades
                  <br />
                  &amp; Copytrade
                </div>
                <div className="dropdown-icon">
                  {expanded === 5 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div className="move-safe-zone"></div>
              <div className={`bullets-5 ${expanded === 5 ? "show" : ""}`}>
                <div className="bullets-wrapper">
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>
                        Trade yourself or choose a wallet to copytrade
                      </strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Trades are routed to most efficient DEXes</strong>
                    </div>
                  </div>
                  <div className="move-block-bullet">
                    <img
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3c07fb528b3957598516c_rocket-icon.svg"
                      loading="lazy"
                      alt=""
                      className="rocket-icon"
                    ></img>
                    <div className="copy-small">
                      <strong>Bot can copytrade followed whales</strong>
                    </div>
                  </div>
                </div>
                <div className="move-video">
                  <img
                    src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3d1f9f6f24c7543de95ac_Moon-ui-blue.svg"
                    loading="lazy"
                    alt=""
                    className="move-mask"
                  ></img>
                  <video className="move-mask__video" autoPlay muted loop>
                    <source
                      src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65c56827fffbd79a6d18a494_Swap-transcode.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="move-block-gradient-l"></div>
              <div className="move-block-gradient-r"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Move;
