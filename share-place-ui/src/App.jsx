import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Users from './user/pages/users'
import NewPlace from './places/pages/new-place'

const router = createBrowserRouter([
   { path: '/', element: <Users /> },
   { path: '*', element: <Navigate to='/' /> },
   { path: '/places/new', element: <NewPlace /> },
])

export default function App() {
   return <RouterProvider router={router} />
}
