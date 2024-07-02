import React from "react";
import styled from "styled-components";
import vid from "../assets/1.mp4";

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  video {
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 64em) {
      height: 100%;
    }
  }

  @media (max-width: 64em) {
    /* min-width: 40vh; */
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={vid} type="video/mp4" controls autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
