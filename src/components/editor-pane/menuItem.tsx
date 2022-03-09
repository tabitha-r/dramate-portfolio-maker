import React, { FC } from 'react';

const MenuItem:FC<{leftIcon?: any, rightIcon?: any, goToMenu?: string, setActiveMenu: any}> = (props) => {

    return (
        <div 
            className="menu-item" 
            onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
        >
            <span className={props.leftIcon ? "left-icon menu-icon" : ""}>{props.leftIcon}</span>

            {props.children}

            <span className={props.rightIcon ? "right-icon menu-icon" : ""}>{props.rightIcon}</span>
        </div>
    )
}

export default MenuItem;