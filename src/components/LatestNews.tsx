import React from 'react';
import { newsApi } from '../store/services/newsApi';
import { DateTime } from 'luxon';
import ArticleItem from './ArticleItem';
import FilterParams from './FilterParams';
import Heading from '../UI/Heading';
import { Facebook } from 'react-content-loader';
import { useAppSelector } from '../store/store';

const LatestNews = () => {
    const { country } = useAppSelector((state) => state.paramsCategory);

    if (!country) return <div>No country</div>;

    const { data, isLoading } = newsApi.useFetchTopHeadlinesQuery(country);

    if (isLoading) return <Facebook />;

    if (!data) return <div>No data</div>;

    const now = DateTime.now();

    return (
        <div className='mx-auto'>
            <div className='flex items-center justify-between'>
                <Heading>Последние Новости</Heading>
                <p>{now.toLocaleString(DateTime.DATETIME_MED)}</p>
            </div>
            <FilterParams />
            <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 xl:grid-cols-4'>
                {data.articles.map((item, index) => (
                    <ArticleItem data={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
