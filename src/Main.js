import { useEffect, useState } from "react";

function Main() {
  const [windowwidth, setWindowwidth] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setWindowwidth(window.innerWidth);
    setloading(true);
  }, []);
  return loading ? (
    <main>
      <div className="menu-cards">
        <div className="card">
          <div className="img">
            <img
              src={
                windowwidth < 768
                  ? "/assets/home/mobile/create-and-share.jpg"
                  : windowwidth <= 1440
                  ? "/assets/home/tablet/create-and-share.jpg"
                  : "/assets/home/desktop/create-and-share.jpg"
              }
              alt="create and share"
            ></img>
          </div>
          <div className="content card-border">
            <div className="info">
              <h3>CREATE AND SHARE YOUR PHOTO STORIES</h3>
              <p>
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <div className="get-invite">
                <a href="#">
                  GET AN INVITE
                  <img src="/assets/shared/desktop/arrow.svg" alt="arrow"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            // height: "600px",
          }}
        >
          <div className="img">
            <img
              src={
                windowwidth < 768
                  ? "/assets/home/mobile/beautiful-stories.jpg"
                  : windowwidth <= 1440
                  ? "/assets/home/tablet/beautiful-stories.jpg"
                  : "/assets/home/desktop/beautiful-stories.jpg"
              }
              alt="create and share"
            ></img>
          </div>
          <div className="content" style={{ backgroundColor: "white" }}>
            <div
              className="info"
              style={{ marginRight: windowwidth > 1440 ? "163px" : "" }}
            >
              <h3 style={{ color: "black" }}>BEAUTIFUL STORIES EVERY TIME</h3>
              <p>
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
              <div className="get-invite">
                <a href="#" style={{ color: "black" }}>
                  VIEW THE STORIES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
                    <g fill="black" fill-rule="evenodd" stroke="black">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            //  height: "600px"
            backgroundColor: "white",
          }}
        >
          <div className="img">
            <img
              src={
                windowwidth < 768
                  ? "/assets/home/mobile/designed-for-everyone.jpg"
                  : windowwidth <= 1440
                  ? "/assets/home/tablet/designed-for-everyone.jpg"
                  : "/assets/home/desktop/designed-for-everyone.jpg"
              }
              alt="create and share"
            ></img>
          </div>
          <div className="content" style={{ backgroundColor: "white" }}>
            <div className="info">
              <h3 style={{ color: "black" }}>DESIGNED FOR EVERYONE</h3>
              <p>
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>
              <div className="get-invite">
                <a href="#" style={{ color: "black" }}>
                  VIEW THE STORIES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
                    <g fill="black" fill-rule="evenodd" stroke="black">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="short-stories">
        <div
          className="story"
          style={{
            backgroundImage:
              windowwidth > 768
                ? `url('/assets/stories/desktop/mountains.jpg')`
                : `url('/assets/stories/mobile/mountains.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay"></div>
          <div className="info">
            <h3>The Mountains</h3>
            <p>by John Appleseed</p>
            <span className="boder"></span>
            <div className="read-story ">
              <a href="#" className="btn-link">
                READ STORY
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="white" fill-rule="evenodd" stroke="white">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="story"
          style={{
            backgroundImage:
              windowwidth > 768
                ? `url('/assets/stories/desktop/cityscapes.jpg')`
                : `url('/assets/stories/mobile/cityscapes.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay"></div>
          <div className="info">
            <h3>Sunset Cityscapes</h3>
            <p>by Benjamin Cruz</p>
            <span className="boder"></span>
            <div className="read-story ">
              <a href="#" className="btn-link">
                READ STORY
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="white" fill-rule="evenodd" stroke="white">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="story"
          style={{
            backgroundImage:
              windowwidth > 768
                ? `url('/assets/stories/desktop/18-days-voyage.jpg')`
                : `url('/assets/stories/mobile/18-days-voyage.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay"></div>
          <div className="info">
            <h3>18 Days Voyage</h3>
            <p>by Alexei Borodin</p>
            <span className="boder"></span>
            <div className="read-story ">
              <a href="#" className="btn-link">
                READ STORY
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="white" fill-rule="evenodd" stroke="white">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="story"
          style={{
            backgroundImage:
              windowwidth > 768
                ? `url('/assets/stories/desktop/architecturals.jpg')`
                : `url('/assets/stories/mobile/architecturals.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay"></div>
          <div className="info">
            <h3>Architecturals</h3>
            <p>by Samantha Brooke</p>
            <span className="boder"></span>
            <div className="read-story ">
              <a href="#" className="btn-link">
                READ STORY
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
            <img src="/assets/features/mobile/Shape.png" alt="responsive"></img>
          </div>
          <div className="info">
            <h3>Available to Embed</h3>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div>Loading ...</div>
  );
}
export default Main;
