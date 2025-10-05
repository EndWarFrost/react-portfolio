import "./style.css"

import sun from "./../../images/icons/Sun.svg";
import moon from "./../../images/icons/Moon.svg";

const Navbar = () => {
    return (   <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <a href="index.html" className="logo">
              <b>Freelancer</b> portfolio
            </a>

            <button className="dark-mode-btn ">
              <img className="dark-mode-btn__icon" src={sun} alt="Light mode" />
              <img
                className="dark-mode-btn__icon"
                src={moon}
                alt="Light mode"
              />
            </button>

            <ul className="nav-list">
              <li className="nav-list__item">
                <a
                  href="index.html"
                  className="nav-list__link nav-list__link-active"
                >
                  Projects
                </a>
              </li>
              <li className="nav-list__item">
                <a href="skills.html" className="nav-list__link">
                  Skills
                </a>
              </li>
              <li className="nav-list__item">
                <a href="contacts.html" className="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>);
}
 
export default Navbar;