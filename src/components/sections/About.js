import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import { dark } from "../../styles/Themes";
import Modal from "../../Modal";
import useModal from "../../hooks/useModal";
import img from "../../assets/27.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.text};
  /* color: ${(props) => props.theme.body}; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
    /* padding-top: 2rem; */
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: unset;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
  text-transform: unset;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  line-height: 1.7rem;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 400;
  text-transform: unset;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  line-height: 1.5rem;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxm};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  align-self: flex-start;
  margin: 1rem auto;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [click, setClick] = useState(false);

  return (
    <Section id="o-natanku">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>4 pory roku z&nbsp;Natankiem</Title>
          <SubText>
            Natanielek spędza na powietrzu bardzo dużo czasu. Różne pory roku
            decydują o&nbsp;tym w co jest ubrany i&nbsp;czym się zajmuje poza
            domem. Natanek lubi bawić się w&nbsp;piaskownicy i&nbsp;jeździć na
            rowerku oraz&nbsp;traktorku. Chętnie też uczestniczy w&nbsp;różnych
            pracach związanych z&nbsp;pielęgnacją terenu wokół domu: podlewa
            roślinki, zamiata, a&nbsp;zimą odśnieża (co można zobaczyć na
            załączonych obrazkach).
          </SubText>
          <SubTextLight>
            Jest bystrym obserwatorem i&nbsp;reaguje na takie odgłosy jak
            przelatujący samolot, przejeżdżające pojazdy typu samochód
            ciężarowy, autobus, traktor, motocykl, czy wóz konny. Dostrzega
            fruwające bociany i&nbsp;inne mniejsze ptaki, słyszy szczekające
            psy, gdaczące kury, piejące koguty, gęgające gęsi czy gulgoczące
            indyki.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="Czytaj" onClick={openModal} />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        header="Natanek i owady"
        content="Natanielek szczególnie zwraca uwagę na pająki i ich pajęczyny oraz muchy. Przed domem może również zaobserwować mrówki, które pracowicie wybierają piasek spod kostki. Ostatnio widzieliśmy wielką ćmę, która przysiadła na drewnianym wózku w miejscu, gdzie chciała się ukryć. Natanek doskonale pamięta te wydarzenia i miejsca, w których się działy."
        imgSrc={img}
      />
    </Section>
  );
};

export default About;
