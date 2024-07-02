// Modal.js
import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { IoMdClose } from "react-icons/io";

const Background = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const ModalWrapper = styled(animated.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.body};
  z-index: 1000;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;

  @media (max-width: 48em) {
    width: 75%;
    height: fit-content;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    text-align: center !important;
    width: 100%;
  }
`;

const ModalContent = styled.div`
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 1rem;
`;

const CloseButton = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, header, content, imgSrc }) => {
  const backgroundAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? "auto" : "none",
  });

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen
      ? `translate(-50%, -50%) scale(1)`
      : `translate(-50%, -50%) scale(0.5)`,
  });

  return (
    <>
      <Background
        style={backgroundAnimation}
        isOpen={isOpen}
        onClick={onClose}
      />
      {isOpen && (
        <ModalWrapper style={modalAnimation}>
          <ModalHeader>
            <h3>{header}</h3>
            <CloseButton onClick={onClose}>
              <IoMdClose />
            </CloseButton>
          </ModalHeader>
          <ModalContent>
            <p>{content}</p>
            {imgSrc && <ModalImage src={imgSrc} alt="Modal Image" />}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
