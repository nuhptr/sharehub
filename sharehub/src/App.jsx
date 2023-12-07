import { RouterProvider, Navigate, createBrowserRouter } from "react-router-dom"

import Users from "./user/pages/users"
import NewPlaces from "./places/pages/new-places"
import MainNavigation from "./shared/components/main-navigation"

const router = createBrowserRouter([
   {
      path: "/",
      exact: true,
      element: (
         <>
            <MainNavigation />
            <Users />
         </>
      ),
   },
   {
      path: "places/new",
      element: (
         <>
            <MainNavigation />
            <NewPlaces />
         </>
      ),
   },

   // Redirects
   { path: "*", element: <Navigate to="/" /> },
])

export default function App() {
   return (
      <main>
         <RouterProvider router={router} />
      </main>
   )
}
