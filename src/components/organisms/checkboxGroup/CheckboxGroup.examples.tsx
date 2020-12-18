import React from 'react'
import {CheckboxGroup} from './CheckboxGroup'
import {CheckboxGroupProps} from './CheckboxGroup.interface'
import {Icon} from '../../atoms/icon/Icon'
import {Checkbox} from '../../atoms/checkbox/Checkbox'
import {BoxStyled} from "../../atoms/checkbox/Checkbox.styles";
import {Label} from "../../atoms/label/Label"
import {useToggle} from '../../../hooks/useToggle'


interface AccordionProps {
    reducer?: () => any[];
};

const data = ["KaLabel1", "label2", "Label3"]


export const MyCheckboxGroup: React.FC<CheckboxGroupProps> = ({reducer = () => {}, ...props}) => {

    const {selectedList, toggleIndex} = useToggle({
        reducer: reducer,
        })
    
        const handleChange = (arg) => {
            console.log(arg)
            arg !== undefined && toggleIndex(arg)
        }

    const checkboxes = data.map((data, i) => 
        <Checkbox {...props} id={data} index={i} checked={selectedList.includes(i)} handleChange={handleChange}> 
            <BoxStyled
            {...props}
            checked={selectedList.includes(i)}
            >
                { selectedList.includes(i) && <Icon name="check" color="primary" animation={true}/> }
            </BoxStyled>    
            <Label {...props}>{data}</Label>
        </Checkbox>

    )    

    return (
        <CheckboxGroup {...props}>
            {checkboxes}
        </CheckboxGroup>

    )
}
