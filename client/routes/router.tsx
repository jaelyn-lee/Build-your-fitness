import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Root from './Root'
import Home from '../views/Home'
import UserForm from '../components/UserForm'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="user-form" element={<UserForm />} />
    </Route>,
  ),
)
