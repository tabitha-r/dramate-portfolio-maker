import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

type Image = {
    url: string;
    alt: string;
};

export interface ImagesState {
    mainHeadshot: Image;
    additionalHeadshots: Image[];
    gallery: Image[];
};

const initialState: ImagesState = {
    mainHeadshot: {url: 'http://via.placeholder.com/360x480', alt: 'Main Headshot'},
    additionalHeadshots: [{url: 'http://via.placeholder.com/360x480', alt: 'Second Headshot'}, {url: 'http://via.placeholder.com/360x480', alt: 'Third Headshot'}],
    gallery: [{url: 'http://via.placeholder.com/640x360', alt: 'Actor in Production A'}, {url: 'http://via.placeholder.com/640x360', alt: 'Actor in Production B'}, {url: 'http://via.placeholder.com/640x360', alt: 'Actor Showing Skill'}]
};

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        changeMainHeadshot: (state, action: PayloadAction<Image>) => {
            state.mainHeadshot = action.payload
        },
    }
});

export const selectMainHeadshot = (state: RootState) => state.images.mainHeadshot;

export default imagesSlice.reducer;