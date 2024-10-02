import "./Scroll.css";
import { useEffect, useRef } from "react";

const Scroll = () => {
  const scrollBlocks = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-focus");

            scrollBlocks.current.forEach((block) => {
              if (block !== entry.target) {
                block.classList.remove("in-focus");
              }
            });
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    scrollBlocks.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => {
      scrollBlocks.current.forEach((block) => {
        if (block) observer.unobserve(block);
      });
    };
  }, []);

  return (
    <div className="scroll">
      <div className="scroll__camera">
        <div className="scroll__container">
          <div className="scroll__wrapper">
            <div
              className="scroll-block"
              id="scroll-block-1"
              ref={(el) => (scrollBlocks.current[0] = el)}
            >
              <div className="scroll-block-title-wrapper">
                <div className="scroll-title">Sandwich Trades</div>
              </div>
              <div className="scroll-safe-zone"></div>
              <div className="bullets-1">
                <div className="bullets-wrapper">
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
              </div>
              <div className="scroll-block-gradient-r"></div>
              <div className="scroll-block-gradient-l"></div>
            </div>

            <div
              className="scroll-block"
              id="scroll-block-2"
              ref={(el) => (scrollBlocks.current[1] = el)}
            >
              <div className="scroll-block-title-wrapper">
                <div className="scroll-title">Snipe Liquidity Pools</div>
              </div>
              <div className="scroll-safe-zone"></div>
              <div className="bullets-2">
                <div className="bullets-wrapper">
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
              </div>
              <div className="scroll-block-gradient-l"></div>
              <div className="scroll-block-gradient-r"></div>
            </div>

            <div
              className="scroll-block"
              id="scroll-block-3"
              ref={(el) => (scrollBlocks.current[2] = el)}
            >
              <div className="scroll-block-title-wrapper">
                <div className="scroll-title">Snipe Presales</div>
              </div>
              <div className="scroll-safe-zone"></div>
              <div className="bullets-3">
                <div className="bullets-wrapper">
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
              </div>
              <div className="scroll-block-gradient-l"></div>
              <div className="scroll-block-gradient-r"></div>
            </div>

            <div
              className="scroll-block"
              id="scroll-block-4"
              ref={(el) => (scrollBlocks.current[3] = el)}
            >
              <div className="scroll-block-title-wrapper">
                <div className="scroll-title">Limit Orders</div>
              </div>
              <div className="scroll-safe-zone"></div>
              <div className="bullets-4">
                <div className="bullets-wrapper">
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
              </div>
              <div className="scroll-block-gradient-l"></div>
              <div className="scroll-block-gradient-r"></div>
            </div>
            <div
              className="scroll-block"
              id="scroll-block-5"
              ref={(el) => (scrollBlocks.current[4] = el)}
            >
              <div className="scroll-block-title-wrapper">
                <div className="scroll-title">Spot Trades &amp; Copytrade</div>
              </div>
              <div className="scroll-safe-zone"></div>
              <div className="bullets-5">
                <div className="bullets-wrapper">
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
                  <div className="scroll-block-bullet">
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
              </div>
              <div className="scroll-block-gradient-l"></div>
              <div className="scroll-block-gradient-r"></div>
            </div>
          </div>
        </div>
      </div>
      {/* {from here} */}
      <div className="scroll-video">
        <img
          src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d3d1f9f6f24c7543de95ac_Moon-ui-blue.svg"
          loading="lazy"
          alt=""
          className="scroll-mask"
        ></img>
        <video className="scroll-mask__video" autoPlay muted loop>
          <source
            src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/65c56827fffbd79a6d18a494_Swap-transcode.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Scroll;
