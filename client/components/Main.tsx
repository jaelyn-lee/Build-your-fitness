import { useNavigate } from "react-router-dom"

export default function Main () {
  const navigate = useNavigate()

  function handleRedirect() {
    navigate('/user-form')
  }
  
  return (
    <>
      <h1>Welcome to our App</h1>
      <p>Under construction</p>
      <button onClick={handleRedirect}>Start</button>
    </>
  )
}