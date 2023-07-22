import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'

import store from './store'
import { router } from './routes/router'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  )
})
