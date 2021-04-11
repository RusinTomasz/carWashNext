import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = (
  routeName: string,
  baseUrl = `${process.env.NEXT_PUBLIC_HOST}`
) => {
  const [response, setResponse] = useState({ data: [], error: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${routeName}`);
        setResponse({ data: response.data, error: null });
      } catch (err) {
        setResponse({ data: null, error: err });
      }
    };
    fetchData();
  }, [baseUrl, routeName]);

  return response;
};

export default useRequest;
