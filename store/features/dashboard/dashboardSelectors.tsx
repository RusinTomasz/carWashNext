import {dashboardSliceState} from "./dashboardSlice";

export const selectMenuSelectedKeys = (state: dashboardSliceState) => {
    return state.dashboard.menuSelectedKeys;
};

export const selectOwnerCarWashes = (state: dashboardSliceState) => {
    return state.dashboard.carWashes;
};