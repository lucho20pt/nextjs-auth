import { auth } from '@/auth'

const SettingsPage = async () => {
  const session = await auth()
  return (
    <div className="text-2xl text-center">
      Settings Page {JSON.stringify(session)}
    </div>
  )
}

export default SettingsPage
