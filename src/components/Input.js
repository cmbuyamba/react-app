import React from 'react'

const Input = ({ name, onChange, value, label }) => {
    return <>
        <label>{label}</label>
        <input name={name} onChange={onChange} value={value} type="text"/>
        <br />
    </>
}

export default Input;