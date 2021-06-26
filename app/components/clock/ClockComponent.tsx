import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import styled from "styled-components";
import FlexWrapper from "../../styles/shared/FlexWrapper";

const ClockWrap = styled(FlexWrapper)`
  margin-top: 92px;
`;

const ClockComponent = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ClockWrap justifyContent="center">
      <Clock value={value} />
    </ClockWrap>
  );
};

export default ClockComponent;
