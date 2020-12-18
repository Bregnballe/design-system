import React from "react";

import { InputStyled, LabelStyled } from "./Checkbox.styles";
import { CheckboxProps } from './Checkbox.interface';

//import { InputStyled, LabelStyled, BoxStyled, SpanStyled } from "./Checkbox.styles";


export const Checkbox: React.FC<CheckboxProps> = ({
    children, 
    id, 
    index, 
    ...rest
}) => {


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (index === undefined) {
            rest.handleChange && rest.handleChange(e.currentTarget.checked)
            //if no index, run callback function w currentTarget.checked as argument
            } else {
            rest.handleChange && rest.handleChange(index)
            //else run callback function with index as argument
            console.log(index)
            }

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
                    onChange={handleChange}
                    onMouseDown={handleMouseDown}
                    type="checkbox"
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