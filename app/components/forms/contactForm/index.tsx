import React, { SyntheticEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendBasicEmail } from "../../../api/sendEmails";
import {
  successEmailTitle,
  successEmailMessage,
  errorEmailTitle,
  errorEmailMessage,
} from "../../../constants/formsMessages/FormMessages";
import InputEvent from "../../../types/InputEvent";
import FormStatusMessage from "../reviewsForm/formStatusMessage/FormStatusMessage";
import ContactForm from "./ContactForm";

export interface ContactFormValues {
  regulations: boolean;
  message: string;
  name: string;
  subject: string;
  email: string;
}

const ContactFormContainer = () => {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const formValues = {
    regulations: false,
    message: "",
    name: "",
    subject: "",
    email: "",
  };

  const [state, setState] = useState<ContactFormValues>(formValues);
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
      formType: "Kontakt Form",
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

  const handleChangeCheckbox = (evt: InputEvent): void => {
    let value: boolean = (evt.target as HTMLInputElement).checked;

    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleChangeFormValues = (evt: InputEvent): void => {
    let value: string = evt.target.value;

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
      <ContactForm
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

export default ContactFormContainer;
