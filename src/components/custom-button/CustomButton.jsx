import React from 'react'
import './CustomButtonStyle.scss'


const CustomButton = ({children, ...otherProps}) => ( //children props is what we pass btw component <abc>This is children</abc>
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)
export default CustomButton;