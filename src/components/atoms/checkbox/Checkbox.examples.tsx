import React, {useState} from 'react'
import {Checkbox} from './Checkbox'
import {Icon} from '../icon/Icon'
import {CheckboxProps} from './Checkbox.interface'
import {BoxStyled} from "./Checkbox.styles";

export const MyCheckbox: React.FC<CheckboxProps> = ({componentSize}) => {

    const [checkboxState, setCheckboxState] = useState<boolean>(false);

    const handleChange = (val:boolean) => {
        setCheckboxState(val)
    };

    return (
        <Checkbox checked={checkboxState} componentSize={componentSize} handleChange={handleChange}> 
            <BoxStyled
            componentSize={componentSize}
            checked={checkboxState}
        >
                { checkboxState && <Icon name="check" color="primary" componentSize={componentSize} /> }
            </BoxStyled>    
        </Checkbox>

    )
}