import React, {useState} from 'react'
import {Checkbox} from './Checkbox'
import {Icon} from '../icon/Icon'
import {CheckboxProps} from './Checkbox.interface'
import {BoxStyled} from "./Checkbox.styles";
import {SpanStyled} from "./Checkbox.styles";

export const MyCheckbox: React.FC<CheckboxProps> = ({componentSize, asButton}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const handleChange = (val:boolean) => {
        setCheckboxState(val)
    };

    return (
        <Checkbox asButton={asButton} id="1" checked={checkboxState} componentSize={componentSize} handleChange={handleChange}> 
            <BoxStyled
            componentSize={componentSize}
            checked={checkboxState}
        >
                { checkboxState && <Icon name="check" color="primary" componentSize={componentSize} /> }
            </BoxStyled>    
        </Checkbox>

    )
}


export const MyLabelCheckbox: React.FC<CheckboxProps> = ({componentSize, asButton}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const handleChange = (val:boolean) => {
        setCheckboxState(val)
    };

    return (
        <Checkbox asButton={asButton} id="2" checked={checkboxState} componentSize={componentSize} handleChange={handleChange}> 
            <BoxStyled
            componentSize={componentSize}
            checked={checkboxState}
        >
                { checkboxState && <Icon name="check" color="primary" componentSize={componentSize} /> }
            </BoxStyled> 
            <SpanStyled checked={checkboxState} componentSize={componentSize}>Label</SpanStyled>
        </Checkbox>

    )
}

export const MyLabelCheckboxReversed: React.FC<CheckboxProps> = ({componentSize, asButton}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const handleChange = (val:boolean) => {
        setCheckboxState(val)
    };

    return (
        <Checkbox asButton={asButton} id="3" checked={checkboxState} componentSize={componentSize} handleChange={handleChange}> 
        <SpanStyled checked={checkboxState} componentSize={componentSize}>Label</SpanStyled>
            <BoxStyled
            componentSize={componentSize}
            checked={checkboxState}
        >
                { checkboxState && <Icon name="check" color="primary" componentSize={componentSize} /> }
            </BoxStyled> 
        </Checkbox>

    )
}