import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/footer/1.jpg";
import img2 from "../assets/footer/2.jpg";
import img3 from "../assets/footer/3.jpg";
import img4 from "../assets/footer/4.jpg";
import img5 from "../assets/footer/5.jpg";
import img6 from "../assets/footer/6.jpg";
import Button from "./Button";
import Modal from "../Modal";
import useModal from "../hooks/useModal";
import img from "../assets/28.jpg";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};
  background: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;

  img {
    width: 15rem;
    height: auto;
  }

  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};

  @media (max-width: 64em) {
    width: 40%;
    font-size: ${(props) => props.theme.fontxxl};
    text-align: center;
  }

  @media (max-width: 48em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
  }
`;
const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;
const JoiNow = styled.button`
  display: inline-block;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Banner = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [click, setClick] = useState(false);

  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <img src={img5} alt="..." />
        <img src={img6} alt="..." />
      </ImgContainer>
      <Title>Cytat</Title>
      <BtnContainer>
        <JoiNow onClick={openModal}>Czytaj</JoiNow>
      </BtnContainer>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        header="O dziecięcej złości (Dalajlama)"
        content="Spójrz na dzieci. Oczywiście mogą się kłócić, ale ogólnie rzecz biorąc nie żywią do siebie urazy tak długo, jak robią to dorośli. Większość dorosłych uczy dzieci swoim przykładem. Ale czego oni tak naprawdę uczą, kiedy pokazują wielki uśmiech, pod którym gdzieś głęboko, w środku, kryją się negatywne uczucia? Dzieci zazwyczaj nie działają w taki sposób. Jeśli czują złość w stosunku do kogoś, wyrażają ją i wtedy to się kończy. Następnego dnia dalej bawią się z tą osobą."
        imgSrc={img}
      />
    </Section>
  );
};

export default Banner;
