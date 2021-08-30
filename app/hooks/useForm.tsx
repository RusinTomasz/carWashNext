import React, {useState} from 'react';
import InputEvent from "../types/InputEvent";
import ReCAPTCHA from "react-google-recaptcha";


const useForm = (state: object, handleState: (state) => void, formValues: object) => {

    const recaptchaRef = React.createRef<ReCAPTCHA>();

    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);

    const resetForm = () => {
        handleState(formValues);
    };

    const setLoadingStatus = (value: boolean) => {
        setLoading(value)
    }

    const resetFormStatus = () => {
        setError(false);
        setSuccess(false);
    };

    const handleChangeCheckbox = (evt: InputEvent): void => {
        let value: boolean = (evt.target as HTMLInputElement).checked;

        handleState({
            ...state,
            [evt.target.name]: value,
        });
    };

    const handleChangeFormValues = (evt: InputEvent): void => {
        let value: string = evt.target.value;

        handleState({
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


    return {
        state,
        isLoading,
        isError,
        isSuccess,
        isCaptchaVerified,
        recaptchaRef,
        resetForm,
        resetFormStatus,
        setLoadingStatus,
        handleChangeCheckbox,
        handleChangeFormValues,
        onCaptchaChange
    }
};

export default useForm;
