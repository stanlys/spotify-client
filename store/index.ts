import { Context, createWrapper } from "next-redux-wrapper";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers";

const makeStore = (context: Context) => createStore(reducer);

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
