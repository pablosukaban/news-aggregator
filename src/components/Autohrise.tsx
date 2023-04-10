import React, { useRef, useState } from 'react';
import { LoginWindow, RegisterWindow } from './ModalWindow';
import { useAppDispatch, useAppSelector } from '../store/store';
import { UserSlice } from '../store/reducers/UserSlice';

const Autohrise = () => {
    const [isLoginWindowOpened, setIsLoginWindowOpenedOpened] = useState(false);
    const [isRegisterWindowOpened, setIsRegisterWindowOpened] = useState(false);

    const [isWrongPassword, setIsWrongPassword] = useState(false);
    const [isNoUser, setIsNoUser] = useState(false);

    const { isLoggedIn, login, mainLogin, password } = useAppSelector(
        (state) => state.user
    );
    const dispatch = useAppDispatch();
    const {
        clearAllInfo,
        changeLogin,
        changePassword,
        setIsLoggedIn,
        setMainLogin,
    } = UserSlice.actions;

    const modalBackRef = useRef<HTMLDivElement>(null);

    const handleOpenLogin = () => {
        setIsLoginWindowOpenedOpened(true);
    };

    const handleOpenSignUp = () => {
        setIsRegisterWindowOpened(true);
    };

    const closeAll = (e: React.MouseEvent) => {
        if (e.target !== modalBackRef.current) return;

        setIsLoginWindowOpenedOpened(false);
        setIsRegisterWindowOpened(false);
    };

    const handleCancelLogin = () => {
        setIsLoginWindowOpenedOpened(false);
        dispatch(clearAllInfo());
    };

    const handleCancelRegister = () => {
        setIsRegisterWindowOpened(false);
        dispatch(clearAllInfo());
    };

    const handleOpenSignUpInstead = () => {
        setIsLoginWindowOpenedOpened(false);
        setIsRegisterWindowOpened(true);
    };

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(changeLogin(value));
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(changePassword(value));
    };

    const registerUser = () => {
        if (!login.length || !password.length) return;

        const newUser = {
            login,
            password,
        };

        localStorage.setItem(login, JSON.stringify(newUser));
        handleCancelRegister();
        setIsLoggedIn(true);
        setMainLogin(login);
    };

    const loginUser = () => {
        if (!login.length || !password.length) return;

        const user = localStorage.getItem(login);

        if (!user) {
            setIsWrongPassword(false);
            setIsNoUser(true);
            return;
        }

        const parsed: { login: string; password: string } = JSON.parse(user);

        if (parsed.login && parsed.login === login) {
            setIsNoUser(false);
            if (parsed.password === password) {
                dispatch(setIsLoggedIn(true));
                dispatch(setMainLogin(login));
                setIsLoginWindowOpenedOpened(false);
                setIsWrongPassword(false);
                dispatch(clearAllInfo());
                console.log('password right');
            } else {
                setIsWrongPassword(true);
            }
        }
    };

    const logOut = () => {
        dispatch(setIsLoggedIn(false));
    };

    return (
        <div>
            {isLoggedIn ? (
                <div className='flex items-center justify-center gap-2'>
                    <button className='cursor-pointer rounded bg-indigo-500 px-2 py-1 text-lg text-white transition hover:bg-indigo-400'>
                        {mainLogin[0]}
                    </button>
                    <button onClick={logOut}>Выйти</button>
                </div>
            ) : (
                <div className='flex gap-2'>
                    <button onClick={handleOpenLogin}>Вход</button>
                    <button onClick={handleOpenSignUp}>Регистрация</button>
                </div>
            )}
            <div
                className={`absolute inset-0 z-20 min-h-screen bg-gray-800 bg-opacity-50 ${
                    isLoginWindowOpened || isRegisterWindowOpened
                        ? 'absolute'
                        : 'hidden'
                }`}
            >
                <div
                    onClick={closeAll}
                    ref={modalBackRef}
                    className=' flex h-full items-center justify-center'
                >
                    <div className='mx-2 flex flex-col gap-4 rounded-lg bg-white p-6 sm:mx-0'>
                        {isLoginWindowOpened && (
                            <LoginWindow
                                login={login}
                                password={password}
                                changeLogin={handleChangeLogin}
                                changePassword={handleChangePassword}
                                cancel={handleCancelLogin}
                                openRegister={handleOpenSignUpInstead}
                                loginUser={loginUser}
                                isWrongPassword={isWrongPassword}
                                isNoUser={isNoUser}
                            />
                        )}
                        {isRegisterWindowOpened && (
                            <RegisterWindow
                                login={login}
                                password={password}
                                changeLogin={handleChangeLogin}
                                changePassword={handleChangePassword}
                                cancel={handleCancelRegister}
                                registerUser={registerUser}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Autohrise;
