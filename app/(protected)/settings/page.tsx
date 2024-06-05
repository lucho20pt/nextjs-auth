import { auth, signOut } from '@/auth'

const SettingsPage = async () => {
  const session = await auth()
  return (
    <div className="text-md">
      <h4>Settings Page</h4>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server'
          await signOut({ redirectTo: '/auth/login' })
        }}
      >
        <div className="text-center">
          <button className="btn border p-2 bg-gray-700 hover:bg-gray-400 text-white rounded-md">
            Sign Out
          </button>
        </div>
      </form>
    </div>
  )
}

export default SettingsPage
