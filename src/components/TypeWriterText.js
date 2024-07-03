// TypeWriterText.js
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import Modal from "../Modal";
import useModal from "../hooks/useModal";
import img from "../assets/2.webp";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: unset;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Title>
        Natanek i jego dzieciństwo
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">Nataniel</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">podarowany</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-3">przez Boga</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>
        Przyroda otaczająca Natanka jest przedmiotem jego zainteresowania,
        szczególnie lubi zdmuchiwać z mniszka lub z&nbsp;mlecza biały puch.
      </SubTitle>
      <ButtonContainer>
        <Button text="Czytaj" link="" onClick={openModal} />
      </ButtonContainer>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        header="Woda - żywiołem Natanka"
        content="Natanielek kocha wodę. Pomijam, że&nbsp;się bardzo lubi kąpać w wanience pod prysznicem, ale szczególnie dba o&nbsp;to, aby jego ręce były czyste. Ponadto wszelkie krany z&nbsp;wodą są miejscem, gdzie Natanielek chętnie przebywa: odkręca i&nbsp;zakręca, łapie wodę w&nbsp;kubki, wiaderka, konewki i&nbsp;wylewa na roślinki, kostkę, a&nbsp;często na swoje ubranie i&nbsp;buty."
        imgSrc={img}
      />
    </>
  );
};

export default TypeWriterText;
