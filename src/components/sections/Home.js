import React from "react";
import styled, { keyframes } from "styled-components";
import TypeWriterText from "../TypeWriterText";
import CoverVideo from "../CoverVideo";
import img from "../../assets/1.webp";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    padding-bottom: 2rem;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const moveHorizontal = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px); /* Możesz dostosować wartość przesunięcia */
  }
  100% {
    transform: translateX(0);
  }
`;

const Round = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6rem;
  margin-left: 0;

  @media (max-width: 64em) {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  span {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Circle = styled.span`
  border-radius: 50%;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxl};
  margin-left: 1rem; /* Space between image and arrow */
  transform: rotate(90deg); /* Rotate the arrow */

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const ImageContainer = styled.div`
  max-width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: lightblue;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    animation: ${moveHorizontal} 3s linear infinite reverse;
  }

  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }

  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Home = () => {
  return (
    <Section id="start">
      <Container>
        <Box>
          <TypeWriterText />
          <Round>
            <ImageContainer>
              <img src={img} alt="..." />
            </ImageContainer>
            <Circle>&#x2193;</Circle>
          </Round>
        </Box>
        <Box>
          <CoverVideo />
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
