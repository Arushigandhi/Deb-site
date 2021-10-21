import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BookNavStyles = styled.div`
  position: static;
  max-width: 90%;
  margin: auto;
  .navBar{
    border-bottom: 1px solid #7c238c;
    display: flex;
    justify-content: center;
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
      list-style:none;
      outline: none;
      text-decoration: none;
    }
    .active {
      color: #7c238c;
    }

  }
  `;

export default function BookNav() {
    return (
        <BookNavStyles>
        <div className="navBar">
            <ul>
            <li>
            <NavLink to="/Intro" >
            Introduction to Debating
            </NavLink>
            </li>
            <li>
            <NavLink to="/SpeakerRoles" >
            Know your Speaker Roles
            </NavLink>
            </li>
            <li>
            <NavLink to="/PrepTime" >
            Structure your Prep Time
            </NavLink>
            </li>
            <li>
            <NavLink to="/Themes" >
            Navigating Different Themes
            </NavLink>
            </li>     
            </ul>
        </div>
      </BookNavStyles>
    );
}