import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";
import img1 from "../assets/12.jpg";
import img2 from "../assets/1.jpg";
import img3 from "../assets/2.jpg";
import img4 from "../assets/3.jpg";
import img5 from "../assets/4.jpg";
import img6 from "../assets/5.jpg";
import img7 from "../assets/6.jpg";
import img8 from "../assets/7.jpg";
import img9 from "../assets/8.jpg";
import img10 from "../assets/9.jpg";
import img11 from "../assets/10.jpg";
import img12 from "../assets/11.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";
import img23 from "../assets/23.jpg";
import img24 from "../assets/24.jpg";
import img25 from "../assets/25.jpg";
import img26 from "../assets/26.jpg";
import Arrow from "../assets/Arrow.png";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      object-fit: cover;
      max-width: 100%;
      width: 600px;
      height: 800px;
      max-height: 100%;
    }
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    top: 60%;
    background: url(${Arrow}) center/contain no-repeat;
    width: 4rem;
    transform: rotate(180deg);

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    left: 0;
    top: 60%;
    background: url(${Arrow}) center/contain no-repeat;
    width: 4rem;
    overflow: hidden;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }

    @media (max-width: 30em) {
      width: 2rem;
    }
  }

  .swiper-pagination-fraction,
  .swiper-pagination-fraction .swiper-pagination-current,
  .swiper-pagination-fraction .swiper-pagination-total {
    color: #fff;
    text-shadow: 1px 1px 2px ${(props) => props.theme.text};
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="..." />
        </SwiperSlide>

        <SwiperSlide>
          <img src={img11} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img17} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img18} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img20} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img21} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img22} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img23} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img24} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img25} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img26} alt="..." />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
