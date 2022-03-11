import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { changeNationality } from '../../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/pro-duotone-svg-icons';

const NationalityInput: FC = () => {
    const dispatch = useAppDispatch();

    const [newNationality, setNewNationality] = useState('');

    const handleChange = (e: any) => {
        setNewNationality(e.currentTarget.value);
        dispatch(changeNationality(e.currentTarget.value));
    }

    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(changeNationality(newNationality));
            setNewNationality('');
        }
    };

    const handleClick = (e: any) => {
        dispatch(changeNationality(newNationality))
        setNewNationality('');
    };

    return (
        <>
            <label className="text-label" htmlFor="nationality">Nationality</label>
            <br />
            <input
                name="nationality"
                type="text"
                value={newNationality}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleEnter(e)}
            />
            <button
                onClick={(e) => handleClick(e)}
                className="icon-button add-button"
            >
                <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <br />
        </>
    )
};

export default NationalityInput;