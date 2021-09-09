import React from 'react';
import LoadingSpinner from "../loaders/LoadingSpinner";
import {AuthLoadingWrap, AuthLodingTitle} from "./styles/AuthLoadingPlaceholderStyles";

const AuthLoadingPlaceholder = () => {
    return (
        <AuthLoadingWrap>
            <AuthLodingTitle>Loading...</AuthLodingTitle>
            <LoadingSpinner size={90} borderSize={5} marginTop={20}/>
        </AuthLoadingWrap>
    );
};

export default AuthLoadingPlaceholder;
