import React, { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectMemberships, addMembership, removeMembership, clearMemberships } from '../../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus, faCircleTrash } from '@fortawesome/pro-duotone-svg-icons';

const MembershipInput: FC = () => {
    const dispatch = useAppDispatch();
    const memberships = useAppSelector(selectMemberships);

    const [newMembership, setNewMembership] = useState('');

    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            dispatch(addMembership(newMembership));
            setNewMembership('');
        }
    }

    const handleClick = (e: any) => {
        dispatch(addMembership(newMembership));
        setNewMembership('');
    }

    return (
        <>
            <div className="memberships multi-op">
                <label className="text-label" htmlFor="add-membership">Memberships & Affiliations</label>
                <br />
                <input
                    name="add-membership"
                    type="text"
                    id="new-membership"
                    value={newMembership}
                    onChange={(e) => setNewMembership(e.currentTarget.value)}
                    onKeyDown={(e) => handleEnter(e)}
                />
                <button
                    onClick={(e) => handleClick(e)}
                    className="icon-button add-button"
                >
                    <FontAwesomeIcon icon={faCirclePlus} />
                </button>
                <br /> 
                
                {memberships.length > 0 &&             
                    <div className="current-list">
                        <ul>
                        {memberships.map((item:string, index:number)=>
                            <li key={index}>
                                {item}
                                <button
                                    onClick={() => dispatch(removeMembership(item))}
                                    className="icon-button remove-button"
                                ><FontAwesomeIcon icon={faCircleMinus} /></button>
                            </li>
                        )}
                        </ul>
                        <button
                            onClick={() => dispatch(clearMemberships())}
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

export default MembershipInput;