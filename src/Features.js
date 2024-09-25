import { useState, useEffect } from "react";

function Features() {
  const [windowwidth, setwindowwidth] = useState();
  useEffect(() => setwindowwidth(window.innerWidth));
  return (
    <div>
      <div className="card">
        <div className="img">
          <img
            src={
              windowwidth < 768
                ? "/assets/features/mobile/hero.jpg"
                : windowwidth < 1440
                ? "/assets/features/tablet/hero.jpg"
                : "/assets/features/desktop/hero.jpg"
            }
            alt="create and share"
          ></img>
        </div>
        <span className="border-features"></span>
        <div className="content card-border" style={{ height: "100%" }}>
          <div className="info">
            <h3>FEATURES</h3>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
      </div>
      <div className="short-features">
        <div className="feature">
          <div>
            <img
              src="/assets/features/mobile/001-responsive.png"
              alt="responsive"
            ></img>
          </div>
          <div className="info">
            <h3>100% Responsive</h3>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>
        <div className="feature">
          <div>
            <img src="/assets/features/mobile/Shape.png" alt="responsive"></img>
          </div>
          <div className="info">
            <h3>No Photo Upload Limit</h3>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
        </div>
        <div className="feature">
          <div>
            <img
              src="/assets/features/desktop/embed.svg"
              alt="responsive"
            ></img>
          </div>
          <div className="info">
            <h3>Available to Embed</h3>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
        <div className="feature">
          <div>
            <img
              src="/assets/features/desktop/custom-domain.svg"
              alt="responsive"
            ></img>
          </div>
          <div className="info">
            <h3>Custom Domain</h3>
            <p>
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </div>
        </div>
        <div className="feature">
          <div>
            <img
              src="/assets/features/desktop/boost-exposure.svg"
              alt="responsive"
            ></img>
          </div>
          <div className="info">
            <h3>Boost Your Exposure</h3>
            <p>
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </div>
        </div>
        <div className="feature">
          <div>
            <img
              src="/assets/features/desktop/drag-drop.svg"
              alt="responsive"
            ></img>
          </div>
          <div className="info">
            <h3>Drag And Drop Image</h3>
            <p>
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </div>
        </div>
      </div>
      <div className="beta">
        <div
          className="beta-info"
          style={{
            backgroundImage: `url('/assets/stories/desktop/calm-waters.jpg')`,
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
      </div>
    </div>
  );
}

export default Features;
