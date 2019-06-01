import React from 'react';

export default function renderField(props) {
    const {type, label, input, meta: {touched, error, warning}} = props;

    return (
        <div className="render-field">
            <label>{label}</label>
            <React.Fragment>
                <input
                    className="input"
                    {...input} type={type} placeholder={label}/>
                {touched && ((error && <span className='error-text'>{error}</span>) || (warning && <span>{warning}</span>))}
            </React.Fragment>
        </div>
    )
}
