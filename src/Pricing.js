import { useState, useEffect } from "react";

function Pricing() {
  const [monthly, setmonthly] = useState(true);
  const [windowwidth, setwindowwidth] = useState();

  useEffect(() => setwindowwidth(window.innerWidth));
  const setimage = () => {
    setmonthly((prev) => !prev);
  };
  return (
    <div>
      <div className="card">
        <div className="img">
          <img
            src={
              windowwidth < 768
                ? "/assets/pricing/mobile/hero.jpg"
                : windowwidth < 1440
                ? "/assets/pricing/tablet/hero.jpg"
                : "/assets/pricing/desktop/hero.jpg"
            }
            alt="create and share"
          ></img>
        </div>
        {/* <span className="border"></span> */}
        <div className="content card-border" style={{ height: "100%" }}>
          <div className="info">
            <h3>PRICING</h3>
            <p>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </div>
      </div>
      <div className="payment">
        <p
          className="monthly"
          style={{
            color: monthly ? "black" : "#959595",
          }}
        >
          Monthly
        </p>
        <img
          onClick={setimage}
          src={
            monthly
              ? "/assets/pricing/mobile/Group 9.png"
              : "/assets/pricing/mobile/Group 9 (1).png"
          }
          alt="switcher"
        ></img>
        <p
          className="yearly"
          style={{
            color: monthly ? "#959595" : "black",
          }}
        >
          Yearly
        </p>
      </div>
      <div className="plans">
        <div className="basic">
          <h3 className="title">Basic</h3>
          <p className="description">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <p className="price">{monthly ? "$ 19.00 " : "$ 190.00 "}</p>
          <span style={{ display: "block" }}>per month</span>
          <button>PICK PLAN</button>
        </div>
        <div className="pro pro-border">
          <h3 className="title">Pro</h3>
          <p className="description">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <p className="price">{monthly ? "$ 39.00 " : "$ 390.00 "}</p>
          <span style={{ display: "block" }}>per month</span>
          <button>PICK PLAN</button>
        </div>
        <div className="business">
          <h3 className="title">Business</h3>
          <p className="description">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <p className="price">{monthly ? "$ 99.00 " : "$ 999.00 "}</p>
          <span style={{ display: "block" }}>per month</span>
          <button>PICK PLAN</button>
        </div>
      </div>
      <div className="features">
        {windowwidth > 768 ? (
          <>
            <h2 className="compare">COMPARE</h2>
            <div className="header">
              <p className="title">The Features</p>
              <div className="subscription">
                <p className="basic">basic</p>
                <p>pro</p>
                <p className="business">business</p>
              </div>
            </div>
          </>
        ) : (
          <p className="title">The Features</p>
        )}

        <span className="line" style={{ marginBottom: "0px" }}></span>
        <div className="list">
          <div className="li">
            <p className="feature-head">UNLIMITED STORY POSTING </p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
              <div className="pl">
                <p className="name">pro</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
          <div className="li">
            <p className="feature-head">UNLIMITED PHOTO UPLOAD </p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
              <div className="pl">
                <p className="name">pro</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
          <div className="li">
            <p className="feature-head">EMBEDDING CUSTOM CONTENT</p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
              </div>
              <div className="pl">
                <p className="name">pro</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
          <div className="li">
            <p className="feature-head">CUSTOMIZE METADATA</p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
              </div>
              <div className="pl">
                <p className="name">pro</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
          <div className="li">
            <p className="feature-head">ADVANCED METRICS</p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
              </div>
              <div className="pl">
                <p className="name">pro</p>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
          <div className="li">
            <p className="feature-head">PHOTO DOWNLOADS</p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
              </div>
              <div className="pl">
                <p className="name">pro</p>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
          <div className="li">
            <p className="feature-head">SEARCH ENGINE INDEXING</p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
              </div>
              <div className="pl">
                <p className="name">pro</p>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
          <div className="li">
            <p className="feature-head">CUSTOM ANALYTICS</p>
            <div className="plan-features">
              <div className="pl">
                <p className="name">basic</p>
              </div>
              <div className="pl">
                <p className="name">pro</p>
              </div>
              <div className="pl">
                <p className="name">business</p>
                <img src="/assets/pricing/desktop/check.svg" alt="check"></img>
              </div>
            </div>
            <span
              className="line"
              style={{
                border: "1px solid #0000003d",
              }}
            ></span>
          </div>
        </div>
      </div>
      <div className="beta">
        <div
          className="beta-info"
          style={{
            backgroundImage: `url('/assets/stories/mobile/calm-waters.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "288px",
            position: "relative",
          }}
        >
          <div
            className="overlay"
            style={{ zIndex: "2", background: "rgba(0, 0, 0, 0.6)" }}
          ></div>
          <div className="info">
            <h1 style={{ margin: "Opx" }}>
              We’re in beta.
              <p>Get your invite today!</p>
            </h1>
            <a
              href="#"
              className="btn-link"
              style={{ justifyContent: "normal" }}
            >
              GET AN ANVITE
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="white" fill-rule="evenodd" stroke="white">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <span
          className="border"
          style={{
            top: "0",
            zIndex: "4",
          }}
        ></span>
      </div>
    </div>
  );
}
export default Pricing;
