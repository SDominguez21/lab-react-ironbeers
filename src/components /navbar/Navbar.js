import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

 class Navbar extends Component {
  render() {
    return (
     <div> 
     <NavLink to="/"> HOME </NavLink>
     <NavLink to="/listbeers"> ALL BEERS </NavLink>
     {/* <NavLink to="/"> </NavLink>
     <NavLink to="/"> </NavLink> */}
     </div>
    )
  }
}


export default Navbar;











