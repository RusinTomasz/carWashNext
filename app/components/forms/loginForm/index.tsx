import React from 'react';
import LoginForm from "./LoginForm";

export interface LoginFormValues {
    email: string;
    password: string;
}

const LoginFormContainer = () => {


    return (
        <>
            <LoginForm/>
        </>
    );
};

export default LoginFormContainer;
