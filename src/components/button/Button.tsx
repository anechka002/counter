import React, { ButtonHTMLAttributes } from 'react'

type PropsType = {
  title: string
  callBack: () => void
}&ButtonHTMLAttributes<HTMLButtonElement>

function Button({title, callBack, ...restProps}: PropsType) {
  const onClickHandler = () => {
    callBack()
  }
  return (
    <button {...restProps} onClick={onClickHandler}>{title}</button>
  )
}

export default Button