import React from 'react'

export default function Alert(props) {

  const changeToUpperCase = (word) => {
    const text  = word.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
  props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
    <strong>{changeToUpperCase(props.alert.type)}</strong>: {props.alert.msg}
    
    </div>
  )
}
