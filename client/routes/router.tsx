import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Root from './Root'
import Home from '../views/HomeView'
import FitnessLevelView from '../views/FitnessLevelView'
import GoalView from '../views/GoalView'
import UserFormView from '../views/UserFormView'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="user-form" element={<UserFormView />} />
      <Route path="goal" element={<GoalView />} />
      <Route path="fitness-level" element={<FitnessLevelView />} />
    </Route>,
  ),
)
