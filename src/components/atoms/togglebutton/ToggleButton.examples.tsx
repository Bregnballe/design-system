import React, {useState} from 'react'
import {ToggleButton} from './ToggleButton'
import {Icon} from '../icon/Icon'
import {ToggleButtonProps} from './ToggleButton.interface'

export const MyToggleButton: React.FC<ToggleButtonProps> = ({color, fluid, layout, componentSize}) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <ToggleButton componentSize={componentSize} color={color} layout={layout} fluid={fluid} selected={selected} handleClick={handleClick}>
            <span>Hey</span>
            {selected && <Icon color="primary" name="check" animation={true}/>}
        </ToggleButton>
    )
}

export const MyToggleButtonReversed: React.FC<ToggleButtonProps> = ({color, fluid, layout, componentSize}) => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <ToggleButton componentSize={componentSize} color={color}  layout={layout} fluid={fluid} selected={selected} handleClick={handleClick}>
            {selected && <Icon color="primary" name="check" animation={true}/>}
            <span>Hey</span>
        </ToggleButton>
    )
}

