import React from "react"
import { RouterProvider, Navigate, createBrowserRouter } from "react-router-dom"

import Users from "./user/pages/users"
import NewPlaces from "./places/pages/new-places"

const router = createBrowserRouter([
   { path: "/", element: <Users />, exact: true },
   { path: "places/new", element: <NewPlaces /> },

   // Redirects
   { path: "*", element: <Navigate to={"/"} /> },
])

export default function App() {
   return <RouterProvider router={router} />
}
