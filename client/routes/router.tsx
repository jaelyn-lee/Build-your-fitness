import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Root from './Root'
import Home from '../views/HomeView'
import UserForm from '../components/UserForm'
import Goal from '../components/Goal'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="user-form" element={<UserForm />} />
      <Route path="goal" element={<Goal />} />
    </Route>,
  ),
)