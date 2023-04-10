import React, { useState } from 'react';
import { ArticleType } from '../types';
import { DateTime } from 'luxon';
import { FiExternalLink } from 'react-icons/fi';

interface ArticleItemProps {
    data: ArticleType;
    isCategoryList?: boolean;
}

const ArticleItem = ({ data, isCategoryList = false }: ArticleItemProps) => {
    const date = DateTime.fromISO(data.publishedAt);
    const formattedDate = date.toLocaleString({
        month: 'long',
        day: 'numeric',
    });

    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={`rounded-lg border border-transparent transition ${
                isHovered && 'border-gray-200 shadow-2xl'
            }`}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`relative flex h-full gap-4 ${
                    isCategoryList
                        ? 'min-h-[200px] flex-row '
                        : 'min-h-[430px] flex-col'
                }`}
            >
                <div className={`relative ${isCategoryList ? 'flex-1' : ''}`}>
                    {data.urlToImage ? (
                        <img
                            src={data.urlToImage}
                            className={`h-[200px] w-full ${
                                isCategoryList ? 'rounded-l-lg' : 'rounded-t-lg'
                            } object-cover`}
                        />
                    ) : (
                        <div
                            className={`h-[200px] w-full p-8 text-center  text-gray-300 ${
                                isCategoryList ? 'rounded-l-lg' : 'rounded-t-lg'
                            } bg-indigo-500`}
                        >
                            Извините, изображение в данный момент недоступно.
                        </div>
                    )}
                    <div
                        className={`absolute top-0 h-[200px] w-full rounded-t-lg bg-gray-900 bg-opacity-40 transition ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className='flex h-full items-center justify-center gap-2'>
                            <span className='font-semibold text-white'>
                                Полная статья
                            </span>
                            <FiExternalLink className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='mb-4 flex h-full flex-1 flex-col justify-between px-4'>
                    <div className='mb-4'>
                        <h1 className='mb-4 text-base font-semibold'>
                            {data.title}
                        </h1>
                        <p className='text-sm text-black'>
                            {data.description
                                ? data.description
                                : 'Читайте далее'}
                        </p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='text-sm font-medium text-gray-600'>
                            {data.author ? data.author : data.source.name}
                        </div>
                        <p className='text-sm'>{formattedDate}</p>
                    </div>
                </div>
                <a
                    href={data.url}
                    target='_blank'
                    className={`absolute z-10 h-full w-full rounded-lg  ${
                        isHovered ? 'block' : 'hidden'
                    }`}
                    rel='noreferrer'
                ></a>
            </div>
            <hr className='block h-0.5 sm:hidden' />
        </article>
    );
};

export default ArticleItem;
