import "./Navbar.css";
import guy_and_coin from "../../assets/guy_and_coin.svg";
import { useHistory } from "react-router-dom";


const Navbar = ({ sidebarOpen, openSidebar }) => {
  const history = useHistory();

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a href="/">Home</a>
        <a className="active_link" href="/">
          My Dashboard
        </a>
        <a href="/" onClick={logout}>
          Log out
        </a>
      </div>
      <div className="navbar__right">
        <a href="/">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="/">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="/!">
          <img width="30" src={guy_and_coin} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
