import {Formik, FormikValues} from 'formik';
import React from 'react';
import LoginForm from "./LoginForm";
import axios from "axios";
import {useRouter} from "next/router";

export interface LoginFormValues {
    email: string;
    password: string;
}

interface LoginResponse {
    jwt: string,
    user: { username: string }
}


const LoginFormContainer = () => {
    const router = useRouter();
    const initialValues: LoginFormValues = {email: "", password: ""};

    const handleSubmit = async (values: FormikValues) => {

        const loginInfo = {
            identifier: "jacek@gmail.com",
            password: "Jacek123"
        };

        try {
            const login = await axios.post<LoginResponse>('http://localhost:1337/auth/local', loginInfo);
            localStorage.setItem("jwt", login.data.jwt);
            localStorage.setItem("username", login.data.user.username);
            await router.push('/dashboard');
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => <LoginForm
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    handleSubmit={handleSubmit}
                />}
            </Formik>
        </>
    );
};

export default LoginFormContainer;
