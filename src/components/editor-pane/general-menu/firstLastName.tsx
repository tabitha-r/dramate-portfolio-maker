import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { changeFirstName, changeLastName } from '../../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/pro-duotone-svg-icons';

const FirstLastNameInput: FC = () => {
    const dispatch = useAppDispatch();
    const [newFirst, setNewFirst] = useState('');
    const [newLast, setNewLast] = useState('');

    const firstNameChange = (e: any) => {
        setNewFirst(e.currentTarget.value);
        dispatch(changeFirstName(e.currentTarget.value));
    }

    const lastNameChange = (e: any) => {
        setNewLast(e.currentTarget.value);
        dispatch(changeLastName(e.currentTarget.value));
    }

    const firstNameEnter = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(changeFirstName(newFirst));
            setNewFirst('');
        }
    };

    const lastNameEnter = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(changeLastName(newLast))
            setNewLast('');
        }
    };

    const handleFirstClick = (e: any) => {
        dispatch(changeFirstName(newFirst))
        setNewFirst('');
    }

    const handleLastClick = (e: any) => {
        dispatch(changeLastName(newLast))
        setNewLast('');
    }

    return (
        <>
            <label className="text-label" htmlFor="first-name">First Name</label>
            <br />
            <input
                name="first-name"
                type="text"
                value={newFirst}
                onChange={(e) => firstNameChange(e)}
                onKeyDown={(e) => firstNameEnter(e)}
            />
            <button
                onClick={(e) => handleFirstClick(e)}
                className="icon-button add-button"
            >
                <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <br />
            <label className="text-label" htmlFor="last-name">Last Name</label>
            <br />
            <input
                name="last-name"
                type="text"
                value={newLast}
                onChange={(e) => lastNameChange(e)}
                onKeyDown={(e) => lastNameEnter(e)}
            />
            <button
                onClick={(e) => handleLastClick(e)}
                className="icon-button add-button"
            >
                <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <br />
        </>
    )
} 

export default FirstLastNameInput;