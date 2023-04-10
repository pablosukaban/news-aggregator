import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    paramsEverythingType,
    newsResponseType,
    paramsCategoryType,
} from '../../types';

const BASE_URL = 'https://newsapi.org/v2/';
// const API_KEY = '0b5bf63e029948648360dd0c6df28821';
// const API_KEY = '1929e0d33ce54811881f019dbd8df434';
const API_KEY = 'fcd1ae799a5a4f8abc928d85e50c28f6';

export const newsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        // fetchSources: builder.query({
        //     query: () => ({
        //         url: '/sources',
        //         params: {
        //             apiKey: API_KEY,
        //         },
        //     }),
        // }),
        fetchEverything: builder.query<newsResponseType, paramsEverythingType>({
            query: (params) => ({
                url: '/everything',
                params: {
                    apiKey: API_KEY,
                    ...params,
                },
            }),
        }),
        fetchTopHeadlines: builder.query<newsResponseType, string>({
            query: (country) => ({
                url: '/top-headlines',
                params: {
                    apiKey: API_KEY,
                    country: country,
                    pageSize: '8',
                    category: 'general',
                },
            }),
        }),
        fetchTopHeadlinesByCategory: builder.query<
            newsResponseType,
            paramsCategoryType
        >({
            query: (params) => ({
                url: '/top-headlines',
                params: {
                    apiKey: API_KEY,
                    ...params,
                },
            }),
        }),
    }),
});

// everything - language
// top headlines - country
// sources - language contry
