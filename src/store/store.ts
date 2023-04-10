import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsApi } from './services/newsApi';
import { paramsEverythingSlice } from './reducers/ParamsEverythingSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { paramsCategorySlice } from './reducers/ParamsCategorySlice';
import { UserSlice } from './reducers/UserSlice';

export const rootReducer = combineReducers({
    [newsApi.reducerPath]: newsApi.reducer,
    paramsEverything: paramsEverythingSlice.reducer,
    paramsCategory: paramsCategorySlice.reducer,
    user: UserSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(newsApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
