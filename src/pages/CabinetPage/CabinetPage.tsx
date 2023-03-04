import React from 'react';
import {Route, Routes} from "react-router-dom";
import {EditorPage} from "./pages/EditorPage/EditorPage";
import {createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {Provider} from "react-redux";
import {CabinetReducer} from "./state/CabinetReducer";

const store = createStore(CabinetReducer, composeWithDevTools())

export function CabinetPage() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/*" element={<EditorPage/>}/>
            </Routes>
        </Provider>
    )
}