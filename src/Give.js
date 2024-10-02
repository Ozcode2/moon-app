import "./Give.css";

const Give = () => {
  return (
    <div className="give">
      <div className="give-container">
        <div className="give-title-wrapper">
          <div className="invite-strip-1">
            <h1 className="h-large">
              Give <span className="blue-span">your trades</span>
              <span className="blue-span">
                <br />
              </span>
            </h1>
          </div>
          <div className="invite-strip-2">
            <h1 className="h-large">
              superpowers
              <br />
            </h1>
          </div>
          <div className="give-content">
            <div className="copy-big centred">
              Accelerate your trade to maximum speed, enabled by bots. Input
              your full trade strategy, before the trade even starts. Get Moon
              App now.
            </div>
            <div className="give-download-wrapper">
              <a
                href="/"
                target="_blank"
                className="download-app-button w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d6c802b28e329b903b02ea_Download%20-%20Apple.svg"
                  loading="lazy"
                  alt=""
                ></img>
              </a>
              <a
                href="/"
                target="_blank"
                className="download-app-button w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/64d2bf6c3b1d58eb136f965a/64d6c8027a2a36cb642e3bc8_Download%20-%20Goolge.svg"
                  loading="lazy"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;
