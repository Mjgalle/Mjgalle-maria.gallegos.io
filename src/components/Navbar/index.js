import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled.ul`
  ${({ theme }) => `
    color: ${theme.colors.lavender};
    list-style: none;
    display: flex;
    gap: 15px;
  `}
`;

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
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
      </StyledLinks>
    </nav>
  );
};

export default Navbar;
