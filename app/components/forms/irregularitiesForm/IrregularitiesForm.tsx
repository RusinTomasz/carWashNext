import Link from "next/link";
import React from "react";
import {IrregularitiesFormValues} from ".";
import {
    CheckboxDescription,
    CheckboxInput,
    CheckboxLabel,
} from "../../../styles/shared/inputs/ChecboxInput";
import {colors} from "../../../styles/variables";
import InputEvent from "../../../types/InputEvent";
import LoadingSpinner from "../../loaders/LoadingSpinner";
import CaptchaProps from "../../../types/Captcha";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import ReCAPTCHA from "react-google-recaptcha";
import {
    SubmitButton,
    InputLabelParagraph,
    Input,
    TextArea,
    ActionsWrap,
    CaptchaWrap,
} from "./styles/IrregularitiesFormStyles";

interface IrregularitiesFormProps {
    state: IrregularitiesFormValues;
    isLoading: boolean;
    handleChangeFormValues: (evt: InputEvent) => void;
    handleChangeCheckbox: (evt: InputEvent) => void;
    handleSubmit: (evt: any) => void;
}

const IrregularitiesForm = (props: IrregularitiesFormProps & CaptchaProps) => {
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
            <CheckboxLabel isCheckboxChecked={state.regulations} color="white">
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
                    backgroundColor="yellow"
                    color="default"
                    font="teko"
                    type="submit"
                    value="Wyślij"
                    disabled={isLoading || !isCaptchaVerified}
                />
                {isLoading && (
                    <LoadingSpinner
                        marginLeft={20}
                        size={37}
                        borderSize={4}
                        borderColor={colors.yellow}
                    />
                )}
            </ActionsWrap>
        </form>
    );
};

export default IrregularitiesForm;
