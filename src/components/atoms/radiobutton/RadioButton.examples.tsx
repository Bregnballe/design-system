import React, {useState} from 'react'
import {RadioButton} from './RadioButton'
import {Icon} from '../icon/Icon'
import {RadioButtonProps} from './RadioButton.interface'
import {BoxStyled} from "./RadioButton.styles";
import {Label} from "../label/Label"



export const MyLabelRadioButton: React.FC<RadioButtonProps> = ({componentSize, asButton, layout, fluid}) => {

    const [radioButtonState, setRadioButtonState] = useState<string | null>(null);

    const handleChange = (val:string) => {
        setRadioButtonState(val)
    };


    return (
        <RadioButton asButton={asButton} layout={layout} fluid={fluid} id="1" value="1" checked={radioButtonState === "1" } componentSize={componentSize} handleChange={handleChange}> 
            <BoxStyled
            componentSize={componentSize}
            checked={radioButtonState === "1" }
            >
                { radioButtonState && <Icon name="circle" color="primary" animation={true}/> }
            </BoxStyled>    
            <Label componentSize={componentSize}>Label</Label>
        </RadioButton>

    )
}


export const MyRadioButton: React.FC<RadioButtonProps> = ({componentSize, asButton, layout, fluid}) => {

    const [radioButtonState, setRadioButtonState] = useState<string | null>(null);

    const handleChange = (val:string) => {
        setRadioButtonState(val)
    };


    return (
        <RadioButton asButton={asButton} layout={layout} fluid={fluid} id="2" value="2" checked={radioButtonState === "2" } componentSize={componentSize} handleChange={handleChange}> 
            <BoxStyled
            componentSize={componentSize}
            checked={radioButtonState === "2"}
            >
                { radioButtonState && <Icon name="circle" color="primary" animation={true} /> }
            </BoxStyled>    
        </RadioButton>

    )
}

export const MyLabelRadioButtonReversed: React.FC<RadioButtonProps> = ({componentSize, asButton, layout, fluid}) => {

    const [radioButtonState, setRadioButtonState] = useState<string | null>(null);

    const handleChange = (val:string) => {
        setRadioButtonState(val)
    };

    return (
        <RadioButton asButton={asButton} layout={layout} fluid={fluid}  id="3" value="3" checked={radioButtonState === "3" } componentSize={componentSize} handleChange={handleChange}> 
            <Label componentSize={componentSize}>Label</Label>
            <BoxStyled
            componentSize={componentSize}
            checked={radioButtonState === "3"}
            >
                { radioButtonState && <Icon name="circle" color="primary" animation={true}/> }
            </BoxStyled>    
        </RadioButton>

    )
}


