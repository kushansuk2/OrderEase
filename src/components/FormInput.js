import React from "react";

const FormInput = (props) => {
    const { label, onChange, ...inputProps } = props; // here just takw what you want and put others in... others
    // <input name={name} placeholder={placeholder} label={label} type={type} value={value}></input> this syntax can be written in short like this
    <div className="Form-input-container">
        <label>{label}</label>
        <input onChange={onChange} {...inputProps}></input>;
    </div>;
    return;
};

export default FormInput;
