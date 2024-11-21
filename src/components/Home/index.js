import React from "react";
import welcomeBack from "../../assets/icons/welcome-back.png";
import { StyledWrapper } from "../styledComponents";
import fewdLogo from "../../assets/icons/fewdLOGO.png";

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
      </header>
    </StyledWrapper>
  );
};

export default Home;
