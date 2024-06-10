import { CardWrapper } from '@/components/auth/card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full justify-center">
        <ExclamationTriangleIcon className="text-destructive w-[24px] h-[24px]" />
      </div>
    </CardWrapper>
  )
}

export default ErrorCard
