import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserForm() {
  const navigate = useNavigate()
  const initialState = {
    firstName: '',
    lastName: '',
    age: 0,
    height: 0,
    weight: 0,
    targetWeight: 0,
  }

  const [formData, setFormData] = useState(initialState)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('form data:', formData)
    navigate('/user-form')
  }

  return (
    <>
      <h1 className="userInfo-heading">CHOOSE YOUR PERFECT BODY</h1>
      <form className="userInfo-form">
        <div>
          <label>FIRST NAME: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>LAST NAME: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>AGE: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>HEIGHT: </label>
          <input
            type="float"
            placeholder="cm"
            name="height"
            value={formData.height}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>WEIGHT: </label>
          <input
            type="float"
            placeholder="kg"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>TARGET WEIGHT: </label>
          <input
            type="float"
            placeholder="kg"
            name="targetWeight"
            value={formData.targetWeight}
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}
