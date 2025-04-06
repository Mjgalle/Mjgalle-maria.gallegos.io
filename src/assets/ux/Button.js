import styled, { css } from "styled-components";
import theme from "../theme";

const buttonStyles = {
  primary: css`
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor || theme.colors.darkLavender};
    color: ${({ $color }) => $color || "#fff"};
    border: ${({ $border }) => $border || "none"};
    &:hover {
      background-color: ${({ $hoverBackground }) =>
        $hoverBackground || theme.colors.powderBlue};
    }
    &:active {
      background-color: ${({ $activeBackground }) =>
        $activeBackground || "#004085"};
    }
  `,
  secondary: css`
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor || "#f8f9fa"};
    color: ${({ $color }) => $color || "#495057"};
    border: ${({ $border }) => $border || "1px solid #ced4da"};
    &:hover {
      background-color: ${({ $hoverBackground }) =>
        $hoverBackground || "#e2e6ea"};
    }
    &:active {
      background-color: ${({ $activeBackground }) =>
        $activeBackground || "#dae0e5"};
    }
  `,
  tertiary: css`
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor || "transparent"};
    color: ${({ $color }) => $color || "#007bff"};
    border: ${({ $border }) => $border || "none"};
    &:hover {
      color: ${({ $hoverColor }) => $hoverColor || "#0056b3"};
    }
    &:active {
      color: ${({ $activeColor }) => $activeColor || "#004085"};
    }
  `,
};

const StyledButton = styled.button`
  padding: ${({ $padding }) => $padding || "10px 16px"};
  margin: ${({ $margin }) => $margin || "0"};
  font-family: ${({ $fontFamily }) => $fontFamily || "inherit"};
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "500"};
  font-style: ${({ $fontStyle }) => $fontStyle || "normal"};
  text-transform: ${({ $textTransform }) => $textTransform || "none"};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "normal"};
  line-height: ${({ $lineHeight }) => $lineHeight || "1.5"};
  text-align: ${({ $textAlign }) => $textAlign || "center"};

  border-radius: ${({ $borderRadius }) => $borderRadius || "4px"};
  box-shadow: ${({ $boxShadow }) => $boxShadow || "none"};

  display: ${({ $display }) => $display || "inline-block"};
  width: ${({ $width }) => $width || "auto"};
  max-width: ${({ $maxWidth }) => $maxWidth || "100%"};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};
  transition: ${({ $transition }) => $transition || "all 0.2s ease-in-out"};

  ${({ $type }) =>
    buttonStyles[$type || "primary"]} /* Apply styles based on type */

  ${({ $hoverBackground }) =>
    $hoverBackground &&
    `
    &:hover {
      background-color: ${$hoverBackground};
    }
  `}

  ${({ $hoverColor }) =>
    $hoverColor &&
    `
    &:hover {
      color: ${$hoverColor};
    }
  `}

  ${({ $focusBorderColor }) =>
    $focusBorderColor &&
    `
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${$focusBorderColor};
    }
  `}

  ${({ $activeBackground }) =>
    $activeBackground &&
    `
    &:active {
      background-color: ${$activeBackground};
    }
  `}

  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.6;
    pointer-events: none;
  `}
`;

const Button = ({ type = "primary", children, ...rest }) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
