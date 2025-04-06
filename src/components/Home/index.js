import React from "react";
import welcomeBack from "../../assets/icons/welcome-back.png";
import { StyledWrapper } from "../styledComponents";
import Layout from "../../assets/ux/Layout";

const Home = () => {
  return (
    <StyledWrapper>
      <header className="App-header">
        <img
          src={welcomeBack}
          className="welcome-png"
          alt="Welcome icons created by Freepik - Flaticon"
        />
        <p>Welcome to my Personal Website :)</p>
        <h2>I'm a Senior Front End Web Developer based out of Columbus Ohio</h2>
        <Layout
          display="flex"
          justifyContent="center"
          as="div"
          width="70%"
          margin="0 auto"
        >
          <p>
            This is my personal playground, so please forgive me if anything is
            wonky, looks crazyy, or just simply is a button that leads to
            nowhere :) Enjoy looking around!
          </p>
        </Layout>
        {/* <div>
          <AnimationDots></AnimationDots>
        </div>
        <div>
          <AnimationDots></AnimationDots>
        </div>
        <div>
          <AnimationDots></AnimationDots>
        </div>
        <div>
          <AnimationDots></AnimationDots>
        </div>*/}
      </header>
    </StyledWrapper>
  );
};

export default Home;
