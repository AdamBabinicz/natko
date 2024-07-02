import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import moment from "moment";
import "moment/locale/pl"; // Importujemy język polski dla moment.js
import img1 from "../../assets/Nfts/1.jpg";
import img2 from "../../assets/Nfts/2.jpg";
import img3 from "../../assets/Nfts/3.jpg";
import img4 from "../../assets/Nfts/4.jpg";
import img5 from "../../assets/Nfts/5.jpg";
import img6 from "../../assets/Nfts/6.jpg";
import img7 from "../../assets/Nfts/7.jpg";
import img8 from "../../assets/Nfts/8.jpg";
import img9 from "../../assets/Nfts/9.jpg";
import img10 from "../../assets/Nfts/10.jpg";
import img11 from "../../assets/Nfts/11.jpg";
import img12 from "../../assets/Nfts/12.jpg";
import img13 from "../../assets/Nfts/13.jpg";
import img14 from "../../assets/Nfts/14.jpg";
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
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { GiCalendarHalfYear } from "react-icons/gi";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* overflow: hidden; */

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
0% {
  transform: translateX(100%)
}
100% {
  transform: translateX(-100%)
}
`;

const Row = styled.div`
  /* background: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  /* background: ${(props) => props.theme.body}; */
  cursor: pointer;
  padding: 2rem 0;

  @media (max-width: 48em) {
    /* width: 12rem; */
  }

  @media (max-width: 30em) {
    /* width: 10rem; */
  }

  img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    max-height: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
  background: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
    margin-right: 0.5rem; /* Dodajemy odstęp po prawej stronie ikony */
  }
  h2 {
    font-size: ${(props) =>
      props.theme.fontxs}; /* Zmniejszamy rozmiar czcionki */
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) =>
        props.theme
          .fontxs}; /* Dopasowujemy rozmiar czcionki do małych ekranów */
    }
  }
`;

const NftItem = ({ img, number = 0, date = "2023-01-01", passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  const formattedDate = moment(date).locale("pl").format("DD.MM.YYYY");

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="..." />
      <Details>
        <span>
          <BsFillCalendar2DateFill />
        </span>
        <h2>{formattedDate}</h2>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="foto-gablota">
      <Row direction="none" ref={Row1Ref}>
        <NftItem
          img={img1}
          number={2023}
          date={"2023-09-15"}
          passRef={Row1Ref}
        />
        <NftItem
          img={img2}
          number={2023}
          date={"2023-09-10"}
          passRef={Row1Ref}
        />
        <NftItem
          img={img3}
          number={654}
          date={"2023-08-26"}
          passRef={Row1Ref}
        />
        <NftItem
          img={img4}
          number={654}
          date={"2023-08-14"}
          passRef={Row1Ref}
        />
        <NftItem
          img={img6}
          number={654}
          date={"2023-08-10"}
          passRef={Row1Ref}
        />
        <NftItem
          img={img5}
          number={654}
          date={"2023-08-03"}
          passRef={Row1Ref}
        />

        <NftItem
          img={img7}
          number={654}
          date={"2023-07-27"}
          passRef={Row1Ref}
        />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem
          img={img8}
          number={654}
          date={"2023-07-13"}
          passRef={Row2Ref}
        />
        <NftItem
          img={img9}
          number={654}
          date={"2023-07-12"}
          passRef={Row2Ref}
        />
        <NftItem
          img={img11}
          number={654}
          date={"2023-07-06"}
          passRef={Row2Ref}
        />
        <NftItem
          img={img13}
          number={654}
          date={"2023-07-03"}
          passRef={Row2Ref}
        />
        <NftItem
          img={img12}
          number={654}
          date={"2023-06-23"}
          passRef={Row2Ref}
        />
        <NftItem
          img={img10}
          number={654}
          date={"2023-06-20"}
          passRef={Row2Ref}
        />

        <NftItem
          img={img14}
          number={654}
          date={"2023-06-12"}
          passRef={Row2Ref}
        />
      </Row>
    </Section>
  );
};

export default Showcase;
