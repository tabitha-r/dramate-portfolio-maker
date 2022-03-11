import React, { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectOtherNames, addOtherName, removeOtherName, clearOtherNames } from '../../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCircleTrash, faCirclePlus } from '@fortawesome/pro-duotone-svg-icons';

const OtherNamesInput: FC = () => {
    const dispatch = useAppDispatch();
    const otherNames = useAppSelector(selectOtherNames);

    const [newOther, setNewOther] = useState('');

    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(addOtherName(newOther));
            setNewOther('');
        }
    }

    const handleClick = (e: any) => {
        dispatch(addOtherName(newOther));
        setNewOther('');
    }

    return (
        <>
            <div className="other-names multi-op">
                <label className="text-label" htmlFor="add-other-name">Other Names</label>
                <br />
                <input
                    name="add-other-name"
                    type="text"
                    id="new-other-name"
                    value={newOther}
                    onChange={(e) => setNewOther(e.currentTarget.value)}
                    onKeyDown={(e) => handleEnter(e)}
                />
                <button
                    onClick={(e) => handleClick(e)}
                    className="icon-button add-button"
                >
                    <FontAwesomeIcon icon={faCirclePlus} />
                </button>
                <br />   
                {otherNames.length > 0 &&        
                <div className="current-list">
                    <ul>
                    {otherNames.map((item:string, index:number)=>
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => dispatch(removeOtherName(item))}
                                className="icon-button remove-button"
                            ><FontAwesomeIcon icon={faCircleMinus} /></button>
                        </li>
                    )}
                    </ul>
                    <button
                        onClick={() => dispatch(clearOtherNames())}
                        className="icon-button trash-button"
                    >
                        <FontAwesomeIcon icon={faCircleTrash} />
                    </button>
                </div>
                }   
            </div>
        </>
    )
}

export default OtherNamesInput;