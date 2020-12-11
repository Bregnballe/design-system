import React, {useState} from 'react'
import {Checkbox} from './Checkbox'
import {Icon} from '../icon/Icon'
import {CheckboxProps} from './Checkbox.interface'
import {BoxStyled} from "./Checkbox.styles";
import {Label} from "../../atoms/label/Label"

export const MyCheckbox: React.FC<CheckboxProps> = ({componentSize, asButton, layout, fluid}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const handleChange = (arg) => {
        setCheckboxState(arg)
    };

    return (
        <Checkbox asButton={asButton} layout={layout} fluid={fluid} id="1" checked={checkboxState} componentSize={componentSize} handleChange={handleChange}> 
            <BoxStyled
            componentSize={componentSize}
            checked={checkboxState}
            >
                { checkboxState && <Icon name="check" color="primary" animation={true}/> }
            </BoxStyled>    
        </Checkbox>

    )
}


export const MyLabelCheckbox: React.FC<CheckboxProps> = ({componentSize, asButton, layout, fluid}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const handleChange = (arg) => {
        setCheckboxState(arg)
    };

    return (
        <Checkbox asButton={asButton} layout={layout} fluid={fluid} id="2" checked={checkboxState} componentSize={componentSize} handleChange={handleChange}> 
            <BoxStyled
            componentSize={componentSize}
            checked={checkboxState}
        >
                { checkboxState && <Icon name="check" color="primary"  animation={true} /> }
            </BoxStyled> 
            <Label componentSize={componentSize}>Label</Label>
        </Checkbox>

    )
}

export const MyLabelCheckboxReversed: React.FC<CheckboxProps> = ({componentSize, asButton, layout, fluid}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const handleChange = (arg) => {
        setCheckboxState(arg)
    };

    return (
        <Checkbox asButton={asButton} id="3" checked={checkboxState} componentSize={componentSize} layout={layout} fluid={fluid} handleChange={handleChange}> 
        <Label componentSize={componentSize}>Label</Label>
            <BoxStyled
            componentSize={componentSize}
            checked={checkboxState}
        >
                { checkboxState && <Icon name="check" color="primary"  animation={true} /> }
            </BoxStyled> 
        </Checkbox>

    )
}