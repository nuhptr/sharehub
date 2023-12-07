import { Routes, Route, Navigate } from "react-router-dom"

import Users from "./user/pages/users"
import NewPlaces from "./places/pages/new-places"
import MainNavigation from "./shared/components/main-navigation"

export default function App() {
   return (
      <div>
         <MainNavigation />
         <main>
            <Routes>
               <Route path="/" exact element={<Users />} />
               <Route path="/places/new" exact element={<NewPlaces />} />
               <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
         </main>
      </div>
   )
}
