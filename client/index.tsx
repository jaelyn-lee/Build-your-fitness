import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { router } from './routes/router'

const app = document.getElementById('app') as HTMLElement
const root = createRoot(app)

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  )
})
