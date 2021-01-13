import React from 'react'
import './Input.css'

const Input = ({ name, onChange, value, label, placeholder, type }) => {
    return <>
        <label>{label}</label>
        <input className="input-text" placeholder={placeholder} name={name} onChange={onChange} value={value} type={type}/>
        <br />
    </>
}

export default Input;