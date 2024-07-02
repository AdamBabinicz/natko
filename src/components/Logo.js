import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;
  text-transform: capitalize;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">nat</Link>
    </LogoText>
  );
};

export default Logo;
