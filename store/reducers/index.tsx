import { combineReducers } from "redux";
import { carWashReducer, CarWashState } from "./carWashReducer";

export interface State {
  carWash?: CarWashState;
}

export default combineReducers({
  carWash: carWashReducer,
});
