import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {getJwt} from "../utils/authentication";
import AuthLoadingPlaceholder from "../components/authLoadingPlaceHolder/AuthLoadingPlaceholder";


//#review - Need add typescript

const withAuthentication = (WrappedComponent) => ({...props}) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const jwt = getJwt();
        if (!jwt) router.push("/auth/login");
        else setIsLoggedIn(true);
    }, []);


    return isLoggedIn ? <WrappedComponent {...props} /> : <AuthLoadingPlaceholder/>;
};

export default withAuthentication;