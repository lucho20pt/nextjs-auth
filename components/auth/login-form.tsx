import React from 'react'
import { CardWrapper } from './card-wrapper'

export const Loginform = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login form
    </CardWrapper>
  )
}