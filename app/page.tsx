// 'use client'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { LoginButton } from '@/components/ui/auth/login-button'
import { Button } from '@/components/ui/button'

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-cyan-900
    "
    >
      <section className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-bold text-cyan-100 drop-shadow-md',
            poppins.className
          )}
        >
          🔓 Auth
        </h1>
        <p className="font-semibold text-lg">A Simple Authentication service</p>

        <LoginButton asChild>
          <Button
            variant={'secondary'}
            size={'lg'}
            // onClick={() => {
            //   console.log('sign in')
            // }}
          >
            Sign in
          </Button>
        </LoginButton>
      </section>
    </main>
  )
}
