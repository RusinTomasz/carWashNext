import React, { SyntheticEvent, useState } from "react";
import { sendBasicEmail } from "../../../api/sendEmails";
import InputEvent from "../../../types/InputEvent";
import FormStatusMessage from "../reviewsForm/formStatusMessage/FormStatusMessage";
import IrregularitiesForm from "./IrregularitiesForm";
import {
  successEmailMessage,
  successEmailTitle,
  errorEmailMessage,
  errorEmailTitle,
} from "../../../constants/formsMessages/FormMessages";
import ReCAPTCHA from "react-google-recaptcha";

export interface IrregularitiesFormValues {
  regulations: boolean;
  message: string;
  name: string;
  subject: string;
  email: string;
}

const IttegularitiesFormContainer = () => {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const formValues = {
    regulations: false,
    message: "",
    name: "",
    subject: "",
    email: "",
  };

  const [state, setState] = useState<IrregularitiesFormValues>(formValues);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    resetFormStatus();

    setLoading(true);

    await sendEmail();

    setLoading(false);
  };

  const sendEmail = async () => {
    const isEmailSend = await sendBasicEmail({
      formType: "Irregularities Form",
      name: state.name,
      subject: state.subject,
      email: state.email,
      message: state.message,
      regulations:
        "Zgadzam się na przetwarzanie Moich danych osobowych w celu realizacji zapytania przez rankingmyjni.pl oraz potwierdzam zapoznanie się z Polityką Prywatności i Cookies oraz Regulaminem serwisu.",
    });
    // #review
    // Przenieść
    if (!isEmailSend) {
      setError(true);
      return;
    }
    setSuccess(true);
    resetForm();
  };

  const resetForm = () => {
    setState(formValues);
  };

  const resetFormStatus = () => {
    setError(false);
    setSuccess(false);
  };

  const handleChangeFormValues = (evt: InputEvent): void => {
    const value: string = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleChangeCheckbox = (evt: InputEvent): void => {
    let value: boolean = (evt.target as HTMLInputElement).checked;

    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const onCaptchaChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setCaptchaVerified(true);
    }
  };

  return (
    <>
      <IrregularitiesForm
        recaptchaRef={recaptchaRef}
        onCaptchaChange={onCaptchaChange}
        isCaptchaVerified={isCaptchaVerified}
        handleChangeFormValues={handleChangeFormValues}
        handleChangeCheckbox={handleChangeCheckbox}
        handleSubmit={handleSubmit}
        state={state}
        isLoading={isLoading}
      />
      {isSuccess && (
        <FormStatusMessage
          title={successEmailTitle}
          message={successEmailMessage}
          type="success"
        />
      )}
      {isError && (
        <FormStatusMessage
          title={errorEmailTitle}
          message={errorEmailMessage}
          type="error"
        />
      )}
    </>
  );
};

export default IttegularitiesFormContainer;
