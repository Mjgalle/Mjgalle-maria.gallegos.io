import styled from "styled-components";
import { animated } from "@react-spring/web";

export const StyledWrapper = styled(animated.article)`
  ${({ theme, $isMobile, $isBlog }) => `
    padding: 20px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
    margin: 0 ${$isBlog ? `5px` : `20px`};
    }
    > h1 {
      margin: 0;
    }
    > p {
      margin-top:10px;
      width: ${$isMobile ? `90%` : `40%`};
    }
  `}
`;
