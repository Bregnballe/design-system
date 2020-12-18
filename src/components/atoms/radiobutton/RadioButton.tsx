import React from "react";

import { InputStyled, LabelStyled } from "./RadioButton.styles";
import { RadioButtonProps } from './RadioButton.interface';

//import { InputStyled, LabelStyled, BoxStyled, SpanStyled } from "./Checkbox.styles";

export const RadioButton: React.FC<RadioButtonProps> = ({
    children, 
    groupName,
    id, 
    value, 
    ...rest
}) => {

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let targetValue = e.currentTarget.value;
        console.log("hey")

        rest.handleChange && rest.handleChange(targetValue)

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

    return (
            <LabelStyled
            {...rest}
            htmlFor={id}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            >
                {children}
                <InputStyled
                    name={groupName}
                    onChange={handleChange}
                    onMouseDown={handleMouseDown}
                    type="radio"
                    value={value}
                    id={id}
                    tabIndex={0}
                />
            </LabelStyled> 
    );
    };


    /*

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
    */   