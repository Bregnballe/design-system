import React from 'react'
import {ToggleButtonStyled} from './ToggleButton.styles'
import {ToggleButtonProps} from './ToggleButton.interface'

export const ToggleButton: React.FC<ToggleButtonProps> = ({children, index, ...rest}) => {
  
    const handleClick = () => {
    if (index === undefined) {
      rest.handleClick && rest.handleClick()
      //if no index, run callback function w/o arguments
    } else {
      rest.handleClick && rest.handleClick(index)
      //else run callback function with index as argument
    }
  }

  const handleMouseDown = (e: React.FormEvent) => {
    e.preventDefault();
    // buttons receive focus on mousedown, so preventing that is as simple as using e.preventDefault()
  };

    return (
      <ToggleButtonStyled
        role="button"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        {...rest} 
      >
        { children }
      </ToggleButtonStyled>
    )
}
