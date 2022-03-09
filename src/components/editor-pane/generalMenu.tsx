import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectFirstName, selectLastName, selectMiddleNames, selectOtherNames, selectGender, selectPronouns, selectNationality, selectMemberships, selectBirthday, selectShowAge } from '../../store/generalDetailsSlice';

const GeneralDetailMenu: FC = () => {

    return (
        <>
            <input
                type="text"
            />
        </>
    )
}

export default GeneralDetailMenu;