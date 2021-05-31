import React from "react";
import InputEvent from "../../../types/InputEvent";
import {
  ActionsWrap,
  ContactFormEL,
  Input,
  TextArea,
  SubmitButton,
  CaptchaWrap,
} from "./styles/ContactFormStyles";
import { colors } from "../../../styles/variables";
import LoadingSpinner from "../../loaders/LoadingSpinner";
import Link from "next/link";
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxDescription,
} from "../../../styles/shared/inputs/ChecboxInput";
import { ContactFormValues } from ".";
import ReCAPTCHA from "react-google-recaptcha";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import CaptchaProps from '../../../types/Captcha';


interface ContactFormProps {
  state: ContactFormValues;
  isLoading: boolean;
  handleChangeFormValues: (evt: InputEvent) => void;
  handleChangeCheckbox: (evt: InputEvent) => void;
  handleSubmit: (evt: any) => void;
}

const ContactForm = (props: ContactFormProps & CaptchaProps) => {
  const {
    state,
    isLoading,
    recaptchaRef,
    isCaptchaVerified,
    onCaptchaChange,
    handleChangeFormValues,
    handleChangeCheckbox,
    handleSubmit,
  } = props;

  return (
    <>
      <ContactFormEL onSubmit={handleSubmit}>
        <label>
          <p>Imie i nazwisko</p>
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
          <p>Temat</p>
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
          <p>Email</p>
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
          <p>Wiadomość</p>
          <TextArea
            name="message"
            onChange={(evt) => handleChangeFormValues(evt)}
            placeholder="Wiadomość..."
            required
            value={state.message}
            rows={4}
            cols={50}
          />
        </label>
        <CheckboxLabel isCheckboxChecked={state.regulations}>
          Wyrażam zgodę
          <CheckboxInput
            type="checkbox"
            name="regulations"
            onChange={(evt) => handleChangeCheckbox(evt)}
            checked={state.regulations}
            required
          />
          <CheckboxDescription>
            Klikając „Wyślij” zgadzasz się na przetwarzanie Twoich danych
            osobowych w celu realizacji zapytania przez rankingmyjni.pl oraz
            potwierdzasz zapoznanie się z &nbsp;
            <Link href="/polityka-prywatnosci-i-cookies">
              Polityką Prywatności i Cookies
            </Link>
            &nbsp; oraz &nbsp;
            <Link href="/regulamin">Regulaminem serwisu</Link>
          </CheckboxDescription>
        </CheckboxLabel>
        <FlexWrapper justifyContent="flex-end">
          <CaptchaWrap>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
              onChange={onCaptchaChange}
            />
          </CaptchaWrap>
        </FlexWrapper>
        <ActionsWrap justifyContent="flex-end" alignItems="center">
          <SubmitButton
            type="submit"
            value="Wyślij"
            backgroundColor="blue"
            color="white"
            disabled={!isCaptchaVerified}
          />
          {isLoading && (
            <LoadingSpinner
              size={37}
              borderSize={4}
              borderColor={colors.blue}
            />
          )}
        </ActionsWrap>
      </ContactFormEL>
    </>
  );
};

export default ContactForm;
