import React from 'react';

const LoginForm = () => {

    return (
        <form >
            <input name="email" type="text" placeholder="email" />
            <input name="password" type="password" placeholder="hasło"/>
            <input type="submit" value="Zaloguj"/>
        </form>
    );
};

export default LoginForm;
