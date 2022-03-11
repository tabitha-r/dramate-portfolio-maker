import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './menuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPaintbrushPencil, faAngleLeft, faCommentDots, faImage, faMasksTheater, faBookUser, faIdCardClip, faEye, faGraduationCap, faMobileButton, faAwardSimple, faSidebar, faInfo, faFloppyDisk } from '@fortawesome/pro-duotone-svg-icons';
import GeneralDetailMenu from './generalMenu';

const Menu:FC = () => {
    const [activeMenu, setActiveMenu] = useState('root');

    return (
        <div className="editor-controls">
            <CSSTransition
                in={activeMenu === 'root'}
                unmountOnExit
                timeout={500}
                classNames="menu-root">
                <div className="menu">

                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faSidebar} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='sections'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Section Display</p>
                    </MenuItem>    
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faPaintbrushPencil} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='design'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Design</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faIdCardClip} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='general'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>General Details</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faBookUser} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='bio'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Bio</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faEye} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='appearance'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Appearance</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faMasksTheater} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='credits'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Credits</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faCommentDots} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='voice'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Languages & Accents</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAwardSimple} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='skills'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Skills</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faGraduationCap} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='education'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Education & Training</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faImage} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='images'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Images</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faMobileButton} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='contact'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Contact</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faFloppyDisk} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='save'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Save</p>
                    </MenuItem>
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faInfo} fixedWidth />} 
                        rightIcon={<FontAwesomeIcon icon={faAngleRight} fixedWidth />} 
                        goToMenu='help'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Help</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'sections'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'design'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'general'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                    <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>
                    <GeneralDetailMenu />

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'bio'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'appearance'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'credits'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'voice'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'skills'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'education'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'images'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'contact'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'save'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'help'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary">
                <div className="menu">
                        
                <MenuItem
                        leftIcon={<FontAwesomeIcon icon={faAngleLeft} fixedWidth />} 
                        goToMenu='root'
                        setActiveMenu={setActiveMenu}
                    >
                        <p>Back</p>
                    </MenuItem>

                </div>
            </CSSTransition>
        </div>
    )
}

export default Menu;