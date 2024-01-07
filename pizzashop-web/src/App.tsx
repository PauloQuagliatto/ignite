import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { router } from '@/routes'
import { Toaster } from '@/components/ui/sonner'

import '@/global.css'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza shop'/>
      <Toaster />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
