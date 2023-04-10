import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserType = {
    isLoggedIn: boolean;
    mainLogin: string;
    login: string;
    password: string;
};

const initialState: UserType = {
    isLoggedIn: false,
    login: '',
    mainLogin: '',
    password: '',
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearAllInfo: (state) => {
            state.login = '';
            state.password = '';
        },
        changeLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setMainLogin: (state, action: PayloadAction<string>) => {
            state.mainLogin = action.payload;
        },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});
