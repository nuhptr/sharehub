import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Users from './user/pages/User'
import NewPlaces from './places/pages/NewPlace'

const router = createBrowserRouter([
   { path: '/', element: <Users /> },
   { path: '*', element: <Navigate to='/' /> },
   { path: '/places/new', element: <NewPlaces /> },
])

export default function App() {
   return <RouterProvider router={router} />
}
