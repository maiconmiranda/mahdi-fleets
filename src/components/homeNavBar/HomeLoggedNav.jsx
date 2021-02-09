import React from "react";
import "./HomeNavStyle.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import {useHistory} from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import { Nav, NavLink, NavLinks, Logo } from "./styles/App";

export function HomeNavBar() {
  const history = useHistory()


  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/")
  }


  return (
    <Navbar collapseOnSelect expand="md" py-5 className="navbar-custom">
      <Navbar.Brand href="#home">
        <img width="344" height="84" src={logo} alt="avatar" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/" className="nav_link" activeClassName="underline">
            Home
          </NavLink>
          <NavLink to="/how-it-works" className="nav_link">
            How It Works
          </NavLink>
          <NavLink to="/" className="nav_link" onClick={logout}>
            Log Out
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
