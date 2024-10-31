import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { useDispatch } from 'react-redux'
import { Input } from '../input/Input'

export function SettingsCount() {
  
  const min = useAppSelector(state => state.counter.min)
  const max = useAppSelector(state => state.counter.max)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <span>max value:</span>
        <Input
          type='number'
          value={max}
        />
      </div>
      <div>
        <span>start value:</span>
        <Input
          type='number'
          value={min}
        />
      </div>

    </div>
  )
}