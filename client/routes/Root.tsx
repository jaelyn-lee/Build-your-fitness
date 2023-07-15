import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../views/Home'

function Root() {

  return (
    <>
      <Header />
      <Home/>
      <Outlet />
    </>
  )
}

export default Root
