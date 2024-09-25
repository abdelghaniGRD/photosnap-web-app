import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropDownVisible, setdropDownVisible] = useState(false);
  const [windowwidth, setWindowwidth] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setWindowwidth(window.innerWidth);

    setloading(true);
  }, [loading, windowwidth]);

  const handleBurgerClick = () => {
    setdropDownVisible((prev) => !prev);
  };

  return loading ? (
    <header>
      <div className="header-container">
        {windowwidth > 768 ? (
          ""
        ) : (
          <div className="logo">
            <a href="/">
              <img src="/assets/shared/desktop/logo.svg" alt="logo"></img>
            </a>
          </div>
        )}

        {windowwidth < 768 ? (
          <div className="burger-icon" onClick={handleBurgerClick}>
            <img
              src={
                dropDownVisible
                  ? "/assets/shared/mobile/close.svg"
                  : "/assets/shared/mobile/menu.svg"
              }
              alt=""
            ></img>
          </div>
        ) : (
          ""
        )}

        {windowwidth > 768 ? (
          <>
            <div className="logo">
              <a href="/">
                <img src="/assets/shared/desktop/logo.svg" alt="logo"></img>
              </a>
            </div>
            <div className="main-menu-large">
              <ul>
                <li onClick={() => setdropDownVisible(false)}>
                  <Link to="/stories">STORIES</Link>
                </li>
                <li onClick={() => setdropDownVisible(false)}>
                  <Link to="/features">FEATURES</Link>
                </li>
                <li onClick={() => setdropDownVisible(false)}>
                  <Link to="/pricing">PRICING</Link>
                </li>
              </ul>
              <div className="invit">
                <button onClick={() => setdropDownVisible(false)}>
                  GET AN INVITE
                </button>
              </div>
            </div>
          </>
        ) : (
          <div
            className="drop-down"
            style={{ display: dropDownVisible ? "block" : "none" }}
          >
            <div className="main-menu">
              <ul>
                <li onClick={() => setdropDownVisible(false)}>
                  <Link to="/stories">STORIES</Link>
                </li>
                <li onClick={() => setdropDownVisible(false)}>
                  <Link to="/features">FEATURES</Link>
                </li>
                <li onClick={() => setdropDownVisible(false)}>
                  <Link to="/pricing">PRICING</Link>
                </li>
              </ul>
              <div className="invit">
                <button onClick={() => setdropDownVisible(false)}>
                  GET AN INVITE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div
        className="drop-down"
        style={{ display: dropDownVisible ? "block" : "none" }}
      >
        <div className="main-menu">
          <ul>
            <li onClick={() => setdropDownVisible(false)}>
              <Link to="/stories">STORIES</Link>
            </li>
            <li onClick={() => setdropDownVisible(false)}>
              <Link to="/features">FEATURES</Link>
            </li>
            <li onClick={() => setdropDownVisible(false)}>
              <Link to="/pricing">PRICING</Link>
            </li>
          </ul>
          <div className="invit">
            <button onClick={() => setdropDownVisible(false)}>
              GET AN INVITE
            </button>
          </div>
        </div>
      </div> */}
    </header>
  ) : (
    <div>Loading ...</div>
  );
};
export default Header;
