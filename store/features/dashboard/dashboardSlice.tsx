import { createSlice } from "@reduxjs/toolkit";
import CarWashType from "../../../app/types/CarWash";


export interface dashboardSliceState {
    dashboard: {
        menuSelectedKeys: string[];
        carWashes: CarWashType[];
    };
}

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        value: 0,
        carWashes: [],
        menuSelectedKeys: ["1"],
    },
    reducers: {
        setMenuSelectedKeys: (state, action) => {
            state.menuSelectedKeys = [action.payload]
        },
        setCarWashes: (state, action) => {
            state.carWashes = action.payload;
        },
    },
});

export const { setMenuSelectedKeys, setCarWashes } = dashboardSlice.actions;

export default dashboardSlice.reducer;
