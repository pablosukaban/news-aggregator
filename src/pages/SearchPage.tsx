import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { newsApi } from '../store/services/newsApi';
import { Facebook } from 'react-content-loader';
import ArticleItem from '../components/ArticleItem';
import { paramsEverythingSlice } from '../store/reducers/ParamsEverythingSlice';
import { sortByType } from '../types';
import { DateTime } from 'luxon';
import DatePicker from '../components/DatePicker';
import Heading from '../UI/Heading';

const SearchPage = () => {
    const params = useAppSelector((state) => state.paramsEverything);
    const { changeQuery, changeFromDate, changeToDate, changeSortBy } =
        paramsEverythingSlice.actions;
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState(params.q ? params.q : 'apple');

    const { data, isLoading } = newsApi.useFetchEverythingQuery(params);

    const handleSearchInputChanges = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as sortByType;
        dispatch(changeSortBy(value));
    };

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(changeFromDate(value));
    };
    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(changeToDate(value));
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
            <Heading>Поиск по ключевому слову</Heading>
            <div className='mb-4 flex justify-between'>
                <input
                    className='rounded-md border border-gray-400 p-2 outline-none transition hover:border-gray-300 focus:border-indigo-400'
                    value={inputValue}
                    onChange={handleSearchInputChanges}
                    placeholder='Поиск'
                />
                <div className='flex gap-2'>
                    <select
                        value={params.sortBy}
                        onChange={handleSortByChange}
                        className='cursor-pointer rounded-md border border-gray-400 bg-white p-2 shadow transition hover:border-gray-300'
                    >
                        <option disabled={true}>
                            Порядок сортировки статей
                        </option>
                        <option value='publishedAt'>По Дате Выхода</option>
                        <option value='popularity'>По Популярности</option>
                        <option value='relevancy'>По Релевантности</option>
                    </select>
                    <DatePicker
                        value={params.from ? params.from : ''}
                        onChange={handleFromChange}
                        max={params.to ? params.to : ''}
                    />
                    <DatePicker
                        value={params.to ? params.to : ''}
                        onChange={handleToChange}
                        max={params.to ? params.to : ''}
                    />
                </div>
            </div>
            {inputValue.length === 0 ? (
                <div>Введите ключевое слово для поиска</div>
            ) : (
                <div className='grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-3'>
                    {data.articles.map((item, index) => (
                        <ArticleItem key={index} data={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchPage;
