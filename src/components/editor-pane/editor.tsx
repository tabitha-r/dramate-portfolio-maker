import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight, faCopyright } from '@fortawesome/pro-duotone-svg-icons'; 
import { ReactComponent as Logo } from '../../media/InlineLogoWhiteText.svg';
import Menu from './menu';

const EditorPane:FC = () => {
    const [open, setOpen] = useState(true);

    return (
        <main className="editor" >
            <div className={open ? "editor-open" : "editor-closed"}>
                <button
                    className="panel-toggle"
                    onClick={() => setOpen(!open)} >
                    <FontAwesomeIcon icon={open ? faAnglesLeft : faAnglesRight } />
                </button>
                <div className="editor-content">
                    <a href="https://www.dramate.co.uk" target="_blank" rel="noreferrer"><Logo className="logo" /></a>
                    <h1><span className="bold">Portfolio</span> Maker</h1>
                    <Menu />
                    <p className="copyright"><FontAwesomeIcon icon={faCopyright} /> <a href="https://www.tabithariley.digital" target="_blank" rel="noreferrer">Tabitha Riley</a> 2022. All Rights Reserved.</p>
                </div>
            </div>
        </main>
    )
};

export default EditorPane;