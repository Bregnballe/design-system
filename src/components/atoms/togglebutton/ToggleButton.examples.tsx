import React, {useState} from 'react'
import {ToggleButton} from './ToggleButton'
import {Icon} from '../icon/Icon'

export const MyToggleButton = () => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <ToggleButton color="primary" selected={selected} handleClick={handleClick}>
            <span>Hey</span>
            {selected && <Icon color="primary" name="check" componentSize="small" />}
        </ToggleButton>
    )
}

export const MyToggleButtonReversed = () => {
    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }

    return (
        <ToggleButton color="secondary" selected={selected} handleClick={handleClick}>
            {selected && <Icon color="primary" name="check" componentSize="small" />}
            <span>Hey</span>
        </ToggleButton>
    )
}

