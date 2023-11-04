import { configureStore, combineReducers } from "@reduxjs/toolkit";
import boardReducer from './reducers/BoardSlice';
import listReducer from './reducers/ListSlice';

const rootReducer = combineReducers({
    boardReducer,
    listReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']