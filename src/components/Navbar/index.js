import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled.ul`
  ${({ theme }) => `
    color: ${theme.colors.lavender};
    list-style: none;
    display: flex;
    gap: 15px;
    font-weight: bold;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `}
`;

const Navbar = () => {
  return (
    <nav>
      <StyledLinks>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </StyledLinks>
    </nav>
  );
};

export default Navbar;
