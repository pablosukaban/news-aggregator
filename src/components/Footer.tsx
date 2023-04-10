import React from 'react';
import { Link } from 'react-router-dom';
import Apple from '../assets/apple.svg';
import GooglePlay from '../assets/google.svg';
import GitHub from '../assets/github.svg';
import YouTube from '../assets/youtube.svg';
import Twitter from '../assets/twitter.svg';
import { useAppDispatch } from '../store/store';
import { paramsCategorySlice } from '../store/reducers/ParamsCategorySlice';
import { paramsEverythingSlice } from '../store/reducers/ParamsEverythingSlice';
import { footerLinksList, languages } from '../customData';

const FooterLinks = () => {
    return (
        <div className='flex flex-wrap justify-between gap-4 pb-4 lg:gap-0'>
            {footerLinksList.map((item, index) => (
                <div key={index} className='flex flex-col gap-2'>
                    <h3 className='text-xl font-semibold'>{item.title}</h3>
                    {item.links.map((l, idx) => (
                        <Link to='' key={idx}>
                            <div className='text-gray-600 transition hover:text-gray-500'>
                                {l}
                            </div>
                        </Link>
                    ))}
                </div>
            ))}
            <div className='flex flex-col gap-2'>
                <h3 className='whitespace-normal text-xl font-semibold'>
                    Получите приложение
                </h3>
                <a
                    href='https://www.apple.com/app-store/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1'
                >
                    <img src={Apple} />
                </a>
                <a
                    href='https://play.google.com/store/apps'
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1'
                >
                    <img className='h-full' src={GooglePlay} />
                </a>
            </div>
        </div>
    );
};

const FooterInfo = () => {
    const dispatch = useAppDispatch();
    const { changeCountry } = paramsCategorySlice.actions;
    const { changeLanguage } = paramsEverythingSlice.actions;

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const list = value.split('-');
        const lan = list[0];
        const country = list[1];

        dispatch(changeCountry(country));
        dispatch(changeLanguage(lan));
    };

    return (
        <div className='border-t border-gray-300 pt-8'>
            <div className='flex flex-wrap items-start justify-between gap-4 '>
                <div className='flex items-center gap-2'>
                    <label>Язык</label>
                    <select
                        onChange={handleSelectChange}
                        className='w-max cursor-pointer rounded border-2 bg-white px-4 py-2 transition focus:border-indigo-400'
                    >
                        {languages.map((item, index) => (
                            <option key={index} value={item.language}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <div>Следите в соц. сетях</div>
                    <div className='flex w-full items-center justify-between'>
                        <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='rounded-full p-1 transition hover:bg-gray-200'
                                src={Twitter}
                            />
                        </a>
                        <a
                            href='https://github.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='rounded-full p-1 transition hover:bg-gray-200'
                                src={GitHub}
                            />
                        </a>
                        <a
                            href='https://www.youtube.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='rounded-full p-1 transition hover:bg-gray-200'
                                src={YouTube}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>&copy; 2023. News Aggregator. Все права защищены.</div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className='w-full border-t border-t-gray-300'>
            <div className='container mx-auto pb-8 pt-12'>
                <div className='flex flex-col gap-8'>
                    <FooterLinks />
                    <FooterInfo />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
