export type sortByType = 'relevancy' | 'popularity' | 'publishedAt';

export type paramsCategoryType = {
    country?: string;
    q?: string | null;
    pageSize?: number;
    page?: number;
    category?: string;
};

export type paramsEverythingType = {
    q?: string;
    sortBy: sortByType;
    pageSize: number;
    page: number;
    from?: string;
    to?: string;
    language: string;
    domains?: string;
    excludeDomains?: string;
};

export type ArticleType = {
    source: {
        id: string;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
};

export type newsResponseType = {
    status: string;
    totalResults: number;
    articles: ArticleType[];
};
