import React from 'react'
import './custom-button.styles.scss'
import { ButtonComponent } from './custom-button.style';

const CustomButton = ({children, ...props}) => {
  return (
    <ButtonComponent
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}

export default CustomButton;