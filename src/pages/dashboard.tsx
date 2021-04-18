import useAuth from '../hooks/useAuth'

function Dashboard() {
  const { user, signout } = useAuth()

  return (
    <div>
      <h1>Dash: {user?.email}</h1>
      <button onClick={() => signout()}>signout</button>
    </div>
  )
}

export default Dashboard
