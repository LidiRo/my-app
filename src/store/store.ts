import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardReducer from './reducers/BoardSlice';

const rootReducer = combineReducers({
    boardReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];