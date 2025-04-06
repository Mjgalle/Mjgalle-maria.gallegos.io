import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LightBulb from "../../assets/icons/lightbulb-on.png";
import Bulb from "../../assets/icons/bulb.png";
import LetterM from "../../assets/icons/letter-m.png";
import LetterG from "../../assets/icons/letter-g.png";
import { useMediaQuery } from "../../assets/hooks/useMediaQuery";
import { animated, useSpring } from "@react-spring/web";

const StyledMobileMenu = styled(animated.div)`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  img {
    width: 40px;
  }
  > span {
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 2px;
    background-color: #bada55;
  }
`;

const StyledThemeIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: 30px;
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
    display: ${$isMobile ? `none` : `flex`};
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
  const [theme, setTheme] = useState("light");

  const styles = useSpring({
    transform: hovered ? "scale(0.9)" : "scale(1.1)", // Shrink on hover, grow back on leave
    config: { tension: 300, friction: 10 }, // Config for bouncy effect
  });

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleOnClick = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark-mode");
  };

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
      <StyledThemeIcon>
        <img
          onClick={() => handleOnClick()}
          src={theme === "light" ? LightBulb : Bulb}
          alt="Theme Icon"
        />
      </StyledThemeIcon>
      <StyledMobileMenu
        style={styles}
        $isMobile={isMobile}
        onMouseEnter={handleMouseEnter} // For desktop hover
        onMouseLeave={handleMouseLeave} // For desktop hover
        onTouchStart={handleMouseEnter} // For mobile touch start
        onTouchEnd={handleMouseLeave} // For mobile touch end
        onClick={() => {
          alert("Mobile menu clicked!"); // Add your mobile menu logic here
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </StyledMobileMenu>
    </StyledNav>
  );
};

export default Navbar;
