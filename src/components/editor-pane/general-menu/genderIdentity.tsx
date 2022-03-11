import React, { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectPronouns, addPronoun, removePronoun, clearPronouns, changeGender } from '../../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCircleTrash, faCirclePlus, faCircleCheck } from '@fortawesome/pro-duotone-svg-icons';

const GenderInput: FC = () => {
    const dispatch = useAppDispatch();
    const pronouns = useAppSelector(selectPronouns);

    const [newPronoun, setNewPronoun] = useState('');
    const [newGender, setNewGender] = useState('');

    const handleGenderClick = (e: any) => {
        dispatch(changeGender(newGender))
        setNewGender('');
    };

    const handleGenderEnter = (e:any) => {
        if (e.key === 'Enter') {
            dispatch(changeGender(newGender))
            setNewGender('');
        }
    };

    const handleGenderChange = (e: any) => {
        setNewGender(e.currentTarget.value);
        dispatch(changeGender(e.currentTarget.value));
    };

    const handlePronounEnter = (e:any) => {
        if (e.key === 'Enter') {
            dispatch(addPronoun(newPronoun))
            setNewPronoun('');
        }
    };

    const handlePronounClick = (e:any) => {
        dispatch(addPronoun(newPronoun))
        setNewPronoun('');
    };

    return (
        <>
            <label className="text-label" htmlFor="gender">Identifying Gender</label>
            <br />
            <input
                name="gender"
                type="text"
                value={newGender}
                onChange={(e) => handleGenderChange(e)}
                onKeyDown={(e) => handleGenderEnter(e)}
            />
            <button
                onClick={(e) => handleGenderClick(e)}
                className="icon-button add-button"
            >
                <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <br />

            <div className="pronouns multi-op">
                <label className="text-label" htmlFor="add-pronoun">Preferred Pronouns</label>
                <br />
                <input
                    name="add-pronoun"
                    type="text"
                    id="new-pronoun"
                    value={newPronoun}
                    onChange={(e) => setNewPronoun(e.currentTarget.value)}
                    onKeyDown={(e) => handlePronounEnter(e)}
                />
                <button
                    onClick={(e) => handlePronounClick(e)}
                    className="icon-button add-button"
                >
                    <FontAwesomeIcon icon={faCirclePlus} />
                </button>
                <br />  
                {pronouns.length > 0 &&
                <div className="current-list">
                    <ul>
                    {pronouns.map((item:string, index:number)=>
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => dispatch(removePronoun(item))}
                                className="icon-button remove-button"
                            ><FontAwesomeIcon icon={faCircleMinus} /></button>
                        </li>
                    )}
                    </ul>
                    <button
                        onClick={() => dispatch(clearPronouns())}
                        className="icon-button trash-button"
                    >
                        <FontAwesomeIcon icon={faCircleTrash} />
                    </button>
                </div> 
                 }          
            </div>
        </>
    )
};

export default GenderInput;