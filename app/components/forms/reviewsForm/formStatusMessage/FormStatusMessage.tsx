import React from "react";
import styled from "styled-components";
import { colors } from "../../../../styles/variables";

interface MessageWrapProps {
  type: "error" | "success";
}

const MessageWrap = styled.div<MessageWrapProps>`
  padding: 1rem 3rem;
  background-color: ${(props) =>
    props.type === "error" ? colors.errorBg : colors.successBg};
  margin: 4rem 0 6rem;
`;

const Title = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 300;
`;
const Message = styled.p`
  font-size: 14px;
  color: white;
`;

interface FormStatusMessageProps {
  title: string;
  message: string;
  type: "error" | "success";
}

const FormStatusMessage = (props: FormStatusMessageProps) => {
  const { title, message, type } = props;

  return (
    <MessageWrap type={type}>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </MessageWrap>
  );
};

export default FormStatusMessage;
