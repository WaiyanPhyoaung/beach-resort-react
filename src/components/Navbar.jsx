import React from "react";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" onClick={this.handleToggle}>
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li onClick={this.handleToggle}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms" onClick={this.handleToggle}>
                Rooms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
