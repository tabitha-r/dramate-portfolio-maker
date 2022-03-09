import React, { FC, useState } from 'react';
import { useAppSelector, useAppDispatch } from "../../app/hooks"; 
import { selectFirstName, changeFirstName } from '../../store/generalDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/pro-duotone-svg-icons'; 

const EditorPane:FC = () => {
    const firstName = useAppSelector(selectFirstName);
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(true);

    return (
        <main className={open ? "editor editor-open" : "editor editor-closed"} >
            <button 
                className="panel-toggle"
                onClick={() => setOpen(!open)} >
                <FontAwesomeIcon icon={open ? faAnglesLeft : faAnglesRight } />
            </button>
            <h1><span className="bold">Portfolio</span> Maker</h1>
            <input
                type="text"
                value={firstName}
                onChange={(e) => dispatch(changeFirstName(e.currentTarget.value))} />
        </main>
    )
};

export default EditorPane;