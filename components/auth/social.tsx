'use client'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        onClick={() => onClick('google')}
        className="w-full"
        size={'lg'}
        variant={'outline'}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button
        onClick={() => onClick('github')}
        className="w-full"
        size={'lg'}
        variant={'outline'}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  )
}
