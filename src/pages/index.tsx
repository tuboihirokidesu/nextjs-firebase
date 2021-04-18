import useAuth from '../hooks/useAuth'

export default function Home() {
  const { user, signin } = useAuth()
  console.log(user)

  return (
    <div>
      <div>Aprenda programação direto ao ponto</div>
      <button onClick={() => signin()}>Connect Github</button>
    </div>
  )
}
