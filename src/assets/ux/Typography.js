import styled from "styled-components";

const StyledText = styled.p`
  color: ${({ $color }) => $color || "#000"};
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  font-style: ${({ $fontStyle }) => $fontStyle || "normal"};
  text-transform: ${({ $textTransform }) => $textTransform || "none"};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || "normal"};
  word-spacing: ${({ $wordSpacing }) => $wordSpacing || "normal"};
  line-height: ${({ $lineHeight }) => $lineHeight || "1.5"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  text-decoration: ${({ $textDecoration }) => $textDecoration || "none"};
  text-shadow: ${({ $textShadow }) => $textShadow || "none"};

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  padding: ${({ $padding }) => $padding || "0"};
  margin: ${({ $margin }) => $margin || "0"};
  border: ${({ $border }) => $border || "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "0"};
  box-shadow: ${({ $boxShadow }) => $boxShadow || "none"};

  display: ${({ $display }) => $display || "block"};
  width: ${({ $width }) => $width || "auto"};
  max-width: ${({ $maxWidth }) => $maxWidth || "none"};
  overflow: ${({ $overflow }) => $overflow || "visible"};
  text-overflow: ${({ $textOverflow }) => $textOverflow || "clip"};
  white-space: ${({ $whiteSpace }) => $whiteSpace || "normal"};

  writing-mode: ${({ $writingMode }) => $writingMode || "horizontal-tb"};
  direction: ${({ $direction }) => $direction || "ltr"};
  opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 1)};
  mix-blend-mode: ${({ $mixBlendMode }) => $mixBlendMode || "normal"};
  filter: ${({ $filter }) => $filter || "none"};
  transform: ${({ $transform }) => $transform || "none"};
`;

const Text = ({ as = "p", children, ...rest }) => {
  return (
    <StyledText as={as} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
