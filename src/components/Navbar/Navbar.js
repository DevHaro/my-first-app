import React, {  Component } from 'react';
import './Navbar.css'

// Componentes
import { Items } from "./NavbarItems"

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon">

        </div>
        <ul>
          {Items.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.title} href={item.title}>{item.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;