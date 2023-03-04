import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {AppReducer} from "./state/AppReducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from '@redux-devtools/extension';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = createStore(AppReducer, composeWithDevTools())

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);