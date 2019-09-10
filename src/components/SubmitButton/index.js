import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled }) => {
  return <Button onClick={onClick} disables={disabled}>{children}</Button>
}
