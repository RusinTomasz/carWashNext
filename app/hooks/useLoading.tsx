import {useEffect, useState} from "react";
import Router from "next/router";
import useRequest from "./useRequest";

const useLoading = () => {

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Router.events.on("routeChangeStart", startLoading);
        Router.events.on("routeChangeComplete", stopLoading);
        return () => {
            Router.events.off("routeChangeStart", startLoading);
            Router.events.off("routeChangeComplete", stopLoading);
        };
    }, []);

    return loading;
}

export default useLoading;