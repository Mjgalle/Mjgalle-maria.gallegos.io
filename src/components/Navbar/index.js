import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LetterM from "../../assets/icons/letter-m.png";
import LetterG from "../../assets/icons/letter-g.png";
import Menu from "../../assets/icons/menu-bar.png";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { animated, useSpring } from "@react-spring/web";

const StyledMobileMenu = styled(animated.div)`
  position: absolute;
  top: 10px;
  right: 10px;
  img {
    width: 40px;
  }
`;

const StyledNav = styled.nav`
  ${({ $isMobile }) => `
    position: relative;
    margin: 20px;
  `}
`;

const StyledImg = styled.div`
  img {
    width: 40px;
  }
  position: absolute;
  top: 10px;
  left: 10px;
`;

const StyledLinks = styled.ul`
  ${({ theme, $isMobile }) => `
    color: ${theme.colors.lavender};
    list-style: none;
    display: ${$isMobile ? `none` : `block`};
    gap: 15px;
    font-weight: bold;
    padding: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  `}
`;

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [hovered, setHovered] = useState(false);

  const styles = useSpring({
    transform: hovered ? "scale(0.9)" : "scale(1.1)", // Shrink on hover, grow back on leave
    config: { tension: 300, friction: 10 }, // Config for bouncy effect
  });

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <StyledNav>
      <StyledImg>
        <img src={LetterM} alt="M" />
        <img src={LetterG} alt="G" />
      </StyledImg>
      <StyledLinks $isMobile={isMobile}>
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
      <StyledMobileMenu
        style={styles}
        $isMobile={isMobile}
        onMouseEnter={handleMouseEnter} // For desktop hover
        onMouseLeave={handleMouseLeave} // For desktop hover
        onTouchStart={handleMouseEnter} // For mobile touch start
        onTouchEnd={handleMouseLeave} // For mobile touch end
      >
        <img src={Menu} alt="Menu" />
      </StyledMobileMenu>
    </StyledNav>
  );
};

export default Navbar;
