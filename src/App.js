import React, { Component } from "react";
import Portfolio from "./components/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import NavbarSystem from "./components/Navbar/NavbarSystem";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="md:hidden fixed z-50" >
            <Navbar/>
          </div>
          <div className="hidden md:block fixed z-20" >
            <NavbarSystem/>
          </div>
        </div>
        <Portfolio />
      </div>
    );
  }
}
