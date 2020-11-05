import React, { useState } from "react";

import { CheckboxStyled, LabelStyled, CheckStyled } from "./Checkbox.styles";
import { CheckboxProps } from './Checkbox.interface';


export const Checkbox: React.FC<CheckboxProps> = ({...props}) => {

    const [checkboxState, setCheckboxState] = useState(false);


    /*########### CHANGE TODOITEM COMPLETE STATE ###########*/
    const handleChange = (e: React.FormEvent) => {
        let targetValue = (e.target as HTMLInputElement).checked;

        setCheckboxState(targetValue);

    };

    const handleMouseDown = (e: React.FormEvent) => {
        e.preventDefault();
        // buttons receive focus on mousedown, so preventing that is as simple as using e.preventDefault()
    };

    const handleClick = (e: React.FormEvent) => {
        if (e.target === e.currentTarget) {
            e.preventDefault();
            (e.target as HTMLLabelElement).control.click();
        }
        /*Clickhandler gets called twice. One time for the label and one for the checkbox. 
        Prevent default when the handler is called from the label. Instead call checkbox click.
        */
    };


    return (
        <LabelStyled
        {...props}
        htmlFor={"checkbox"}
        checked={checkboxState}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        >
            <CheckboxStyled
                {...props}
                onChange={handleChange}
                type="checkbox"
                id={"checkbox"}
                checked={checkboxState}
                onMouseDown={handleMouseDown}
                tabIndex="0"
            />
            <CheckStyled
                {...props}
                checked={checkboxState}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                onMouseDown={handleMouseDown}
            >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </CheckStyled>
        </LabelStyled>
    );
    };
