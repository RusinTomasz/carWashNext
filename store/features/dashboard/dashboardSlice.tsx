import { createSlice } from "@reduxjs/toolkit";

export interface dashboardSliceState {
    counter: {
        value: number;
    };
}

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, incrementByAmount } = dashboardSlice.actions;

export default dashboardSlice.reducer;
