import React, { useEffect, useRef } from 'react';

interface RegisterWindowProps {
    login: string;
    password: string;
    changeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    registerUser: () => void;
    cancel: () => void;
}

export const RegisterWindow = ({
    cancel,
    login,
    password,
    registerUser,
    changeLogin,
    changePassword,
}: RegisterWindowProps) => {
    const loginRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        loginRef.current?.focus();
    }, []);
    return (
        <>
            <h1 className='text-center'>Регистрация</h1>
            <input
                className='w-full rounded bg-gray-100 bg-opacity-20 px-3 py-2 transition focus:bg-gray-200 focus:outline-none'
                type='text'
                placeholder='Логин'
                value={login}
                onChange={changeLogin}
                ref={loginRef}
            />
            <input
                className='w-full rounded bg-gray-100 bg-opacity-20 px-3 py-2 transition focus:bg-gray-200 focus:outline-none'
                type='password'
                placeholder='Пароль'
                value={password}
                onChange={changePassword}
            />
            <div className='flex w-full flex-col justify-between gap-2 sm:flex-row'>
                <button
                    className='flex-1 rounded border border-gray-200 px-4 py-1 transition hover:border-gray-300 hover:shadow-md active:text-gray-600'
                    onClick={cancel}
                >
                    Отмена
                </button>
                <button
                    className='flex-1 rounded border border-gray-200 px-4 py-1 transition hover:border-gray-300 hover:shadow-md active:text-gray-600'
                    onClick={registerUser}
                >
                    Регистрация
                </button>
            </div>
        </>
    );
};

interface LoginWindowProps {
    login: string;
    password: string;
    isWrongPassword: boolean;
    isNoUser: boolean;
    changeLogin: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cancel: () => void;
    openRegister: () => void;
    loginUser: () => void;
}

export const LoginWindow = ({
    isWrongPassword,
    isNoUser,
    cancel,
    openRegister,
    changeLogin,
    login,
    changePassword,
    password,
    loginUser,
}: LoginWindowProps) => {
    const loginRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        loginRef.current?.focus();
    }, []);

    return (
        <>
            <h1 className='text-center'>Вход</h1>
            <input
                className='w-full rounded bg-gray-100 bg-opacity-20 px-3 py-2 transition focus:bg-gray-200 focus:outline-none'
                type='text'
                placeholder='Логин'
                value={login}
                onChange={changeLogin}
                ref={loginRef}
            />
            <input
                className='w-full rounded bg-gray-100 bg-opacity-20 px-3 py-2 transition focus:bg-gray-200 focus:outline-none'
                type='password'
                placeholder='Пароль'
                value={password}
                onChange={changePassword}
            />
            <p className='text-center text-red-400'>
                {isWrongPassword && 'Неправильный пароль'}
                {isNoUser && 'Пользователь не найден'}
            </p>
            <div className='flex w-full flex-col justify-between gap-2 sm:flex-row'>
                <button
                    className='flex-1 rounded border border-gray-200 px-4 py-1 transition hover:border-gray-300 hover:shadow-md active:text-gray-600'
                    onClick={cancel}
                >
                    Отмена
                </button>
                <button
                    className='flex-1 rounded border border-gray-200 px-4 py-1 transition hover:border-gray-300 hover:shadow-md active:text-gray-600'
                    onClick={loginUser}
                >
                    Вход
                </button>
            </div>

            <h2 className='text-sm text-gray-400'>
                Еще не зарегистрированы?{' '}
                <span
                    className='cursor-pointer text-gray-800 hover:text-black'
                    onClick={openRegister}
                >
                    Регистрация
                </span>
            </h2>
        </>
    );
};
