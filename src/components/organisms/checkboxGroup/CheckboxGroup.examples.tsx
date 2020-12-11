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


export const MyCheckboxGroup: React.FC<CheckboxGroupProps> = ({reducer = () => {}, ...props}) => {

    const {selectedList, toggleIndex} = useToggle({
        reducer: reducer,
        })
    
        const handleChange = (arg) => {
            console.log(arg)
            arg !== undefined && toggleIndex(arg)
        }

    return (
        <CheckboxGroup {...props}>
            <Checkbox {...props} id="0" index={0} checked={selectedList[0]} handleChange={handleChange}> 
            <BoxStyled
            {...props}
            checked={selectedList[0]}
            >
                { selectedList[0] && <Icon name="check" color="primary" animation={true}/> }
            </BoxStyled>    
            <Label {...props}>Label</Label>
        </Checkbox>
        <Checkbox {...props} id="1" index={1} checked={selectedList[1]} handleChange={handleChange}> 
            <BoxStyled
            {...props}
            checked={selectedList[1]}
            >
                { selectedList[1] && <Icon name="check" color="primary" animation={true}/> }
            </BoxStyled>  
            <Label {...props}>Label</Label>  
        </Checkbox>
        <Checkbox {...props} id="2" index={2} checked={selectedList[2]} handleChange={handleChange}> 
            <BoxStyled
            {...props}
            checked={selectedList[2]}
            >
                { selectedList[2] && <Icon name="check" color="primary" animation={true}/> }
            </BoxStyled>  
            <Label {...props}>Label</Label>  
        </Checkbox>
        </CheckboxGroup>

    )
}
