import React, { useState } from "react";

import { InputStyled, LabelStyled, BoxStyled, SpanStyled } from "./Checkbox.styles";
import { Icon } from '../../atoms/icon/Icon';
import { CheckboxProps } from './Checkbox.interface';



export const Checkbox: React.FC<CheckboxProps> = ({label="Label", asButton=false, ...props}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);


    /*########### CHANGE TODOITEM COMPLETE STATE ###########*/
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let targetValue = e.currentTarget.checked;

        setCheckboxState(targetValue);

    };

    const handleMouseDown = (e: React.FormEvent<HTMLLabelElement | HTMLInputElement>) => {
        e.preventDefault();
        // buttons receive focus on mousedown, so preventing that is as simple as using e.preventDefault()
    };

    const handleClick = (e: React.FormEvent<HTMLLabelElement>) => {
        if (e.target === e.currentTarget) {
            e.preventDefault();
            // @ts-ignore ... for some reason it says object is possibly null
            (e.currentTarget as HTMLLabelElement).control.click();
        }
        /*Clickhandler gets called twice. One time for the label and one for the checkbox. 
        Prevent default when the handler is called from the label. Instead call checkbox click.
        */
    };

    console.log(checkboxState);
    console.log(props);


    return (
            <LabelStyled
            {...props}
            asButton={asButton}
            checked={checkboxState}
            htmlFor={"checkbox"}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            >
                    {props.hasLabel && 
                    <SpanStyled {...props}>{label}</SpanStyled>
                }
                <BoxStyled
                    {...props}
                    checked={checkboxState}
                >
                    {checkboxState &&
                        <Icon name="check" color="primary" {...props} />
                    }
                </BoxStyled>
                <InputStyled
                    onChange={handleChange}
                    onMouseDown={handleMouseDown}
                    type="checkbox"
                    id={"checkbox"}
                    checked={checkboxState}
                    tabIndex={0}
                />
            </LabelStyled> 
    );
    };
