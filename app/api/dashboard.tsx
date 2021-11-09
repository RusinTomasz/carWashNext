import axios from "axios";

export const fetchData = async (url) => {
   const carWashes = await axios.get(url);

   return carWashes.data;
}

