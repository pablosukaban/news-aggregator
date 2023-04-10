import React from 'react';
import { newsApi } from '../store/services/newsApi';
import ArticleItem from './ArticleItem';
import { capitalizeFirstLetter } from '../utils/utils';
import Heading from '../UI/Heading';
import { Facebook } from 'react-content-loader';
import { useAppSelector } from '../store/store';
import { someCategories } from '../customData';

interface PopularSectionProps {
    categoryName: string;
    categoryValue: string;
}

const PopularSection = ({
    categoryName,
    categoryValue,
}: PopularSectionProps) => {
    const { country } = useAppSelector((state) => state.paramsCategory);

    const { data, isLoading } = newsApi.useFetchTopHeadlinesByCategoryQuery({
        category: categoryValue,
        pageSize: 4,
        country: country,
    });

    if (isLoading) return <Facebook />;

    if (!data) return <div>Error</div>;

    return (
        <section className='mb-8'>
            <div>
                <Heading>{capitalizeFirstLetter(categoryName)}</Heading>
                <div className='grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-4'>
                    {data.articles.map((item, index) => (
                        <ArticleItem key={index} data={item} />
                    ))}
                </div>
            </div>
            <hr className='mt-4' />
        </section>
    );
};

const PopularByCategory = () => {
    return (
        <div className='mx-auto'>
            <div>
                {someCategories.map((item, index) => (
                    <PopularSection
                        key={index}
                        categoryName={item.name}
                        categoryValue={item.value}
                    />
                ))}
            </div>
        </div>
    );
};

export default PopularByCategory;
