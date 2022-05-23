import {combineReducers} from "redux";
import {modalSlice} from "./modalSlice";

export const rootReducer = combineReducers({
    modal: modalSlice.reducer
});