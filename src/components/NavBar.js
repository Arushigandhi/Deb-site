import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyles = styled.div`
  position: static;
  width: 100%;
  padding: 1rem 0;
  margin: auto;
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    li {
      display: inline-flex;
      margin: auto;
      &:hover {
        border-bottom: 1.5px solid black;
      }
    }
    a {
      font-family: 'RobotoMono Regular';
      font-weight: 400;
      padding: 1rem 1.5rem;
      font-size: 1.2rem;
      color: black;
      outline: none;
      text-decoration: none;
    }
    .active {
      color: black;
    }
    .dot {
      height: 100px;
      width: 100px;
      background-color: none;
      border: 2px solid black;
      border-radius: 50%;
      display: inline-block;
    }
  }
  `;

export default function NavBar() {
    return (
        <NavBarStyles>
        <div>
            <ul>
        
            <li>
                <NavLink to="/AboutUs" >
                About Us
                </NavLink>
            </li>
            
            <span class="dot"></span>
           
            <li>
                <NavLink to="/ContactUs" >
                Contact Us
                </NavLink>
            </li>

            </ul>
        </div>
      </NavBarStyles>
    );
}