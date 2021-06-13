import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../loaders/LoadingSpinner";

const LoadingScreenWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const LoadingScreen = () => {
  return (
    <LoadingScreenWrap>
      <LoadingSpinner size={180} borderSize={6} />
    </LoadingScreenWrap>
  );
};

export default LoadingScreen;
