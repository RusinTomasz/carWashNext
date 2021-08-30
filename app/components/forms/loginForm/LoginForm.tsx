import React from 'react';
import InputEvent from "../../../types/InputEvent";
import {LoginFormValues} from "./index";
import CaptchaProps from "../../../types/Captcha";
import {ActionsWrap, SubmitButton} from "../contactForm/styles/ContactFormStyles";
import LoadingSpinner from "../../loaders/LoadingSpinner";
import {colors} from "../../../styles/variables";

interface LoginFormProps {
    state: LoginFormValues;
    isLoading: boolean;
    handleChangeFormValues: (evt: InputEvent) => void;
    handleSubmit: (evt: any) => void;
}


const LoginForm = (props: LoginFormProps & CaptchaProps) => {

    const {
        state,
        isLoading,
        recaptchaRef,
        isCaptchaVerified,
        onCaptchaChange,
        handleChangeFormValues,
        handleSubmit,
    } = props;

    console.log(state)

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="text" placeholder="email" value={state.email}
                   onChange={(evt) => handleChangeFormValues(evt)}/>
            <input name="password" type="password" placeholder="hasło" value={state.password}
                   onChange={(evt) => handleChangeFormValues(evt)}/>
            <input type="submit" value="Zaloguj"/>
            <ActionsWrap justifyContent="flex-end" alignItems="center">
                {isLoading && (
                    <LoadingSpinner
                        size={37}
                        borderSize={4}
                        borderColor={colors.blue}
                    />
                )}
            </ActionsWrap>
        </form>
    );
};

export default LoginForm;
