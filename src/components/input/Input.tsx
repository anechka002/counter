import React, { ChangeEvent, ComponentPropsWithRef } from 'react'

type Props = {
  onChangeValue?:(value: string) => void
}& ComponentPropsWithRef<'input'>

export function Input({ onChange, onChangeValue, ...restProps }: Props) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }
  return (
    <input {...restProps} onChange={handleOnChange}/>
  )
}

