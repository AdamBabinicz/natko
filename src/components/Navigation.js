// Navigation.js
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import Modal from "../Modal";
import useModal from "../hooks/useModal";
import img from "../assets/1.jpg";

const Section = styled.section`
  width: 100vw;
  background: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props) =>
      props.click ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.6s ease-in-out;
    flex-direction: column;
    justify-content: center;
    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }

  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)} />
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("start")}>Start</MenuItem>
          <MenuItem onClick={() => scrollTo("o-natanku")}>
            O&nbsp;Natanku
          </MenuItem>
          <MenuItem onClick={() => scrollTo("mapa-życiowa")}>
            Mapa&nbsp;życiowa
          </MenuItem>
          <MenuItem onClick={() => scrollTo("foto-gablota")}>
            Foto&nbsp;gablota
          </MenuItem>
          <MenuItem onClick={() => scrollTo("rodzina")}>Rodzina</MenuItem>
          <MenuItem onClick={() => scrollTo("pytania")}>Pytania</MenuItem>
          <MenuItem>
            <div className="mobile">
              <Button text="Pokaż" onClick={openModal} />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <Button text="Pokaż" onClick={openModal} />
        </div>
      </NavBar>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        header="Natanek i EURO 2024"
        content="Natanielek zerka na telewizor i&nbsp;widzi grających w&nbsp;piłkę zawodników. Później przed domem na trawniku kopie gumową piłkę. Ja chętnie dołączam się do zabawy, ale po pewnym czasie gra przenosi się do&nbsp;garażu, gdzie są różne przedmioty i&nbsp;Natanek chce koniecznie trafiać w&nbsp;nie piłką."
        imgSrc={img}
      />
    </Section>
  );
};

export default Navigation;
