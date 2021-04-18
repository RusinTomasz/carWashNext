import React from "react";
import { PhoneWrap, PhoneNumberLink } from "./styles/PhoneNumberStyles";

interface PhoneNumberProps {
  phoneNumber: string | number;
}

const PhoneNumber = (props: PhoneNumberProps) => {
  const { phoneNumber } = props;

  return (
    <PhoneWrap>
      <PhoneNumberLink href={`tel:${phoneNumber}`}>
        {phoneNumber}
      </PhoneNumberLink>
    </PhoneWrap>
  );
};

export default PhoneNumber;
