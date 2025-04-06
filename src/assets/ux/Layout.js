// Libraries.
import React from "react";
import styled, { shouldForwardProp } from "styled-components";

// Styled component.
const StyledLayout = styled.div`
  ${({
    $alignItems,
    $backgroundColor,
    $border,
    $borderRadius,
    $bottom,
    $boxShadow,
    $color,
    $cursor,
    $display,
    $flexDirection,
    $flexWrap,
    $fontSize,
    $fontWeight,
    $gap,
    $height,
    $justifyContent,
    $left,
    $letterSpacing,
    $lineHeight,
    $margin,
    $maxHeight,
    $maxWidth,
    $minHeight,
    $minWidth,
    $opacity,
    $overflow,
    $padding,
    $position,
    $right,
    $textAlign,
    $top,
    $width,
    $zIndex,
  }) => `
    ${$alignItems ? `align-items: ${$alignItems};` : ""}
    ${$backgroundColor ? `background-color: ${$backgroundColor};` : ""}
    ${$border ? `border: ${$border};` : ""}
    ${$borderRadius ? `border-radius: ${$borderRadius};` : ""}
    ${$bottom ? `bottom: ${$bottom};` : ""}
    ${$boxShadow ? `box-shadow: ${$boxShadow};` : ""}
    ${$color ? `color: ${$color};` : ""}
    ${$cursor ? `cursor: ${$cursor};` : ""}
    ${$display ? `display: ${$display};` : ""}
    ${$flexDirection ? `flex-direction: ${$flexDirection};` : ""}
    ${$flexWrap ? `flex-wrap: ${$flexWrap};` : ""}
    ${$fontSize ? `font-size: ${$fontSize};` : ""}
    ${$fontWeight ? `font-weight: ${$fontWeight};` : ""}
    ${$gap ? `gap: ${$gap};` : ""}
    ${$height ? `height: ${$height};` : ""}
    ${$justifyContent ? `justify-content: ${$justifyContent};` : ""}
    ${$left ? `left: ${$left};` : ""}
    ${$letterSpacing ? `letter-spacing: ${$letterSpacing};` : ""}
    ${$lineHeight ? `line-height: ${$lineHeight};` : ""}
    ${$margin ? `margin: ${$margin};` : ""}
    ${$maxHeight ? `max-height: ${$maxHeight};` : ""}
    ${$maxWidth ? `max-width: ${$maxWidth};` : ""}
    ${$minHeight ? `min-height: ${$minHeight};` : ""}
    ${$minWidth ? `min-width: ${$minWidth};` : ""}
    ${$opacity ? `opacity: ${$opacity};` : ""}
    ${$overflow ? `overflow: ${$overflow};` : ""}
    ${$padding ? `padding: ${$padding};` : ""}
    ${$position ? `position: ${$position};` : ""}
    ${$right ? `right: ${$right};` : ""}
    ${$textAlign ? `text-align: ${$textAlign};` : ""}
    ${$top ? `top: ${$top};` : ""}
    ${$width ? `width: ${$width};` : ""}
    ${$zIndex ? `z-index: ${$zIndex};` : ""}
  `}
`;

// Public component.
const Layout = ({ children, ...props }) => {
  return <StyledLayout {...props}>{children}</StyledLayout>;
};

export default Layout;
