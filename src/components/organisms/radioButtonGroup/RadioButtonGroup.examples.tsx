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


    const data = ["KaLabel1", "label2", "Label3"]

    const radioButtons = data.map((item) => 
        <RadioButton {...props} id={item} value={item} groupName="test" checked={radioButtonGroupState === item} handleChange={handleChange}> 
            <BoxStyled
            {...props}
            checked={radioButtonGroupState === item}
            >
                { radioButtonGroupState === item && <Icon name="circle" color="primary" animation={true}/> }
            </BoxStyled>   
            <Label {...props}>{item}</Label> 
        </RadioButton>
)    

    return (
        <RadioButtonGroup {...props}>
            {radioButtons}
        </RadioButtonGroup>

    )
}
