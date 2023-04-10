import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { newsApi } from '../store/services/newsApi';
import { ArticleType } from '../types';
import ArticleItem from '../components/ArticleItem';
import { capitalizeFirstLetter, divideArray } from '../utils/utils';
import Heading from '../UI/Heading';
import { Facebook } from 'react-content-loader';
import { useAppSelector } from '../store/store';
import { allCategories } from '../customData';

interface CategoryGridSectionProps {
    list: ArticleType[];
    title: string;
}

const CategoryGridSection = ({ list, title }: CategoryGridSectionProps) => {
    return (
        <div>
            <h1 className='mb-4 text-lg font-semibold'>{title}</h1>
            <article className='mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2'>
                {list.map((item) => (
                    <div key={item.url} className=''>
                        <ArticleItem data={item} />
                    </div>
                ))}
            </article>
        </div>
    );
};

interface CategoryListSectionProps {
    list: ArticleType[];
    title: string;
}

const CategoryListSection = ({ list, title }: CategoryListSectionProps) => {
    return (
        <article className='mb-8'>
            <h1 className='mb-4 text-lg font-semibold'>{title}</h1>
            <div className='flex flex-col gap-4 '>
                {list.map((item, index) => (
                    <ArticleItem
                        key={index}
                        data={item}
                        isCategoryList={true}
                    />
                ))}
            </div>
        </article>
    );
};

const CategoryPage = () => {
    const { name } = useParams();
    if (!name) return <div>Нет такой категории</div>;

    const { country } = useAppSelector((state) => state.paramsCategory);
    if (!country) return <div>Нет страны</div>;

    const { data } = newsApi.useFetchTopHeadlinesByCategoryQuery({
        category: name,
        country: country,
        pageSize: 18,
        page: 1,
    });

    const currentCategory =
        allCategories.find((item) => item.value === name)?.name || name;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!data) return <Facebook />;

    if (data.articles.length < 7) {
        return (
            <>
                <Heading>{capitalizeFirstLetter(currentCategory)}</Heading>
                <CategoryListSection
                    title='Популярно среди наших читателей'
                    list={data.articles}
                />
            </>
        );
    }

    if (data.articles.length < 13 && data.articles.length > 6) {
        const dividedList = divideArray(
            data.articles,
            Math.floor(data.articles.length / 2)
        );

        return (
            <>
                <Heading>{capitalizeFirstLetter(currentCategory)}</Heading>
                <CategoryGridSection
                    title='Подготовлено нашей редакцией'
                    list={dividedList[0]}
                />
                <CategoryListSection
                    title='Популярно среди наших читателей'
                    list={dividedList[1]}
                />
            </>
        );
    }

    const dividedList = divideArray(data.articles, 6);

    return (
        <>
            <Heading>{capitalizeFirstLetter(currentCategory)}</Heading>
            <CategoryGridSection
                title='Подготовлено нашей редакцией'
                list={dividedList[0]}
            />
            <CategoryListSection
                title='Популярно среди наших читателей'
                list={dividedList[1]}
            />
            <CategoryGridSection title='' list={dividedList[2]} />
        </>
    );
};

export default CategoryPage;
