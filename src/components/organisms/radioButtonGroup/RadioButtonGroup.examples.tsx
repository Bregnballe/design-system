import React, {useState} from 'react'
import {RadioButtonGroup} from './RadioButtonGroup'
import {RadioButtonGroupProps} from './RadioButtonGroup.interface'
import {Icon} from '../../atoms/icon/Icon'
import {RadioButton} from '../../atoms/radioButton/RadioButton'
import {BoxStyled} from "../../atoms/radioButton/RadioButton.styles";
import {Label} from "../../atoms/label/Label"



export const MyRadioButtonGroup: React.FC<RadioButtonGroupProps> = ({...props}) => {

    const [radioButtonGroupState, setRadioButtonGroupState] = useState<string | null>(null);

    const handleChange = (val:string) => {
        setRadioButtonGroupState(val)
    };

    return (
        <RadioButtonGroup {...props}>
            <RadioButton {...props} id="0" value="0" groupName="test" checked={radioButtonGroupState === "0"} handleChange={handleChange}> 
                <BoxStyled
                {...props}
                checked={radioButtonGroupState === "0"}
                >
                    { radioButtonGroupState === "0" && <Icon name="circle" color="primary" animation={true}/> }
                </BoxStyled>   
                <Label {...props}>Label</Label> 
            </RadioButton>
            <RadioButton {...props} id="1"  value="1"  groupName="test" checked={radioButtonGroupState === "1"} handleChange={handleChange}> 
                <BoxStyled
                {...props}
                checked={radioButtonGroupState === "1"}
                >
                    { radioButtonGroupState === "1" && <Icon name="circle" color="primary" animation={true}/> }
                </BoxStyled> 
                <Label {...props}>Label</Label>   
            </RadioButton>
            <RadioButton {...props} id="2" value="2"  groupName="test" checked={radioButtonGroupState === "2"} handleChange={handleChange}> 
                <BoxStyled
                {...props}
                checked={radioButtonGroupState === "2"}
                >
                    { radioButtonGroupState === "2" && <Icon name="circle" color="primary" animation={true}/> }
                </BoxStyled> 
                <Label {...props}>Label</Label>   
            </RadioButton>
        </RadioButtonGroup>

    )
}
