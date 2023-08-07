import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewUser } from '../api/users'

export default function UserForm() {
  const navigate = useNavigate()
  const initialState = {
    first_name: '',
    last_name: '',
    age: 0,
    height: 0,
    weight: 0,
    target_weight: 0,
  }

  const [formData, setFormData] = useState(initialState)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('form data:', formData)
    await addNewUser(formData)
    navigate('/goal')
  }

  return (
    <>
      <h1 className="userInfo-heading">CHOOSE YOUR PERFECT BODY</h1>
      <form
        action="/user-form"
        method="POST"
        className="grid place-content-center w-full m-auto gap-4"
      >
        <div className="flex justify-between">
          <label htmlFor="first_name">FIRST NAME: </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="text-slate-900"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="last_name">LAST NAME: </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="text-slate-900"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="age">AGE: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="text-slate-900"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="height">HEIGHT: </label>
          <input
            type="float"
            placeholder="cm"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="text-slate-900"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="weight">WEIGHT: </label>
          <input
            type="float"
            placeholder="kg"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="text-slate-900"
          ></input>
        </div>
        <div className="flex justify-between">
          <label htmlFor="target_weight">TARGET WEIGHT: </label>
          <input
            type="float"
            placeholder="kg"
            name="target_weight"
            value={formData.target_weight}
            onChange={handleChange}
            className="text-slate-900"
          ></input>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-red text-white py-2 px-14 rounded-3xl text-xl"
        >
          Submit
        </button>
      </form>
    </>
  )
}
