import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeBirthday, toggleShowAge, toggleShowBirthday, selectShowAge, selectShowBirthday } from '../../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/pro-duotone-svg-icons';

const BirthdayInput: FC = () => {
    const dispatch = useAppDispatch();
    const showBirthday = useAppSelector(selectShowBirthday);
    const showAge = useAppSelector(selectShowAge);

    const [newBirthday, setNewBirthday] = useState('new Date()');

    const handleBirthdayClick = (e: any) => {
        dispatch(changeBirthday(new Date(newBirthday)));
        setNewBirthday('');
    }

    const handleBirthdayEnter = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(changeBirthday(new Date(newBirthday)));
            setNewBirthday('');
        }
    }

    return (
        <>
            <label className="text-label" htmlFor="birthday">Date of Birth</label>
            <br />
            <input
                name="birthday"
                type="date"
                value={newBirthday.toString()}
                onChange={(e) => setNewBirthday(e.currentTarget.value)}
                onKeyDown={(e) => handleBirthdayEnter(e)}
            />
            <button
                onClick={(e) => handleBirthdayClick(e)}
                className="icon-button add-button"
            >
                <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <br />

            <div className="checkbox-section">
                <label className="text-label" htmlFor="show-birthday">Show birthday?</label>
                <label className="checkbox">
                    {showBirthday ? 
                    <input
                        name="show-birthday"
                        type="checkbox"
                        onChange={(e) => dispatch(toggleShowBirthday())}
                        checked
                    /> :
                    <input
                        name="show-birthday"
                        type="checkbox"
                        onChange={(e) => dispatch(toggleShowBirthday())}
                    /> }
                    <svg viewBox="0 0 21 18">
                        <symbol id="tick-path2" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        </symbol>
                        <defs>
                            <mask id="tick2">
                                <use className="tick mask" href="#tick-path2" />
                            </mask>
                        </defs>
                        <use className="tick" href="#tick-path2" stroke="currentColor" />
                        <path fill="white" mask="url(#tick2)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
                    </svg>
                    <svg className="lines" viewBox="0 0 11 11">
                        <path d="M5.88086 5.89441L9.53504 4.26746" />
                        <path d="M5.5274 8.78838L9.45391 9.55161" />
                        <path d="M3.49371 4.22065L5.55387 0.79198" />
                    </svg>
                </label>
            </div>
            <br />

            <div className="checkbox-section">
                <label className="text-label" htmlFor="show-age">Show age?</label>
                <label className="checkbox">
                    {showAge ?
                    <input
                        name="show-age"
                        type="checkbox"
                        onChange={(e) => dispatch(toggleShowAge())}
                        checked
                    /> :
                    <input
                        name="show-age"
                        type="checkbox"
                        onChange={(e) => dispatch(toggleShowAge())}
                    /> }
                    <svg viewBox="0 0 21 18">
                        <symbol id="tick-path1" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                        </symbol>
                        <defs>
                            <mask id="tick1">
                                <use className="tick mask" href="#tick-path1" />
                            </mask>
                        </defs>
                        <use className="tick" href="#tick-path1" stroke="currentColor" />
                        <path fill="white" mask="url(#tick1)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
                    </svg>
                    <svg className="lines" viewBox="0 0 11 11">
                        <path d="M5.88086 5.89441L9.53504 4.26746" />
                        <path d="M5.5274 8.78838L9.45391 9.55161" />
                        <path d="M3.49371 4.22065L5.55387 0.79198" />
                    </svg>
                </label>
            </div>
        </>
    )
};

export default BirthdayInput;