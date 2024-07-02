import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.body};
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: unset;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }
`;

// Styled component to hide the last three accordions on small screens
const HideOnMobile = styled.div`
  @media (max-width: 48em) {
    display: none;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <Section ref={ref} id="pytania">
      <Title>Pytania</Title>
      <Container>
        <Box>
          <Accordion title="Co Natanka zadziwia w magnesie na lodówkę?">
            Natek bardzo jest zdziwiony, że magnes trzyma się na lodówce,
            pralce, futrynie (która u mnie jest metalowa), a nie chce się
            trzymać na płytkach i ścianach!
          </Accordion>
          <Accordion title="Dlaczego Natek próbuje złapać wodę?">
            Natanielek usiłuje rączkami ścisnąć i zatrzymać strumień wody, tak
            jak każdy inny przedmiot. Później pokazuje, że woda uciekła do
            dziury.
          </Accordion>
          <Accordion title="Dlaczego Natanek dzwoni do mnie ze smartfona?">
            Natanielek zna ikonki na smartfonie i wie, w jaki sposób może
            zadzwonić do kogoś. Mnie rozpoznaje po obrazku powiązanym z numerem
            telefonu.
          </Accordion>
        </Box>
        <Box>
          <HideOnMobile>
            <Accordion title="Czy uważasz, że dziecięce zachowania mają sens?">
              Zachowanie każdego człowieka ma sens; nieważne, czy ma 3 czy 33
              lata. Już od urodzenia dziecko działa w określonym celu: na
              początku płacze, by pokazać, że jest głodne, jest mu zimno,
              niewygodnie albo potrzebuje czułości. Później jego zachowanie
              coraz bardziej się specjalizuje, ale w każdym można odnaleźć sens,
              który może nie być widoczny na pierwszy rzut oka, nie być
              oczywisty (np. dziecko krzyczy, bo potrzebuje troski, uwagi, lub
              nauczyło się, że w ten sposób uzyska to, czego chce).
            </Accordion>
            <Accordion title="Czy zgadzasz się z twierdzeniem, że dzieci potrzebują granic?">
              Tak. Dzieci chcą i potrzebują rozumieć reguły rządzące ich
              światem. Chcą wiedzieć, czego się od nich oczekuje, jakie są ich
              relacje z innymi ludźmi, jak daleko mogą się posunąć oraz co się
              dzieje, kiedy posuną się za daleko. W miarę dorastania potrzebują
              sposobu, by poznać swoje rosnące umiejętności i możliwości. I chcą
              mieć poczucie bezpieczeństwa i stabilności.
            </Accordion>
            <Accordion title="Czy akceptujesz dawanie sfery wolności i wyboru twojemu dziecku?">
              Dziecko, jak każdy człowiek, potrzebuje mieć poczucie sprawstwa,
              czuć, że jest ważne, a jego wola jest respektowana. Wybór, jeżeli
              jest w granicach możliwości dziecka, kształci taką miłą i fajną
              umiejętność, jaką jest podejmowanie decyzji. W przyszłości
              zaowocuje to również optymalnym poczuciem własnej wartości.
            </Accordion>
          </HideOnMobile>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
