import {setCarWashes} from "./dashboardSlice";
import axios from "axios";

export const setCarWashesRelatedToOwner = (url: string) => async (dispatch: any) => {
    try {
        const data = await axios.get(url);
        dispatch(setCarWashes(data.data));
    } catch (err) {
        console.log(err);
    }
};