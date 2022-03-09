import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface GeneralDetailsState {
    firstName: string;
    lastName: string;
    middleNames: string[];
    otherNames: string[];
    gender: string;
    pronouns: string[];
    nationality: string;
    memberships: string[];
    birthday: Date;
    showAge: boolean;
}

const initialState: GeneralDetailsState = {
    firstName: 'First Name', 
    lastName: 'Last Name',
    middleNames: ['MiddleNameA', 'MiddleNameB'],
    otherNames: ['OtherNameA', 'OtherNameB'],
    gender: 'Gender',
    pronouns: ['Preferred', 'Pronouns'],
    nationality: 'Nationality',
    memberships: ['MembershipA', 'MembershipB'],
    birthday: new Date(),
    showAge: true
};

export const generalDetailsSlice = createSlice({
    name: 'generalDetails',
    initialState,
    reducers: {
        changeFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        changeLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        changeGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        changeNationality: (state, action: PayloadAction<string>) => {
            state.nationality = action.payload;
        },
        changeBirthday: (state, action: PayloadAction<Date>) => {
            state.birthday = action.payload;
        },
        toggleShowAge: (state) => {
            state.showAge = !state.showAge;
        },
        addMiddleName: (state, action: PayloadAction<string>) => {
            state.middleNames.push(action.payload);
        },
        removeMiddleName: (state, action: PayloadAction<string>) => {
            state.middleNames.splice(state.middleNames.indexOf(action.payload));
        },
        clearMiddleNames: (state) => {
            state.middleNames = [];
        },
        addOtherName: (state, action: PayloadAction<string>) => {
            state.otherNames.push(action.payload);
        },
        removeOtherName: (state, action: PayloadAction<string>) => {
            state.otherNames.splice(state.otherNames.indexOf(action.payload));
        },
        clearOtherNames: (state, action: PayloadAction<string>) => {
            state.otherNames = [];
        },
        addPronoun: (state, action: PayloadAction<string>) => {
            state.pronouns.push(action.payload);
        },
        removePronoun: (state, action: PayloadAction<string>) => {
            state.pronouns.splice(state.pronouns.indexOf(action.payload));
        },
        clearPronouns: (state) => {
            state.pronouns = [];
        },
        addMembership: (state, action: PayloadAction<string>) => {
            state.memberships.push(action.payload);
        },
        removeMembership: (state, action: PayloadAction<string>) => {
            state.memberships.splice(state.memberships.indexOf(action.payload));
        },
        clearMemberships: (state) => {
            state.memberships = [];
        }
    }
});

export const {
    changeFirstName,
    changeLastName,
    addMiddleName,
    removeMiddleName,
    clearMiddleNames,
    addOtherName,
    removeOtherName,
    clearOtherNames,
    changeGender,
    addPronoun,
    removePronoun,
    clearPronouns,
    changeNationality,
    addMembership,
    removeMembership,
    clearMemberships,
    changeBirthday,
    toggleShowAge
} = generalDetailsSlice.actions;

export const selectFirstName = (state: RootState) => state.generalDetails.firstName;
export const selectLastName = (state: RootState) => state.generalDetails.lastName;
export const selectMiddleNames = (state: RootState) => state.generalDetails.middleNames;
export const selectOtherNames = (state: RootState) => state.generalDetails.otherNames;
export const selectGender = (state: RootState) => state.generalDetails.gender;
export const selectPronouns = (state: RootState) => state.generalDetails.pronouns;
export const selectNationality = (state: RootState) => state.generalDetails.nationality;
export const selectMemberships = (state: RootState) => state.generalDetails.memberships;
export const selectBirthday = (state: RootState) => state.generalDetails.birthday;
export const selectShowAge = (state: RootState) => state.generalDetails.showAge;

export default generalDetailsSlice.reducer;
