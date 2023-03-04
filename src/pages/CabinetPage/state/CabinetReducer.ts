import {combineReducers} from "redux";
import {EditorReducer} from "../pages/EditorPage/state/EditorReducer";

export const CabinetReducer = combineReducers<TCabinetState>({
    editor: EditorReducer
});