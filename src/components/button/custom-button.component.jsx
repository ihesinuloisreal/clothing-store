import React from 'react'
import './custom-button.styles.scss'
import { ButtonComponent } from './custom-button.style';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
// const CustomButton = ({children, ...props}) => {
  return (
    // <ButtonComponent
    //   {...props}
    // >
    //   {children}
    // </ButtonComponent>

    <button 
      className={`${inverted ? 'inverted':''} ${
        isGoogleSignIn ? ' google-sign-in' : ''
      } custom-button `} 
      {...otherProps}>
      {children}
    </button>
  )
}





export default CustomButton;