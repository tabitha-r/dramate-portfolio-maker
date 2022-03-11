import React, { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectMiddleNames, addMiddleName, removeMiddleName, clearMiddleNames } from '../../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCircleTrash, faCirclePlus } from '@fortawesome/pro-duotone-svg-icons';

const MiddleNamesInput: FC = () => {
    const dispatch = useAppDispatch();
    const middleNames = useAppSelector(selectMiddleNames);

    const [newMiddle, setNewMiddle] = useState('');

    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(addMiddleName(newMiddle));
            setNewMiddle('');
        }
    }

    const handleClick = (e: any) => {
        dispatch(addMiddleName(newMiddle));
        setNewMiddle('');
    }

    return (
        <>
            <div className="middle-names multi-op">
                <label className="text-label" htmlFor="add-middle-name">Middle Names</label>
                <br />
                <input
                    name="add-middle-name"
                    type="text"
                    id="new-middle-name"
                    value={newMiddle}
                    onChange={(e) => setNewMiddle(e.currentTarget.value)}
                    onKeyDown={(e) => handleEnter(e)}
                />
                <button
                    onClick={(e) => handleClick(e)}
                    className="icon-button add-button"
                >
                    <FontAwesomeIcon icon={faCirclePlus} />
                </button>
                <br />   
                {middleNames.length > 0 &&
                <div className="current-list">
                    <ul>
                    {middleNames.map((item:string, index:number)=>
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => dispatch(removeMiddleName(item))}
                                className="icon-button remove-button"
                            ><FontAwesomeIcon icon={faCircleMinus} /></button>
                        </li>
                    )}
                    </ul>
                    <button
                        onClick={() => dispatch(clearMiddleNames())}
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

export default MiddleNamesInput;