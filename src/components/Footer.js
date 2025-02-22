import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import { FaFacebookF, FaInstagram, FaGoogle, FaYoutube } from "react-icons/fa";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  font-size: 1.5rem;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px; /* Pozycjonowanie podkreślenia */
    left: 0;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="https://www.facebook.com/ewa.kucharska.5439"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ewa1989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo("navigation")}>Start</Item>
          <Item onClick={() => scrollTo("o-natanku")}>O&nbsp;Natanku</Item>
          <Item onClick={() => scrollTo("mapa-życiowa")}>
            Mapa&nbsp;życiowa
          </Item>
          <Item onClick={() => scrollTo("foto-gablota")}>
            Foto&nbsp;gablota
          </Item>
          <Item onClick={() => scrollTo("rodzina")}>Rodzina</Item>
          <Item onClick={() => scrollTo("pytania")}>Pytania</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>Radom, 2024 - {new Date().getFullYear()}</span>
        <span>Natanielek</span>
      </Bottom>
    </Section>
  );
};

export default Footer;
