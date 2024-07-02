import React from "react";
import styled from "styled-components";
import img1 from "../../assets/team/1.jpg";
import img2 from "../../assets/team/2.jpg";
import img3 from "../../assets/team/3.jpg";
import img4 from "../../assets/team/4.jpg";
import img5 from "../../assets/team/5.jpg";
import img6 from "../../assets/team/6.jpg";
import img7 from "../../assets/team/7.jpg";
import img8 from "../../assets/team/8.jpg";
import img9 from "../../assets/team/9.jpg";
import img10 from "../../assets/team/10.jpg";
import img11 from "../../assets/team/11.jpg";
import img12 from "../../assets/team/12.jpg";
import img13 from "../../assets/team/13.jpg";
import img14 from "../../assets/team/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
import img20 from "../../assets/20.jpg";
import img21 from "../../assets/21.jpg";
import img22 from "../../assets/22.jpg";
import img23 from "../../assets/23.jpg";
import img24 from "../../assets/24.jpg";
import img25 from "../../assets/25.jpg";
import img26 from "../../assets/26.jpg";
import Confetti from "../Confetti";
import ConfettiComponent from "../Confetti";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.body};
  position: relative;
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: unset;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
const Item = styled.div`
  width: calc(20rem - 3vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-0.4rem) scale(1.07);
    }
  }

  @media (max-width: 30em) {
    /* width: 90vw; */
  }
`;
const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  /* background: ${(props) => props.theme.carouselColor}; */
  cursor: pointer;
  padding: 1rem;

  img {
    /* border-top-left-radius: 20px;
    border-top-right-radius: 20px; */
    width: 100%;
    max-height: 100%;
    height: 300px;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
  }
`;
const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;
const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = "", position = "" }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt="..." />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="rodzina">
      <ConfettiComponent />
      <Title>Rodzinnie</Title>
      <Container>
        <MemberComponent
          img={img1}
          name="Przebudzenie"
          position="Wstaję z uśmiechem"
        />
        <MemberComponent img={img2} name="Spacerek" position="Na rowerku" />
        <MemberComponent
          img={img3}
          name="Mój habitat"
          position="Siedzę i myślę"
        />
        <MemberComponent
          img={img4}
          name="Przed lustrem"
          position="Mam niezły profil"
        />
        <MemberComponent
          img={img5}
          name="Przed wyjściem"
          position="W kapelusiku mi do twarzy"
        />
        <MemberComponent img={img6} name="Radom" position="Z tatą" />
        <MemberComponent img={img7} name="Radom" position="Z mamą" />
        <MemberComponent
          img={img8}
          name="Market"
          position="Walczę z inflacją"
        />
        <MemberComponent img={img9} name="W domu" position="Jest bezpiecznie" />
        <MemberComponent
          img={img10}
          name="Wielki pojazd"
          position="Dla małego kierowcy"
        />
      </Container>
    </Section>
  );
};

export default Team;
