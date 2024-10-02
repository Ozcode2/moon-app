import "./Chain.css";
import React, { useEffect } from "react";
const Chain = () => {
  useEffect(() => {
    const chainBlocks = document.querySelectorAll(".chain-block");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    chainBlocks.forEach((block) => {
      observer.observe(block);
    });

    // Clean up observer
    return () => {
      chainBlocks.forEach((block) => observer.unobserve(block));
    };
  }, []);

  return (
    <div className="chain">
      <div className="chain-container">
        <div className="chain-title-wrapper">
          <h1 className="h1 centred">
            Be on-chain,
            <br />
            <span className="blue-span">control your</span> assets
          </h1>
        </div>
        <div className="chain-blocks-wrapper-mobile">
          <div
            className="chain-block"
            id="w-node-b808ddbc-4db9-4626-7e42-53c35ee71014-136f966b"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">01</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Built for Speed</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Enjoy no delays with powerful transaction automation.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-ff83d02b-0516-96f8-577e-24c8a420e51d-136f966b"
            className="chain-block _2"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">02</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">Accessible everywhere</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Trade on our mobile (iOS or Android) or web apps.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-cbc9e03c-6ad7-8f73-fe7d-b837d4499b28-136f966b"
            className="chain-block _3"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">03</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Real-time alerts</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Get informed about rapid market swings with a push
                  notification.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-a21ed8e5-b2ab-8aa6-a8b4-5093fd5fe9b7-136f966b"
            className="chain-block _4"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">04</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">End-to-end privacy</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Retain your personal data with no KYC.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_84a5cd12-beca-8030-59a6-4a0c441fa3f5-136f966b"
            className="chain-block _5"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">05</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">Limitless scale</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Automate unlimited wallets and transactions.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_723f0367-081c-99cd-a804-cddf2d361cc4-136f966b"
            className="chain-block _6"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">06</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Bots Made Simple</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Get exclusive MEV bots to compete against expert developers
                  &amp; institutions.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-d35613ed-3f50-f7c5-bdf7-f219da9377e9-136f966b"
            className="chain-block _7"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">07</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">Portfolio tracking</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Get full, up-to-date information on trading performance.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_70a4f416-2db6-81dc-1c26-85205a7d2b9f-136f966b"
            className="chain-block _8"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">08</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Trustless trades</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Keep assets on your own wallet without centralized parties.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chain-blocks-wrapper">
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a8255b9-136f966b"
            className="chain-block"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">01</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Built for Speed</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Enjoy no delays with powerful transaction automation.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a8255c4-136f966b"
            className="chain-block _2"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">02</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">Accessible everywhere</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Trade on our mobile (iOS or Android) or web apps.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a8255cf-136f966b"
            className="chain-block _3"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">03</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Real-time alerts</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Get informed about rapid market swings with a push
                  notification.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a8255da-136f966b"
            className="chain-block _4"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">04</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">End-to-end privacy</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Retain your personal data with no KYC.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a8255e5-136f966b"
            className="chain-block _6"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">06</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Bots Made Simple</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Get exclusive MEV bots to compete against expert developers
                  &amp; institutions.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a8255f0-136f966b"
            className="chain-block _8"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">08</div>
              </div>
              <div className="chain-block-name-wrapper extra-padding">
                <div className="chain-title">Trustless trades</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Keep assets on your own wallet without centralized parties.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a8255fb-136f966b"
            className="chain-block _5"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">05</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">Limitless scale</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Automate unlimited wallets and transactions.
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_87a19b7c-b263-2f0d-5036-76305a825606-136f966b"
            className="chain-block _7"
          >
            <div className="chain-block-wrapper">
              <div className="chain-block-number-wrapper">
                <div className="chain-block-number">07</div>
              </div>
              <div className="chain-block-name-wrapper">
                <div className="chain-title">Portfolio tracking</div>
              </div>
              <div className="chain-block-text-wrapper">
                <div className="small black-centred">
                  Get full, up-to-date information on trading performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chain;
