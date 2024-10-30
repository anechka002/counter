import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { useDispatch } from 'react-redux'
import { Input } from '../input/Input'

export function SettingsCount() {
  const {minInputValue, maxInputValue} = useAppSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <span>max value:</span>
        <Input
          type='number'
          value={maxInputValue}
        />
      </div>
      <div>
        <span>start value:</span>
        <Input
          type='number'
          value={minInputValue}
        />
      </div>

    </div>
  )
}