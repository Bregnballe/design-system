import React, { useState } from "react";

import { InputStyled, LabelStyled, BoxStyled, SpanStyled } from "./RadioButton.styles";
import { Icon } from '../../atoms/icon/Icon';
import { RadioButtonProps } from './RadioButton.interface';



export const RadioButton: React.FC<RadioButtonProps> = ({label="Label", asButton=false, ...props}) => {

    const [radioButtonState, setRadioButtonState] = useState<boolean>(false);


    /*########### CHANGE TODOITEM COMPLETE STATE ###########*/
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let targetValue = e.currentTarget.checked;

        setRadioButtonState(targetValue);

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

    console.log(radioButtonState);
    console.log(props);


    return (
            <LabelStyled
            {...props}
            asButton={asButton}
            checked={radioButtonState}
            htmlFor={"radioButton"}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
            >
                    {props.hasLabel && 
                    <SpanStyled {...props}>{label}</SpanStyled>
                }
                <BoxStyled
                    {...props}
                    checked={radioButtonState}
                >
                    {radioButtonState &&
                        <Icon name="circle" color="primary" {...props} />

                    }
                </BoxStyled>
                <InputStyled
                    onChange={handleChange}
                    onMouseDown={handleMouseDown}
                    type="radio"
                    id={"radioButton"}
                    checked={radioButtonState}
                    tabIndex={0}
                />
            </LabelStyled> 
    );
    };
