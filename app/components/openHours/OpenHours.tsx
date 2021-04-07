import React from "react";
import styled from "styled-components";

interface OpenHoursProps {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  margin-top: 2rem;
`;

const Hours = styled.p`
  margin: 0.5rem 0;
  font-size: 14px;
`;

const OpenHours = (props: OpenHoursProps) => {
  const {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  } = props;

  return (
    <>
      {monday ||
      tuesday ||
      wednesday ||
      thursday ||
      friday ||
      saturday ||
      sunday ? (
        <div className="open-hours">
          <Title>Godziny otwarcia:</Title>
          {monday && <Hours>Poniedziałek: {monday}</Hours>}
          {tuesday && <Hours>Wtorek: {tuesday}</Hours>}
          {wednesday && <Hours>Środa: {wednesday}</Hours>}
          {thursday && <Hours>Czwartek: {thursday}</Hours>}
          {friday && <Hours>Piątek: {friday}</Hours>}
          {saturday && <Hours>Sobota: {saturday}</Hours>}
          {sunday && <Hours>Niedziela: {sunday}</Hours>}
        </div>
      ) : null}
    </>
  );
};

export default OpenHours;
