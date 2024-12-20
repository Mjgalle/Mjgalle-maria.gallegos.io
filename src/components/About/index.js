import React from "react";
import { StyledWrapper } from "../styledComponents";
import { useMediaQuery } from "../hooks/useMediaQuery";

const About = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <StyledWrapper $isMobile={isMobile}>
      <h1>About ME</h1>
      <p>
        Hi, my name is Maria J Gallegos Vallejo, and I am a Front End Web
        Developer at a retail brand!
      </p>
    </StyledWrapper>
  );
};

export default About;
