import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { State } from "./reducers/index";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//Return a new Redux Store instance each time it's called.
const makeStore: MakeStore<State> = (context: Context) => store;

export const wrapper = createWrapper<State>(makeStore, { debug: true });

export default store;
