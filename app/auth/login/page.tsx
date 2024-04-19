import { Loginform } from '@/components/auth/login-form'
import { CardWrapper } from '@/components/auth/card-wrapper'

const LoginPage = () => {
  return (
    <CardWrapper
      headerLabel="Wellcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Loginform />
    </CardWrapper>
  )
}

export default LoginPage
