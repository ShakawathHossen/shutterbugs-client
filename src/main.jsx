import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom"
import router from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



// Create a client
const queryClient = new QueryClient()


 
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProviders>
)
