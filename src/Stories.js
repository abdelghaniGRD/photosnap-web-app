import { useState, useEffect } from "react";

function Stories() {
  const [windowwidth, setwindowwidth] = useState();
  useEffect(() => setwindowwidth(window.innerWidth));
  return (
    <main>
      <div className="stories">
        <div
          className="story"
          style={{
            pointerEvents: "none",
            backgroundImage:
              windowwidth < 768
                ? `url('/assets/stories/tablet/moon-of-appalacia.jpg')`
                : `url('/assets/stories/desktop/moon-of-appalacia.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {windowwidth > 768 ? (
            ""
          ) : (
            <div className="img">
              <img
                src="/assets/stories/mobile/moon-of-appalacia.jpg"
                alt="create and share"
              ></img>
              <span className="border"></span>
            </div>
          )}

          <div className="content">
            <div className="info">
              <p>LAST MONTH’S FEATURED STORY</p>
              <h3>HAZY FULL MOON OF APPALACHIA</h3>
              <div className="date">
                <p>March 2nd 2020</p>
                <span>by John Appleseed</span>
              </div>
              <p>
                The dissected plateau area, while not actually made up of
                geological mountains, is popularly called "mountains,"
                especially in eastern Kentucky and West Virginia, and while the
                ridges are not high, the terrain is extremely rugged.
              </p>
              <div className="get-invite">
                <a href="#" className="btn-link">
                  GET AN INVITE
                  <img src="/assets/shared/desktop/arrow.svg" alt="arrow"></img>
                </a>
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
              <p>April 7th 2020</p>
              <h3>The Mountains</h3>
              <p>by John Appleseed</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
              <p>April 7th 2020</p>
              <h3>Sunset Cityscapes</h3>
              <p>by Benjamin Cruz</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
              <p>April 7th 2020</p>
              <h3>18 Days Voyage</h3>
              <p>by Alexei Borodin</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
              <p>April 7th 2020</p>
              <h3>Architecturals</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/world-tour.jpg')`
                  : `url('/assets/stories/mobile/world-tour.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Architecturals</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/unforeseen-corners.jpg')`
                  : `url('/assets/stories/mobile/unforeseen-corners.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Architecturals</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/king-on-africa.jpg')`
                  : `url('/assets/stories/mobile/king-on-africa.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Architecturals</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/trip-to-nowhere.jpg')`
                  : `url('/assets/stories/mobile/trip-to-nowhere.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Architecturals</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/rage-of-the-sea.jpg')`
                  : `url('/assets/stories/mobile/rage-of-the-sea.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Rage Of The Sea</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/running-free.jpg')`
                  : `url('/assets/stories/mobile/running-free.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Running Free</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/behind-the-waves.jpg')`
                  : `url('/assets/stories/mobile/behind-the-waves.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Behind The Waves</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/calm-waters.jpg')`
                  : `url('/assets/stories/mobile/calm-waters.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Calm Waters</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/milky-way.jpg')`
                  : `url('/assets/stories/mobile/milky-way.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>The Milky Way</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/dark-forest.jpg')`
                  : `url('/assets/stories/mobile/dark-forest.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Night At The Dark Forest</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/somwarpet.jpg')`
                  : `url('/assets/stories/mobile/somwarpet.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>Somewarpest's beauty</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
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
                  ? `url('/assets/stories/desktop/land-of-dreams.jpg')`
                  : `url('/assets/stories/mobile/land-of-dreams.jpg')`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay"></div>
            <div className="info">
              <p>April 7th 2020</p>
              <h3>land-of-dreams.jpg</h3>
              <p>by Samantha Brooke</p>
              <span className="boder"></span>
              <div className="read-story ">
                <a href="#" className="btn-link">
                  READ STORY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
                    <g fill="white" fill-rule="evenodd" stroke="white">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Stories;
