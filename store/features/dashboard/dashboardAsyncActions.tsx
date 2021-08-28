import {incrementByAmount} from "./dashboardSlice";

export const incrementAsync = (amount: number) => async (dispatch: any) => {
    try {
        setTimeout(() => dispatch(incrementByAmount(amount)), 2000);
    } catch (err) {
        console.log(err);
    }
};