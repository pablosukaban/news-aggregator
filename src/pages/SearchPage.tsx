import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { newsApi } from '../store/services/newsApi';
import { Facebook } from 'react-content-loader';
import ArticleItem from '../components/ArticleItem';
import { paramsEverythingSlice } from '../store/reducers/ParamsEverythingSlice';

const SearchPage = () => {
    const params = useAppSelector((state) => state.paramsEverything);
    const { changeQuery } = paramsEverythingSlice.actions;
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState('apple');

    const { data, isLoading } = newsApi.useFetchEverythingQuery(params);

    const handleSearchInputChanges = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        setInputValue(value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(changeQuery(inputValue));
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    if (isLoading) return <Facebook />;

    if (!data) return <div>Error</div>;

    return (
        <div className=''>
            <div>
                <input
                    className='w-full border p-4'
                    value={inputValue}
                    onChange={handleSearchInputChanges}
                    placeholder='Ключевое слово'
                />
            </div>
            {inputValue.length === 0 ? (
                <div>Введите ключевое слово для поиска</div>
            ) : (
                <div className='grid grid-cols-3'>
                    {data.articles.map((item, index) => (
                        <ArticleItem key={index} data={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
