import React, { useState } from "react";
import welcomeBack from "../../assets/icons/welcome-back.png";
import { StyledWrapper } from "../styledComponents";
import Layout from "../../assets/ux/Layout";
import { useTheme } from "styled-components";
import Typography from "../../assets/ux/Typography";
import SkillsData from "../../assets/data/skills-hobies.json";
import Button from "../../assets/ux/Button";
import styled from "styled-components";

const StyledLayout = styled(Layout)`
  ${({ theme }) => `
    background-color: ${theme.colors.lavender};
    padding: 16px;
    border: 1px solid ${theme.colors.darkLavender};
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    transition: all 10s ease-in-out;
  `}
`;

const StyledButton = styled(Button)`
  ${({ $isExpanded }) => `
    ${
      $isExpanded
        ? `border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;`
        : ``
    }
  `}
`;
const Home = () => {
  const theme = useTheme();
  const [IDToShow, setIDToShow] = useState(false);
  const skillsData = SkillsData;
  const isMobile = window.innerWidth <= 768;

  const handleToggleItem = (id) => {
    setIDToShow((prevId) => (prevId === id ? null : id));
  };

  return (
    <StyledWrapper>
      <Layout>
        <img
          src={welcomeBack}
          className="welcome-png"
          alt="Welcome icons created by Freepik - Flaticon"
        />
        <p>Welcome to my Personal Website :)</p>
        <h2>I'm a Senior Front End Web Developer based out of Columbus Ohio</h2>
        <Layout
          $display="flex"
          $justifyContent="center"
          $width={isMobile ? `90%` : `70%`}
          $margin="20px auto"
        >
          <p>
            This is my personal playground, so please forgive me if anything is
            wonky, looks crazyy, or just simply is a button that leads to
            nowhere :) Enjoy looking around!
          </p>
        </Layout>
        <Layout
          $display="flex"
          $justifyContent="space-between"
          $flexDirection={isMobile ? "column" : "row"}
        >
          <Layout width={isMobile ? `90%` : `40%`}>
            <Typography
              as="h3"
              $fontSize="24px"
              $fontWeight="bold"
              $textDecoration="underline"
              $color={theme.colors.cambridgeBlue}
            >
              More About Me
            </Typography>
            <Typography $textAlign="left" $margin="0 0 40px 0">
              OK SO my name is Maria. I am a Senior Front End Web Developer with
              a passion for creating beautiful and functional user interfaces. I
              have a strong background in HTML, CSS, and JavaScript, and I am
              always looking for new challenges to tackle. I love learning new
              technologies and keeping up with the latest trends in web
              development. In my free time, I enjoy hiking, reading, and
              spending time with my family and friends. I am also a big fan of
              photography and love capturing the beauty of nature through my
              lens. I am excited to share my work with you and hope you enjoy
              exploring my website. If you have any questions or would like to
              connect, please feel free to reach out to me. Thank you for
              visiting my personal website!
            </Typography>
          </Layout>
          <Layout $width={isMobile ? `90%` : `40%`}>
            <Typography
              as="h3"
              $fontSize="24px"
              $fontWeight="bold"
              $textDecoration="underline"
              $margin="0 0 8px 0"
              $color={theme.colors.cambridgeBlue}
            >
              Skills, Talents, Hobbies
            </Typography>
            <Layout
              $display="flex"
              $flexDirection="row"
              $alignItems="flex-start"
              $flexWrap="wrap"
            >
              {skillsData.map((skill, index) => {
                return (
                  <Layout
                    $display="flex"
                    $flexDirection="column"
                    $justifyContent="space-between"
                    $margin="0 8px 8px 0"
                    key={index}
                  >
                    <Layout
                      $display="flex"
                      $justifyContent="space-between"
                      $flexDirection="column"
                      $alignItems="flex-start"
                    >
                      <StyledButton
                        $fontWeight="bold"
                        $fontSize="20px"
                        $textTransform="uppercase"
                        $letterSpacing="0.1em"
                        $textDecoration="underline"
                        $type="primary"
                        $isExpanded={IDToShow === skill.id}
                        onClick={() => handleToggleItem(skill.id)}
                      >
                        {skill.name}
                      </StyledButton>
                    </Layout>
                    {IDToShow === skill.id ? (
                      <StyledLayout className="content-wrapper" theme={theme}>
                        <Typography as="p" $color={theme.colors.darkGrey}>
                          Level: {skill.level}
                        </Typography>
                        <Typography as="p" $color={theme.colors.darkGrey}>
                          {skill.description}
                        </Typography>
                      </StyledLayout>
                    ) : null}
                  </Layout>
                );
              })}
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </StyledWrapper>
  );
};

export default Home;
