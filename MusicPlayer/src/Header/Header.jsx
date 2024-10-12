import "./HeaderStyle.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <nav className="music-nav">
        <ul className="music-nav-list">
          <li className="music-nav-item">
            <a href="#" className="music-nav-link">
              Browse
            </a>
          </li>
          <li className="music-nav-item">
            <a href="#" className="music-nav-link">
              My Songs
            </a>
          </li>
          <li className="music-nav-item">
            <a href="#" className="music-nav-link">
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
