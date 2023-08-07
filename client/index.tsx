import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { router } from './routes/router'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />,
  )
})
