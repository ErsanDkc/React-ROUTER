import { NavLink, Outlet } from "react-router-dom";
import React from "react";


function Layout() {
  return (
    <div>
       
      <nav>
        <ul className="layout">
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : "pink"})} to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : "pink"})} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : "pink"})} to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
  
}

export default Layout;
