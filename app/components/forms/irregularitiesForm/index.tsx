import React, { SyntheticEvent, useState } from "react";
import InputEvent from "../../../types/InputEvent";
import IrregularitiesForm from "./IrregularitiesForm";

export interface IrregularitiesFormValues {
  message: string;
  name: string;
  subject: string;
  email: string;
}

const IttegularitiesFormContainer = () => {
  const formValues = {
    message: "",
    name: "",
    subject: "",
    email: "",
  };

  const [state, setState] = useState<IrregularitiesFormValues>(formValues);

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
    <IrregularitiesForm
      handleChangeFormValues={handleChangeFormValues}
      handleSubmit={handleSubmit}
      state={state}
    />
  );
};

export default IttegularitiesFormContainer;
