import React, { SyntheticEvent, useState } from "react";
import styled, { css } from "styled-components";
import SubmitInput from "../../../styles/shared/inputs/SubmitInput";
import { colors, fontFamilies } from "../../../styles/variables";
import InputEvent from "../../../types/InputEvent";

const inputsCss = css`
  font-family: ${fontFamilies.exo};
  font-size: 14px;
  line-height: 24px;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  border: 1px solid ${colors.grayText};
  box-shadow: none;
  outline: none;
  width: 100%;
`;

const SubmitButton = styled(SubmitInput)`
  display: block;
  margin: 1rem 0 0 auto;
  padding: 0.5rem 3rem;
`;

const InputLabelParagraph = styled.p`
  margin: 0.5rem 0;
  color: white;
`;

const Input = styled.input`
  ${inputsCss}
`;

const TextArea = styled.textarea`
  ${inputsCss}
`;

const IrregularitiesForm = () => {
  const formValues = {
    message: "",
    name: "",
    subject: "",
    email: "",
  };

  const [state, setState] = useState(formValues);

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

  };

  const handleChangeFormValues = (evt: InputEvent): void => {
    const value: string = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <InputLabelParagraph>Imie i nazwisko</InputLabelParagraph>
        <Input
          type="text"
          name="name"
          placeholder="Imie i nazwisko..."
          onChange={(evt) => handleChangeFormValues(evt)}
          value={state.name}
          required
        />
      </label>
      <label>
        <InputLabelParagraph>Temat</InputLabelParagraph>
        <Input
          type="text"
          name="subject"
          placeholder="Temat..."
          onChange={(evt) => handleChangeFormValues(evt)}
          value={state.subject}
          required
        />
      </label>
      <label>
        <InputLabelParagraph>Email</InputLabelParagraph>
        <Input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(evt) => handleChangeFormValues(evt)}
          value={state.email}
          required
        />
      </label>
      <label>
        <InputLabelParagraph>Wiadomość</InputLabelParagraph>
        <TextArea
          className="text-input"
          id="message"
          name="message"
          placeholder="Wiadomość..."
          onChange={(evt) => handleChangeFormValues(evt)}
          value={state.message}
          rows={4}
          cols={50}
          required
        />
      </label>
      <SubmitButton
        backgroundColor="yellow"
        color="default"
        font="teko"
        type="submit"
        value="Wyślij"
      />
      {/* <Recaptcha
        ref={(ref) => (this.recaptcha = ref)}
        sitekey="6LfA0-EUAAAAAIvZze0LTAhrKfjGLhX9s7n_vG9e"
        onResolved={this.onResolved}
      /> */}
    </form>
  );
};

export default IrregularitiesForm;
