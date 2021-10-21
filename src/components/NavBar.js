import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyles = styled.div`
  position: static;
  max-width: 90%;
  margin: auto;
  .navBar{
    border-bottom: 1px solid #7c238c;
  }
  ul {
    max-width: 90%;
    li {
     display: inline-flex;
      &:hover {
        color: #7c238c;
      }
    }
    a {
      padding: 1rem 1.5rem;
      color: white;
      outline: none;
      text-decoration: none;
    }
    .active {
      color: #7c238c;
    }

  }
  `;

export default function NavBar() {
    return (
        <NavBarStyles>
        <div className="navBar">
            <ul>
            <li>
                <NavLink to="/AboutUs" >
                ABOUT US
                </NavLink>
            </li>
                
            <li className="noPadding">
                <NavLink to="/ContactUs" >
                CONTACT US
                </NavLink>
            </li>
            </ul>
        </div>
      </NavBarStyles>
    );
}