import {dashboardSliceState} from "./dashboardSlice";

export const selectCount = (state: dashboardSliceState) => {
    return state.counter.value;
};