import React from "react";
import { IrregularitiesFormValues } from ".";
import { colors } from "../../../styles/variables";
import InputEvent from "../../../types/InputEvent";
import LoadingSpinner from "../../loaders/LoadingSpinner";

import {
  SubmitButton,
  InputLabelParagraph,
  Input,
  TextArea,
  ActionsWrap,
} from "./styles/IrregularitiesFormStyles";

interface IrregularitiesFormProps {
  state: IrregularitiesFormValues;
  isLoading: boolean;
  handleChangeFormValues: (evt: InputEvent) => void;
  handleSubmit: (evt: any) => void;
}

const IrregularitiesForm = (props: IrregularitiesFormProps) => {
  const { state, isLoading, handleChangeFormValues, handleSubmit } = props;

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
      <ActionsWrap justifyContent="flex-end" alignItems="center">
        <SubmitButton
          backgroundColor="yellow"
          color="default"
          font="teko"
          type="submit"
          value="Wyślij"
          disabled={isLoading}
        />
        {isLoading && (
          <LoadingSpinner
            size={37}
            borderSize={4}
            borderColor={colors.yellow}
          />
        )}
      </ActionsWrap>
      {/* #review */}
      {/* <Recaptcha
        ref={(ref) => (this.recaptcha = ref)}
        sitekey="6LfA0-EUAAAAAIvZze0LTAhrKfjGLhX9s7n_vG9e"
        onResolved={this.onResolved}
      /> */}
    </form>
  );
};

export default IrregularitiesForm;
