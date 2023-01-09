import { Context, createWrapper } from "next-redux-wrapper";
import { Action, applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { reducer } from "./reducers";

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);

export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
