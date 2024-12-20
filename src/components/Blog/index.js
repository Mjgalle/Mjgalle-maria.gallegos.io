import React from "react";
import styled from "styled-components";
import { StyledWrapper } from "../styledComponents";
import BlogTopics from "../../assets/data/blog-topics.json";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import ScrollToHashElement from "../ScrollToHashEnhancement";
import { useSpring } from "@react-spring/web";

const StyledArticle = styled.article`
  ${({ $isMobile }) => `
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px ${$isMobile ? `20px` : `50px`};
${$isMobile && `display:flex; flex-direction: column;`};
  `}
`;

const StyledSection = styled.section`
  ${({ theme }) => `
    background-color: ${theme.colors.lavender};
    box-shadow: 0px 2px 5px #0000002b;
    border-radius: 10px;
    padding: 14px 24px;
    text-align: left;
    h3 {
    margin-bottom: 0;
    }
    h4, p {
    margin: 0 ;
    }
    div {
    margin: 10px 0;
    }
    h2 {
      margin: 0 0 8px 0;
    }
  `}
`;

const Blog = () => {
  const { cards, description, title, buttons } = BlogTopics;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const styles = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 14 }, // Optional config for the spring's behavior
  });

  return (
    <StyledWrapper $isMobile={isMobile} style={styles} $isBlog>
      <ScrollToHashElement />
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {buttons.map((button) => (
          <Link key={button.name} to={button.url}>
            {button.name}
          </Link>
        ))}
      </div>
      <StyledArticle $isMobile={isMobile}>
        {cards.map((card) => (
          <StyledSection key={card.id}>
            <h2 id={card.id}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                {card.title}
              </a>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: card.description }} />
          </StyledSection>
        ))}
      </StyledArticle>
    </StyledWrapper>
  );
};

export default Blog;
