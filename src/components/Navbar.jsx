import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Menuitems } from "./Menuitems";

export class Navbar extends Component {
  state = {clicked: false};
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return (
      <div className="NavbarItems">
        <h1 className="navbar-logo"><a href="/">Lets Travel</a></h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                  </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
