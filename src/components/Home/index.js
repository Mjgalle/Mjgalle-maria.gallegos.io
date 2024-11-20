import React from "react";
import welcomeBack from "../../assets/icons/welcome-back.png";
import styled from "styled-components";

const Button = styled.button`
  ${({ theme }) => `
  background-color: ${theme.colors.cambridgeBlue};
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`};
`;

const Home = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <header className="App-header">
        <img
          src={welcomeBack}
          className="welcome-png"
          alt="Welcome icons created by Freepik - Flaticon"
        />
        <p>
          Welcome to my Personal Website :)
          <br></br>
          Please, <Button href="">Enter</Button>
        </p>
      </header>
    </>
  );
};

export default Home;
