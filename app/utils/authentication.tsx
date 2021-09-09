const getJwt = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem("jwt");
    }
};

export {getJwt};