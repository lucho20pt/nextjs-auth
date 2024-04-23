import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
  message?: string
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 text-sm p-3 text-destructive bg-destructive/15 rounded-md">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}
