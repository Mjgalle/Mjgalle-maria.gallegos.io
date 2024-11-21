import React from "react";
import styled from "styled-components";
import { StyledWrapper } from "../styledComponents";

const StyledArticle = styled.article`
  ${({ theme }) => `
    display: grid;
    gap: 20px;
  `}
`;

const StyledSection = styled.section`
  ${({ theme }) => `
    background-color: ${theme.colors.lavender};
    box-shadow: 0px 2px 5px #0000002b;
    border-radius: 10px;
    padding: 14px 24px;
    text-align: left;
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
  return (
    <StyledWrapper>
      <h1>My Blog!</h1>
      <p>
        I've decided to document all of the things I add to my project in here,
        sort of like a little blog of everything I'm using. From Resources I
        find helpful, to libraries and why I decided to go with them. If you
        have any questions, please feel free to Contact Me! Hope you can find
        these helpful!
      </p>
      <StyledArticle>
        <StyledSection>
          <h2>
            <a
              href="https://reactrouter.com/en/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Router!
            </a>
          </h2>
          <p>
            To achieve my Navigation, along with the different pages, I decided
            to use React Router! Some tips I've learned already is instead of
            importing Browser Router, I needed to use Hash Router. This is
            because <b>GitHub Pages</b> doesn't handle server-side routing, so
            when you try to navigate to a different 'page' using Browser Router,
            it will return a 404 error. Luckily, Chat GPT was able to help me
            figure this out rather quickly!
          </p>
          <p>
            I've used React Router before, but I've never implemented it myself,
            so I also had to re-learn it really quick. Some quick notes about
            how it works are:
          </p>
          <div>
            <h4>1. Route Matching:</h4>
            <p>
              When the URL changes, React Router matches the URL against the
              defined routes.
            </p>
          </div>
          <div>
            <h4>2. Component Rendering:</h4>
            <p>
              React Router renders the component associated with the matching
              route.
            </p>
          </div>
          <div>
            <h4>3. History Management:</h4>
            <p>
              The history API is used to update the browsers history stack,
              allowing users to navigate back and forth.
            </p>
          </div>
        </StyledSection>
        <StyledSection>
          <h2>
            <a
              href="https://styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components!
            </a>
          </h2>
          <p>
            Styled Components are a CSS-in-JS library that allows you to write
            CSS directly in JavaScript to style React components!
          </p>
          <p>
            I use it a lot for work, and honestly couldn't imagine a life
            without it! It allows you to change styling based on different
            variables, and allows you to set up theme variables you can easily
            access in your app, as well as all of your components!
          </p>
        </StyledSection>
        <StyledSection>
          <h2>
            <a
              href="https://coolors.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coolors!
            </a>
          </h2>
          <p>
            This Resource is actually so fun, BUT so hard to use because it is
            so hard to settle on a good color palette. Or at least that is one
            of my biggest challenges. When selecting theme colors you have to
            keep in mind about WCAG Compliance. Just because something looks
            nice, doesn't necessarily mean that it is WCAG Compliant, so it is
            very important to pick colors with good contrast ratios!
          </p>
        </StyledSection>
      </StyledArticle>
    </StyledWrapper>
  );
};

export default Blog;
