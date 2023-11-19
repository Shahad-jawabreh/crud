import React from 'react'

export default function Input({name,title,type,onChange,value}) {
  return (
    <div className="form-group">
    <label htmlFor="exampleInputPassword1">{title}</label>
    <input type={type} className="form-control" name={name} onChange={onChange} value={value}/>
    </div>
  )
 }

