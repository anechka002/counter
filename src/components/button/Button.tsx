import React, { ButtonHTMLAttributes } from 'react'

type PropsType = {
  title: string
  callBack: () => void
}&ButtonHTMLAttributes<HTMLButtonElement>

function Button({title, callBack, disabled, ...restProps}: PropsType) {
  return (
    <button {...restProps} disabled={disabled} onClick={callBack}>{title}</button>
  )
}

export default Button