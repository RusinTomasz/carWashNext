import React, {SyntheticEvent, useState} from 'react';
import FormStatusMessage from "../reviewsForm/formStatusMessage/FormStatusMessage";
import {
    errorEmailMessage,
    errorEmailTitle,
    successEmailMessage,
    successEmailTitle
} from "../../../constants/formsMessages/FormMessages";
import LoginForm from "./LoginForm";
import ReCAPTCHA from "react-google-recaptcha";
import InputEvent from "../../../types/InputEvent";
import useForm from "../../../hooks/useForm";


export interface LoginFormValues {
    email: string;
    password: string;
}


const LoginFormContainer = () => {

    const formValues: LoginFormValues = {
        email: "",
        password: "",
    };
    const [state, setState] = useState(formValues);

    const handleState = (state) => {
        setState(() => state);
    };

    const {
        isError,
        isSuccess,
        isLoading,
        isCaptchaVerified,
        recaptchaRef,
        resetForm,
        setLoadingStatus,
        resetFormStatus,
        onCaptchaChange,
        handleChangeFormValues
    } = useForm(state, handleState, formValues);


    const handleSubmit = async (evt: SyntheticEvent) => {
        evt.preventDefault();
        resetFormStatus();
        setLoadingStatus(true);

        // await sendEmail();

        console.log("await for login");

        setLoadingStatus(false);
        resetForm();
    };


    return (
        <>
            <LoginForm
                recaptchaRef={recaptchaRef}
                onCaptchaChange={onCaptchaChange}
                isCaptchaVerified={isCaptchaVerified}
                handleChangeFormValues={handleChangeFormValues}
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

export default LoginFormContainer;
