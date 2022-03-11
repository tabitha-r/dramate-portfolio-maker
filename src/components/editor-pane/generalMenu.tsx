import React, { FC } from 'react';
import FirstLastNameInput from './general-menu/firstLastName';
import MiddleNamesInput from './general-menu/middleNames';
import OtherNamesInput from './general-menu/otherNames';
import GenderInput from './general-menu/genderIdentity';
import MembershipInput from './general-menu/memberships';
import BirthdayInput from './general-menu/age';
import NationalityInput from './general-menu/nationality';

const GeneralDetailMenu: FC = () => {

    return (
        <div className='editor-menu'>
            <FirstLastNameInput />
            
            <MiddleNamesInput />

            <OtherNamesInput />

            <GenderInput />

            <NationalityInput />

            <MembershipInput />

            <BirthdayInput />
        </div>
    )
}

export default GeneralDetailMenu;