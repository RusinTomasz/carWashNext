import React from 'react';
import {LoginFormValues} from '.';
import {Input} from "./styles/LoginFormStyles";

interface LoginFormProps {
    values: LoginFormValues;
    handleChange: (e: React.ChangeEvent<any>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({values, handleChange, handleBlur, handleSubmit}) => {

    return (
        <>
            <h1>Zaloguj się</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="text"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="hasło"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                <button type="submit">Zaloguj</button>
            </form>
        </>

    );
};

export default LoginForm;
