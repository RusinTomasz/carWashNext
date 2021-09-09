import React, {useEffect, useState} from 'react';
import Container from "../../../app/styles/shared/Container";
import LoginForm from "../../../app/components/forms/loginForm";
import {getJwt} from "../../../app/utils/authentication";


const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const jwt = getJwt();
        if (jwt) setIsLoggedIn(true);
    }, []);


    return (
        <Container>
            {isLoggedIn ? <div> Jesteś już zalogowany </div> : <LoginForm/>}
        </Container>
    );
};

export default Login;
