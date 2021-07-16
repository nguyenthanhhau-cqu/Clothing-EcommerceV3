import React from 'react';

import "./FormInputStyles.scss"

const FormInput = ({handleChange,label, ...formProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...formProps} />
        {label ? (
            <label
                className={`${
                    formProps.value ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;
