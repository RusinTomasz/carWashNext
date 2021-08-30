import React, {SyntheticEvent } from 'react';
import LoginForm from "./LoginForm";

export interface LoginFormValues {
    email: string;
    password: string;
}

const LoginFormContainer = () => {

    const formValues: LoginFormValues = {
        email: "",
        password: "",
    };

    const handleSubmit = async (evt: SyntheticEvent) => {
        evt.preventDefault();
        console.log("await for login");
    };

    return (
        <>
            <LoginForm />

            {/*{isSuccess && (*/}
            {/*    <FormStatusMessage*/}
            {/*        title={successEmailTitle}*/}
            {/*        message={successEmailMessage}*/}
            {/*        type="success"*/}
            {/*    />*/}
            {/*)}*/}
            {/*{isError && (*/}
            {/*    <FormStatusMessage*/}
            {/*        title={errorEmailTitle}*/}
            {/*        message={errorEmailMessage}*/}
            {/*        type="error"*/}
            {/*    />*/}
            {/*)}*/}
        </>
    );
};

export default LoginFormContainer;
