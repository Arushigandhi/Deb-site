import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyles = styled.div`
  position: static;
  width: 100%;
  .solid {
    border: 0.5px solid black;
  }
  ul {
    width: 100%;
    li {
     display: inline-flex;
      &:hover {
        color: #7c238c;
      }
    }
    a {
      font-family: 'RobotoMono Regular';
      font-weight: 400;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      color: black;
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
        <div>
            <ul>
        
            <li>
                <NavLink to="/AboutUs" >
                ABOUT US
                </NavLink>
            </li>
                
            <li>
                <NavLink to="/ContactUs" >
                CONTACT US
                </NavLink>
            </li>

            </ul>
            <hr class="solid"/>
        </div>
      </NavBarStyles>
    );
}