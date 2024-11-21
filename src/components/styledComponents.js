import styled from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => `
    padding: 20px;
    h1 {
      margin: 0;
    }
    p {
      margin-top:10px;
    }
  `}
`;
