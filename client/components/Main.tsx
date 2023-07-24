import { useNavigate } from 'react-router-dom'
import Button from './UI/Buttons/Button'

export default function Main() {
  const navigate = useNavigate()

  function handleRedirect() {
    navigate('/user-form')
  }

  return (
    <>
      <h1>Welcome to our App</h1>
      <p>Under construction</p>
      <Button content="Start" onClick={handleRedirect} />
    </>
  )
}
