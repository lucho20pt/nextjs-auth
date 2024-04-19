import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-cyan-900
"
    >
      {children}
    </main>
  )
}

export default AuthLayout
