import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { paramsEverythingType, sortByType } from '../../types';
import { DateTime } from 'luxon';

const initialState: paramsEverythingType = {
    sortBy: 'publishedAt',
    pageSize: 12,
    page: 1,
    q: 'bitcoin',
    language: 'en',
    from: DateTime.now().toFormat('yyyy-MM-dd'),
    to: DateTime.now().minus({ weeks: 1 }).toFormat('yyyy-MM-dd'),
    searchIn: '',
};

export const paramsEverythingSlice = createSlice({
    name: 'paramsEverything',
    initialState,
    reducers: {
        changeQuery: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        changeCurrentPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
        changeSortBy: (state, action: PayloadAction<sortByType>) => {
            state.sortBy = action.payload;
        },
        changeFromDate: (state, action: PayloadAction<string>) => {
            state.from = action.payload;
        },
        changeToDate: (state, action: PayloadAction<string>) => {
            state.to = action.payload;
        },
    },
});

// export const selectParams = createSelector(
//     (state: RootState) => state.params,
//     (params) => params
// );
