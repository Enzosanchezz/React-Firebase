import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";



export  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


// import rootReducer from '../reducer';
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({ reducer: rootReducer })

